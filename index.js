var server = require('./simple-http/server');
var router = require('./simple-http/router');
var requestHandlers = require('./simple-http/requestHandlers');

server.start(55559, router.route, requestHandlers.handle);