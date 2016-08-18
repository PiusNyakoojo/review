let http = require('http');

http.createServer(function(req, res) {

    res.writeHead(200, { // Status Code is 200 OK
        'Content-Type': 'text/plain' // MIME-type is text/plain
    });

    res.end('Hello World \n'); // send response
    
}).listen(1337, '127.0.0.1'); // IP address for the local machine (i.e. localhost)

