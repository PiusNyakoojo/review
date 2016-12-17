/*
    HTTP and being a web server

    TCP/IP
        - 2 protocols that are the backbone of the internet
        - IP stands for Internet Protocol
        - TCP stands for Transmission Control Protocol

    Socket
        - Your operating systems networking abilities can open a socket and connect to another computer
        through a socket.
        - A socket is a line through which information flows through. It's where the information flows
        as it moves from one computer to another.
    
    protocols
        - A set of rules two sides agree on to use when communicating.
        - Both the client and server are programmed to understand and use that particular set of rules.
        - It's similar to two people from different countries agreeing on a language to speak in.

    With the client server model, a server performs services and a client requests a service. So how
    do the client and server identify each other? That's where TCP/IP gets involved.

    Each computer is assigned an IP address: a set of numbers that uniquely identifies that computer. the
    IP is a protocol where each computer agrees that they have this number that they can communicate with.
    This is how they identify one another.

    The information that we send through a socket is structured with its own type of protocol.
        - HTTP (web protocol)
        - FTP (File transfer protocol)
        - SMTP (email protocol)
    
    The information that's structured with these protocols is all traveling from computer to computer
    with the Internet Protocol to identify which computer to send the information.

    Now we need a protocol to identify how we send the actual information, not just how it's structured.
    The way that information is being sent is through TCP (Transmission Control Protocol).

    So in a quick summary. Your computer is uniquely identified using the Internet Protocol (IP). The
    operating system can use the IP to connect between other computers through a socket. Sockets send
    information that is structured using HTTP, FTP, or even SMTP. But this information itself is sent
    using the Transmission Control Protocol (TCP).

    TCP is the protocol that takes the information that is being sent through the socket and sends it one
    at a time (in pieces of data called packets).

    Since our operating system has access to these capabilities: namely, opening a socket and transmitting
    data packet by packet using TCP, Node can also access these features from its C++ core and wrap that
    functionality with javascript.

    Technically, you could build node to be a file server, email server and other server types. But it's
    mostly known for being a web server.

    TCP looks a lot like a stream. Essentially, it operates like a stream. And because of that, Node treats
    it as such.
    
    You may be familiar with the term socket already. Sockets have been around for a while. We open and close Sockets
    when communicating across the internet all the time. When click a link or request an image, etc.. a new socket
    is open.

    The idea of websocket is to keep the socket open constantly so that the client and server can send information to
    one another whenever they want.
*/

/*
    Addresses and Ports

    Port
        - Once a computer receives a packet, this is how it knows what program to send it to.
        - When a program is setup on the operating system to receive packets from a particular port,
        it is said that the program is 'listening' to that port.

    The socket address is the IP address and the port address. This way, information is sent to a particular
    program on a computer.

        78.132.160.4 is the IP address
        8080 is the port

        78.132.160.4:8080 is the socket address
    
    Usually we deal with some sort of domain name which maps to an IP address with its port.

        https://www.google.com

*/

/*
    HTTP
        - A set of rules (and a format) for data being transferred on the web.
        - Stands for 'Hypertext Transfer Protocol'. It's a format (of various) defining data being
        transferred via TCP/IP.

    Recall that we said TCP splits up the information we're sending across a socket into packets. That's the
    idea of a protocol: that the 2 sides agree to send the information in packets, as agreed using TCP. But
    what about the information itself. How is it structured when it reaches the client or server?

    HTTP isn't just used to structure text files, but also images, javascript files and many other file types
    across the web.

    Here is an example of an HTTP REQUEST:

        CONNECT www.google.com:443 HTTP/1.1
        Host: www.google.com
        Connection: keep-alive
    
    Headers are just name-value pairs separated by colons.

    Here is an example of an HTTP RESPONSE:

        HTTP/1.1 200 OK
        Content-Length: 44
        Content-Type: text/html

        <html><head>...</head></html>

    Again, this is just information sent in a certain format: a protocol, with which the browser and server
    have been programmed to understand.

        HTTP/1.1 200 OK is the status 'hey, did everything go well on the server?'

    The 2 following lines are headers, which are just name-value pairs separated by colons.

    The line with html content is the body. In this case it is HTML content. But it could be json, an image,
    javascript file, css file, etc..

    Something worth noting is the content type which is also known as the MIME Type.

    MIME Type (Multi-purpose Internet Mail Extentions)
        - A standard for specifying the type of data being sent.
        - Examples: application/json, text/html, image/jpeg
        - Was originally designed to specify how we send attachments in email.
        - HTTP has adopted it as well to specify the kind of data we're transmitting with any HTTP
        response
    
    The idea is that the server and the client understand what particular MIME-type is passed, and 
    there is code that is used to handle these cases.

    So when we're sending data from Node, we can specify the MIME-type: 'I'm about to send this kind
    of data.' That way whoever is receiving the data will be able to interpret it properly.
*/

/*
    HTTP_PARSER
        - this is code that is part of the Nodejs core
        - The program is written in C and parses both HTTP requests and responses.
        - https://github.com/joyent/http-parser

    Features:
        - No dependencies
        - Handles persistent streams (keep-alive)
        - Decodes chunked encoding
        - Upgrade support
        - Defends against buffer overflow attacks
    
    The parser extract the following information from HTTP messages:
        - Header fields and values
        - Content-Length
        - Request method
        - Response status code
        - Transfer-encoding
        - HTTP version
        - Request URL
        - Message body
*/

/*
    Let's build a webserver in Nodejs :D

*/

var http = require('http');

http.createServer(function(req, res) {

    res.writeHead(200, { // Status code 200 OK
        'Content-Type': 'text/plain' // MIME-type is text/plain
    });

    res.end('Hello World\n'); // This is the body

}).listen(1337, '127.0.0.1'); // 127.0.0.1 is the internal address for the local computer i.e. localhost

/*
    Outputting HTML and Templates.
        - We probably don't want to store our html in the string in res.end(), so what should we do?
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    // Status code 200: OK :)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    var html = fs.readFileSync(__dirname + '/index.html');

    res.end(html);

}).listen(1337, '127.0.0.1');

/*
    Templates
        - Text designed to be the basis for final text or content after being processed.
        - There's usually some specific template language, so the template system knows
        how to replace placeholders with real values.

    Creating dynamic templates (as seen in Angular 2) are easy to build:
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');

    var message = 'Hello world...';

    html = html.replace('{Message}', message); // replace {Message} with our message

    res.end(html); // send manipulated template back

}).listen(1337, '127.0.0.1'); // localhost:1337

/*
    We'll look at templating engines a bit later

    Because we're working with streams, we can take advantage of pipe() on readable streams
*/

var fs = require('fs');
var server = require('http').createServer(serverHandler);

function serverHandler(req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    fs.createReadStream(__dirname + '/index.html').pipe(res);
}

server.listen(1337, '127.0.0.1');

/*
    So rather than pulling the entire file into a buffer and then sending it, we'll send it a chunk at a time.
    Our buffer stays small and that means our application is faster, more responsive and more performant.

*/

/*
    API
        - A set of tools for building a software application.
        - Stands for 'Application Programming Interface'. On the web the tools are usually available via a set
        of URLs which accept and send only data via HTTP and TCP/IP.

    Endpoint:
        - One URL in a web API.
        - Sometimes that endpoint (URL) does multiple things by making choices based on the HTTP request headers.

    Let's look at outputting json from our server

        {
            'Content-Type': 'application/json'
        }

        ..

    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };

    res.end(JSON.stringify(obj));

    Serialize
        - Translating an object into a format that can be stored or transferred.
        - JSON, CSV (Comma separated values), XML, and others are populat
        - 'Deserialize' is the opposite (converting the format back into an object).
*/

/*
    Routing
        - Mapping HTTP requests to content.
        - Whether actual files that exist on the server, or not.
        - When you request a file on the internet, you're not actually directly communicating with a file
        you're only communicating with a server and telling it to do something. In this case, send back
        a particular image.

*/

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

/*
    Web Server Check list
        - Better ways to organize our code into reusable pieces
            - modules through require('')
        - Ways to Deal with files (both sync and async)
            - Using buffers built into node or the ES6 buffers help us deal with binary data
        - A way to deal with work that takes a long time
            - Doing things asynchronously or using streams.
        - The ability to communicate over the internet
            - Node under the hood is connected with the Operating systems management of TCP/IP and opening
            and closing sockets
        - The ability to accept requests and send responses (in the standard format)
            - This is possible using the HTTP for web requests

    What's given to us by Node is great but it would be nice to not handle a lot of things like routing our own
    way. It can get messy so we will use other tools to help us get the job done.

    Koa is a popular Nodejs framework but we'll use Express because it's even more widely adopted. So how do we
    install all that code into our application? Well thanks to Node modules, something that happened way before
    javascript supported modules natively: an explosion of open source modules.

    In fact, node is responsible for the largest ecosystem of code in history :D:D:D:D:D

    So next we'll look at NPM (Node Package Manager) and the NPM registry.
*/
