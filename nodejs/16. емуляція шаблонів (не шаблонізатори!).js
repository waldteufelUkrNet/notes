////////////////////////////////////////////////////////////////////////////////

// код html:
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Главная</title>
//   <meta charset="utf-8" />
// </head>
// <body>
//   <h1>{header}</h1>
//   <p>{message}</p>
// </body>
// <html>

const http = require("http"),
      fs   = require("fs");

http.createServer(function(request, response){
  fs.readFile("index.html", "utf8", function(error, data){
    let message = "Learn Node.js",
        header  = "Home page";
    data = data.replace("{header}", header)
               .replace("{message}", message);
    response.end(data);
  })
}).listen(3000);