exports.start = start;

var http = require('http');
var url = require('url');

function start(port, route, handle) {
    function onRequest(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} received.`);

        route(handle, pathname, res); // injected function call
    }

    http.createServer(onRequest).listen(port);

    console.log('server is working. port: ' + port);
}