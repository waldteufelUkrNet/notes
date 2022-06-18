////////////////////////////////////////////////////////////////////////////////

// Модуль domain допомагає відловлювати програмні помилки в асинхронному коді. В
// контексті domain можна запускати функції і він ловитиме усі помилки, включно
// з вкладеними функціями. Модуль застарів!!!

  let domain = require('domain'),
      server = require('./server');

  let serverDomain = domain.create();

  serverDomain.on('error', function(err){
    console.error('Домен перехопив %s ', err);
  });

  serverDomain.run(function(){
    server.listen(3000);
  });