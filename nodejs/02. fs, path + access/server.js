// http://localhost:3000/index.html?secret=o_O

let http  = require('http'),
    fs    = require('fs'),
    url   = require('url'),
    path  = require('path'),
    debug = require('debug')('server');

let ROOT = path.join(__dirname, "/public");

http.createServer(function(req,res){
  res.setHeader('Content-type', 'text/html; charset=utf-8');
  if ( !checkAccess(req) ) {
    res.statusCode = 403;
    res.end('403: Не достатньо прав для завантаження файлів');
    return
  }
  sendFileSafe(url.parse(req.url).pathname, res);
}).listen(3000);


function checkAccess (req) {
  return url.parse(req.url,true).query.secret == 'o_O';
}


function sendFileSafe(filePath, res) {

  try {
    filePath = decodeURIComponent(filePath); // %D1%8F
  } catch(e) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }

  if (~filePath.indexOf('\0')) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }

  //  /deep/nodejs.jpg ->  /Users/learn/node/path/public/deep/nodejs.jpg
  filePath = path.normalize(path.join(ROOT, filePath));

  if (filePath.indexOf(ROOT) != 0) {
    res.statusCode = 404;
    res.end("File not found");
    return;
  }

  fs.stat(filePath, function(err, stats) {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end("File not found");
      return;
    }

    sendFile(filePath, res);
  });
}

function sendFile(filePath, res) {

  fs.readFile(filePath, function(err, content) {
    if (err) throw err;

    var mime = require('mime').getType(filePath); // npm install mime
    res.setHeader('Content-Type', mime + "; charset=utf-8"); // text/html image/jpeg
    res.end(content);
  });

}