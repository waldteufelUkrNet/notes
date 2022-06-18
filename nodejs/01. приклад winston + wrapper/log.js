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
        filename  :'logs/debug.log',
        level     : 'debug'
      }),
      new winston.transports.File({
        filename  :'logs/error.log',
        level     : 'error'
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