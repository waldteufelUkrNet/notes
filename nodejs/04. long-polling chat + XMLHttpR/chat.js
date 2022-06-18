let debug = require('debug')('s:chat');

let clients = [];

exports.subscribe = function(req, res){

  clients.push(res);

  debug('subscribe ' + clients.length );

  res.on('close', function(){
    clients.splice(clients.indexOf(res), 1);
  });
};

exports.publish = function(message){
  debug("publish '%s'" + message);

  clients.forEach(function(res){
    res.end(message);
  });

  clients = [];
};