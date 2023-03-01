function view(res){
    console.log('request handler called --> view');
    write(res, `request handler called --> view. it's also default page.`);
}

function create(res){
    console.log('request handler called --> create');
    write(res, `request handler called --> create`);
}

function write(res, msg){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World! It\'s module server.\n');
    res.write(`msg : ${msg}\n`);
    res.end();
}

var handle = {}; // key-value pair.
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;

exports.handle = handle;