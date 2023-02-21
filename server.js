const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send(`Hello World!`);
});

app.post('/', function(req, res){
    res.send(`Hello World! post.`);
});

app.put('/', function(req, res){
    res.send(`Hello World! put.`);
});

app.delete('/', function(req, res){
    res.send(`Hello World! delete.`);
});


var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server is working : http://%s:%s', host, port);
});