/*
	The Node Core
		- Node.js is a server technology. It's designed for you to write code in javascript and do things a web server ought
			to know how to do.

	A Server is a computer that is performing services. It's just a computer and it's performing jobs that are requested of it.
	A Client asks for those services. The client might also handle some work but the server does the heavier, deeper amount of work.
	The client makes a request to the server, for something to be done.. and the server responds with verification, perhaps, that the work
	has been performed, or error messages or data, or other things.

	The request is written in a standard format that both the client and the server are programmed to understand. And so is the response. So the
	client and server are both computers. And in fact, they be the same computer in some circumstances. This is called the Client-Server model
	of computing.

	One popular way of applying this model is with web servers. Web servers are the servers that do work when requested to by the Browser, which acts
	as the client that receives responses.

	The standard format or language that the Request and Reponse are written in is called HTTP.

	We talked about the V8 engine earlier and mentioned that it can be embedded in any C++ application. Google chrome's browser is an application that's
	written in C++ and embeds the V8 engine. Thus we can take javascript that follows the ECMASCRIPT specifications and generate machine code that is
	understandable to the processor. However, if you've used things like jQuery or XMLHTTPRequests (xhr) you've actually used things that are added to the
	javascript language that ARE NOT specified in the ECMASCRIPT standards.. These are things that the Chrome application adds to the javascript language
	to allow additional features like manipulating the DOM or performing asynchronous requests to a Web Server. Javascript as specified by the ECMASCRIPT
	standards does not support manipulating the DOM.. it doesn't know what that is.. it doesn't know how to perform asynchronous events.. it doesn't know
	what that is.. Javascript by itself is synchronous.

	
	Nodejs isn't just used as a web server but it's most popular for this context so we don't have to switch between languages when working
	on both the browser and server side of developing web applications.
*/

/*
	What does Javascript need to manage a server?!?!

		- Javascript needs a better way to organize its code into re-usable pieces.
			- The new version of javascript (ES6) has ways for us to do this (export, import)
			- Nodejs has its own way of making this possible
		- A way to deal with files
			- If you're a web server, you're likely going to need a way to deal with files, whether they are zip files or images, etc..
		- A way to communicate with a database
			- Web servers will fetch data from database in most applications.
		- Ability to communicate over the internet
			- Javascript by default doesn't have that.. it's not in the ECMASCRIPT standard specifications
		- The ability to accept requests and send responses (in the standard format)
		- A way to deal with work that takes a long time
			- We want other people to access the web server even when it's doing work for other users

		These are just a few problems that we need to consider when building a web server technology.
	
	While C++ is the core side of Node.js, there is another side: The Javascript Core
	There are plenty of C++ utilities within Node.js; however, There is also pure javascript written for you to make
	using those features easier. Node.js includes a lot of wrappers around the C++ functions to make development easier.

	For example, zlib.js is for dealing with zip files and fs.js is for handling files.

	You may also encounter the line
		var binding = process.binding('some-file');

	This takes some C++ feature and makes it available in javascript. So this is essentially going out and getting the some-file
	C++ objet. However, not all the javascript features are about wrapping around C++ features. For example, util.js is just a bunch
	of functions that are useful. Things that we could have written ourselves, but were given to us for free by the Nodejs team.

	So we can see that Node.js is a framework as well as a library of code.

	
	Here's an example web server with Nodejs

*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'test/plain');
	res.end('Hello World\n');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});