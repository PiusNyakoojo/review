/*
	Webpack Tools

	Agenda:
		- Connect Middleware
			- This will automatically watch your files and serve them up
			- This is middleware you use with a node.js webserver either with Connect or Express
			- It's very similar to the webpack-dev-server except it's a lot more fully featured and also more complex..
			- It's useful when you need to have a more complex server serving your files; and you're already using node
		- Creating a Custom Loader
			- We've already seen a few loaders, and there are a bunch more out there..
			- You may run into a place where you need a loader and will have to create it yourself.
		- Using Plugins
			- What are they and how do you use them?
*/

/*
	Webpack development middleware. This will allow you to automatically re-run webpack whenever your files are changed. It's
	essentially a replacement for the webpack-dev-server except that it runs in express. The webpack-dev-server works well
	when you're making a very simple application. But at a certain point, you'll need API end points that you can hit and
	that can get complex when running the webpack-dev-server. So you'll want to use something else.

	Create a server.js -- check example-build-7-webpack-middleware
	
	Install the packages

		npm install

	Run the server:

		node server.js
*/

/*
	Being able to create your own loader is useful when working with webpack. We'll create a loader that can strip comments
	out of JSON objects.

	The json-loader allows us to use json objects using a require statement

		requite('some-json-object');

	strip-json-comments will remove comments from json. This will be the core of our loader.

		npm install

	to install all the modules.

	this.cacheable(); let's webpack know that this loader is cacheable. Meaning that it is deterministic: given the same input,
	it will produce the same output. Usually you wouldn't set the this.cacheable(); if you're outputting something based on random number
	generation or creating UUID based on a clock, etc..

	this.cacheable() allows webpack to be more performant because it won't have to run the loader twice if we ever have the
	same 2 inputs through the loader. And ultimately, this results in faster builds.

*/

/*
	Where loaders are pieces that transform files, plugins are a bit more like grunt tasks; they can work on the entire bundle.
	So you can do a lot of things with plugins that you can't effectively do with loaders.
	
	We use a plugin to create a global variable for the rest of our build to use.
*/
