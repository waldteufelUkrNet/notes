////////////////////////////////////////////////////////////////////////////////

//Створення web-сервера на Node.js


  let http   = require('http'),    // підключення модуля
      server = new http.Server();  // взяти об'єкт з модуля (він є EventEmitter)
                                   // він слухає ip+port і відповідає на запити
  server.listen(1337,'127.0.0.1'); // призначити ip та port для прослуховування

  let counter = 0;
  server.on('request', function(req,res){  // події - для відповідей на запити
    res.end("Привіт, Світ! " + ++counter); // req - об'єкт запиту
  });                                      // res - об'єкт відповіді

// res.end() - передати дані, закрити з'єднання;
// res.write() - передати дані і не закривати з'єднання (для наступних передач)

// new http.Server() є об'єктом EventEmitter, який наслідує net.Server, який в
// свою чергу наслідує http.Server


// Створення echo-web-сервера на Node.js
// http://127.0.0.1:1337/echo?message=Hello -> Hello
  let http   = require('http'),
      url    = require('url'); // для парсингу url

  let server = new http.Server(function(req,res){

    let urlParsed = url.parse(req.url, true); // true - щоб query: 'message=Hello'
                                              // => { message: 'Hello' }

    // зчитування заголовків запиту
    console.log(req.headers);

    // встановлення заголовку-відповіді для коректного відображення кирилиці
    res.setHeader('Content-type', 'text/html; charset=utf-8');

    // заборона браузеру кешувати відповіді сервера
    res.setHeader('Cashe-Control', 'no-cashe'); // або:
    res.setHeader('Cashe-Control', 'no-cashe no-store must-revalidate');

    // removeHeader('Cashe-Control') - витерти заголовок

    if ( urlParsed.pathname == '/echo' && urlParsed.query.message ) {
      res.end(urlParsed.query.message);
    } else {
      res.statusCode = 404;
      res.end('Page not found');
    }
  });

server.listen(1337,'127.0.0.1');


// Варіанти запису заголовків:

// 1.
   res.setHeader('Content-type', 'text/html; charset=utf-8');
   res.statusCode = 404;

// У цьому випадку заголовки одразу не відправляються, а чекають на передачу
// яких-небудь даних, напр. при res.end()

// 2.
  res.writeHead(200, "OK", {'Cashe-Control', 'no-cashe'});

// Явний запис. Заголовки пишуться у відповідь одразу, не чекаючи на найближчий
// запис даних.