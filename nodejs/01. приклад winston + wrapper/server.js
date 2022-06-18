// http://127.0.0.1:1337/echo?message=Hello -> Hello
// http://127.0.0.1:1337/echo?message=lalala -> lalala
// http://127.0.0.1:1337/echo?text=Hello -> Page not found
// http://127.0.0.1:1337/echoho?message=Hello -> Page not found
// http://127.0.0.1:1337/index.html -> Page not found

let http = require('http'),
    log  = require('./log')(module);

let server = http.createServer();
server.on('request', require('./request'));
server.listen(1337);

log.debug("Server is running");