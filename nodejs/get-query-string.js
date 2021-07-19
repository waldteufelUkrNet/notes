const http = require('http'),
      url  = require('url');

new http.Server(function(req,res){
  console.log('req.url: ', req.url);
  let urlParsed = url.parse(req.url, true);
  console.log("urlParsed: ", urlParsed);

}).listen('3000');