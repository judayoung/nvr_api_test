function route(handle, pathname, res){
    console.log('About to route a request for ' + pathname);

    if(typeof handle[pathname] === 'function'){
        handle[pathname](res);
    }else{
        console.log('No request handler found for ' + pathname);
        writeNotFound(res);
    }
}

function writeNotFound(res){
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write(`Sorry, Not Found.`);
    res.end();
}

exports.route = route;