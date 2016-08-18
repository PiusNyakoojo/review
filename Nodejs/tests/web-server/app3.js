var fs = require('fs');
var server = require('http').createServer(serverHandler);

function serverHandler(req, res) {

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            firstname: 'John',
            lastname: 'Doe'
        }));
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('Page not found: 404');
    }
}

server.listen(1337, '127.0.0.1');