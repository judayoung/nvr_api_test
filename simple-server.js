var http = require('http');

function start(port) {
    function onRequest(req, res){
        console.log('Request received.');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World! It\'s module server.');
        res.end();
    }

    http.createServer(onRequest).listen(port);

    console.log('server is working. port: ' + port);
}

exports.start = start;