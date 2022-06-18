let http = require('http'),
    fs   = require('fs');

function handler(req,res){
  if (req.url == '/') {
    fs.readFile('index1.html', function(err, content){
      if (err) throw err;
      res.end(content);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}

let server = new http.createServer(handler);
module.exports = server;