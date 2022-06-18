////////////////////////////////////////////////////////////////////////////////

// Модуль debug
// "рекордсмен по простоті", вивід тільки в консоль

// 1. Встановити debug
// 2. Підключити у файлі-модулі і передати мітку (довільний ідентифікатор, який
//    потрібно буде вказувати в консолі):

  let debug = require('debug')('id');

// 3. В модулях, які підтягуються головним модулем, мітка повинна виглядати як
//    батьківська мітка:мітка залежного модуля, напр.:

  let debug = require('debug')('id:child_id');

// 4. У всіх місцях коду, де потрібен вивід якихось даних:

//  console.log() -> debug()

// 5. В консолі прописати змінну оточення DEBUG,
//    для windows:

//  set DEBUG=id              // debug() з головного файла з міткою id
//  set DEBUG=id:child_id     // debug() з файла з міткою id:child_id
//  set DEBUG=id, id:child_id // debug() з головного файла та файла з міткою id:child_id
//  set DEBUG=id:*            // debug() з усіх залежностей

// 6. node file_name.js / supervisor file_name.js


// Модуль winston
// може робити вивід у файл, базу даних і консоль.
// документація по winston:https://www.npmjs.com/package/winston

// Має 7 різних рівнів повідомлень за важливістю. За замовчуванням виводить
// тільки перші 3: winston.error(), winston.warn(), winston.info();

// Для простого виводу в консоль:
// 1. Встановити і підключити модуль
// 2. В потрібних місцях коду (вибирати самостійно, на свій розсуд):

//  console.log() -> winston.error()
//    -- // --    -> winston.warn()
//    -- // --    -> winston.info()

// Для виводу в log-файл:
  const winston = require('winston'),
        logger  = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      // Write all logs with level `error` and below to `error.log`
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // Write all logs with level `info` and below to `combined.log`
      new winston.transports.File({ filename: 'combined.log' }),
    ]
  });
  logger.info(…);

// Приклад з обгорткою для winston (echo-server):

// server.js
  const http = require('http'),
        log  = require('./log')(module);

  const server = http.createServer();
  server.on('request', require('./request'));
  server.listen(1337);

  log.debug("Server is running");

// request.js:
  let url = require('url'),
      log = require('./log')(module);

  module.exports = function(req,res){
    let urlParsed = url.parse(req.url, true);

    log.info('Got request, method: ' + req.method + ', url: ' + req.url);

    if (req.method == 'GET'
        && urlParsed.pathname == '/echo'
        && urlParsed.query.message) {

      let message = urlParsed.query.message;
      log.debug('Echo: ' + message);
      res.end(message);
      return;
    }

    log.error('Unknown URL');

    res.statusCode = 404;
    res.end('Not Found');
  };

// log.js:
  let winston = require('winston');

  module.exports = function(module) {
    return makeLogger(module.filename);
  }

  function makeLogger(path) {
    if ( path.match(/request.js$/) ) {

      let transports = [
        new winston.transports.Console({
          timestamp : true,
          colorize  : true,
          level     : 'info'
        }),
        new winston.transports.File({
          filename  :'debug.log',
          level     : 'debug'
        })
      ];

      const {format} = require('winston');
      const { combine, timestamp, label, printf } = format;
      const myFormat = printf(({ level, message, label, timestamp }) => {
        return `${timestamp} [${label}] ${level}: ${message}`;
      });

      return new winston.createLogger({
        format: combine(
            label({ label: 'some text' }),
            timestamp(),
            myFormat
          ),
        transports: transports
      });
    } else {
      return new winston.createLogger({
        transports: []
      });
    }
  }