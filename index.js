var server = require('./simple-http/server');
var router = require('./simple-http/router');

server.start(55559, router.route);