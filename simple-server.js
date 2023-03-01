var http = require('http');

http.createServer(function(req, res){
    console.log(`Server running at http://${req.headers.host}`);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Node. It\'s Anonymous Function.');
    res.end();
}).listen(55556);

function onRequest(req, res){
    console.log(`Server running at http://${req.headers.host}`);
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`Hello Node. It's Function onRequest.`);
    res.end();
}

http.createServer(onRequest).listen(55557);

var server3 = http.createServer();

server3.addListener('request', function(req, res){
    console.log(`Server running at http://${req.headers.host}`);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(`Hello Node. addListener. request.`);
    res.end();
});

server3.addListener('connection', function(req, res){
    console.log('client connected...'); // 왜 두번 찍힐까?
});

server3.listen(55558);