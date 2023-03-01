var server = require('./simple-server');
var router = require('./router');

server.start(55559, router.route);