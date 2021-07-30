let domain = require('domain'),
    server = require('./server');

let serverDomain = domain.create();

serverDomain.on('error', function(err){
  console.error('Домен перехопив %s ', err);
});

serverDomain.run(function(){
  server.listen(3000);
});