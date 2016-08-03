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
	what that is.. Javascript by itself is synchronous.. meaning it runs on a single thread 


*/