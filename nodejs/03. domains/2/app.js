let domain       = require('domain'),
    serverDomain = domain.create(),
    server;

serverDomain.on('error', function(err){
  console.error('Server error', err);
  if (server) server.close();

  setTimeout(function(){
    process.exit(1);
  },1000).unref();
});

serverDomain.run(function(){
  let http     = require('http'),
      handler  = require('./handler');
  // let database = require('mongodb');

  server = http.createServer(function(req, res){
    let reqDomain = domain.create();
    reqDomain.add(req);
    reqDomain.add(res);

    reqDomain.on('error', function(error){
      res.statusCode = 500;
      res.end('Sorry, ' + err);
      // ...
      serverDomain.emit('error', err);
    });

    reqDomain.run(function(){
      handler(req, res);
    });
  });

  server.listen(3000);
});