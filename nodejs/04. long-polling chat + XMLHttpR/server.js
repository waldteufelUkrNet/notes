let http  = require('http'),
    fs    = require('fs'),
    chat  = require('./chat'),
    debug = require('debug')('s');

http.createServer(function(req,res){
  switch (req.url) {
    case '/':
      sendFile('index.html', res);
      break;
    case '/subscribe':
      chat.subscribe(req, res);
      // ...
      break;
    case '/publish':
      let body = '';

      req.on('readable', function(){
        let data = req.read();
        if (data) {
          body += data;
          if (body.length > 1e5) {
            res.statusCode = 413;
            res.end('Your message is too big for my little chat');
            req.destroy();
          }
        }
      });

      req.on('end', function(){
        try {
          body = JSON.parse(body);
        } catch(e) {
          res.statusCode = 400;
          res.end("Bad request");
          return;
        }

        chat.publish(body.message);
        res.end('ok');
      });

      break;
    default:
      res.statusCode = 404;
      res.end("Not found");
  }
}).listen(3000);

function sendFile(fileName, res) {
  let fileStream = fs.createReadStream(fileName);
  fileStream
    .on('error', function() {
      res.statusCode = 500;
      res.end("Server error");
    })
    .pipe(res)
    .on('close', function() {
      fileStream.destroy();
    });
}
