exports.start = start;

var http = require('http');
var url = require('url');

function start(port, route) {
    function onRequest(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log(`Request for ${pathname} received.`);

        route(pathname); // injected function call

        write(res, `pathname=${pathname}`);
    }

    http.createServer(onRequest).listen(port);

    console.log('server is working. port: ' + port);
}

function write(res, msg){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World! It\'s module server.\n');
    res.write(`msg : ${msg}\n`);
    res.end();
}