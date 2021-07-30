// http://localhost:3000/big.html

// 1. Безпотоковий варіант
const http = require('http'),
      fs   = require('fs');

new http.Server(function(req,res){
  if (req.url == '/big.html') {

    fs.readFile('big.html', function(err, content){
      if (err) {
        res.statusCode = 500;
        res.end('Server error');
      } else {
        res.setHeader('Content-type', 'text/html; charset=utf-8')
        res.end(content);
      }
    });
  } else {
    res.end('sorry, bad url');
  }
}).listen(3000);


// 2. Варіант з read()/write()
let http = require('http'),
    fs   = require('fs');

new http.Server(function(req,res){
  if (req.url == '/big.html') {

    let file = new fs.ReadStream('big.html');
    sendFile(file, res);

  } else {
    res.end('sorry, bad url');
  }
}).listen(3000);


function sendFile(file,res) {
  file.on('readable', write);

  function write() {
    let fileConnect = file.read();

    // якщо файл зчитаний швидко, а швидкість передачі даних у клієнта низька,
    // файл зависне у буфері, тому res.write(fileConnect) - поганий варіант.
    // Ось код замість нього:
    if( fileConnect && !res.write(fileConnect) ) {
      file.removeListener('readable', write);

      res.once('drain', function(){
        file.on('readable', write);
        write();
      });
    }
  }
  file.on('end', function(){
    res.end();
  });
}


// 3. Варіант з pipe()
let http = require('http'),
    fs   = require('fs');

new http.Server(function(req,res){
  if (req.url == '/big.html') {

    let file = new fs.ReadStream('big.html');
    sendFile(file, res);

  } else {
    res.end('sorry, bad url');
  }
}).listen(3000);

function sendFile(file, res){
  file.pipe(res);

  file.on('error', function(err){
    res.statusCode = 500;
    res.end('Server Error');
    console.error(err);
  });

  file.on('close', function(){
    console.log('close');
  });

  res.on('close', function(){
    file.destroy();
  });
}

// 4. Варіант з createReadStream() + pipe()
const http = require("http"),
      fs   = require("fs");

http.createServer(function(request, response){

  // получаем путь после слеша
  const filePath = request.url.substr(1);
  // смотрим, есть ли такой файл
  fs.access(filePath, fs.constants.R_OK, err => {
    // если произошла ошибка - отправляем статусный код 404
    if(err){
      response.statusCode = 404;
      response.end("Resourse not found!");
    }
    else{
      fs.createReadStream(filePath).pipe(response);
    }
  });
}).listen(3000, function(){
  console.log("Server started at 3000");
});