/*
	Nodejs is an open source runtime environment for writing server-side code.

	Express is an npm package that is unopinionated and minimal in allowing us to handle routing
*/

/*
	Snippets allow us to add code snippets after a few commands + tab. For example

		cl + tab

	could be a snippet to get

		console.log('');

*/

/*
	^ allows us to increase the major version of the package: 4.xx.x

	~ allows us to increase the minor version of the package: 4.12.x

*/

/*
	Bower is a front-end package manager as opposed to npm which is a backend package manager.

*/

/*
	We can get free or paid bootstrap templates from

		bootstrapzero.com

*/

/*
	Recall that to listen to the server with app.listen() we pass the port which is a number. We don't have
	to pass the IP address.

	Typically this is good practice in case we deploy to a server

		let port = process.env.PORT || 3000;

		app.listen(port, (err) => {
			console.log('listening to ' + port);
		});
*/

/*
	app.use() is middleware for routing requests. When the server receives a request, if the request is for a resource
	that app.use() is assigned to respond to, then it will handle the request and pass control to additional
	middleware until an HTTP response is sent  or the middleware functions terminate.

	So the following will handle all files and search in public, and if the files aren't there, it will search
	in src/views
*/

app.use(express.static('public'));
app.use(express.static('src/views'));

/*
	To replace the packages that we import in the script or link tags in index.html, we can use bower to handle
	that. This is useful for instance if you prefer to have a specific version of a resource that's already
	on the web and don't want to include it in your local directory.

*/

/*
	Bower
		- A package manager for the web.
		- Installed with NPM
		- Flat package hierarchy (doesn't install dependencies that are already installed)
		- Works very similar to NPM
		- bower.json // instead of package.json
		- bower_components // instead of node_modules

		npm install bower -g

		bower init // creates bower.json

		bower install --save bootstrap // installs bootstrap and jquery since bootstrap has a dependency on jquery.


*/

/*
	We want bower to install files in our public directory. Create a new file called .bowerrc

	This is where bower will look for its configuration information

*/

{
	"directory": "public/lib"
}

/*
	Now if we install bower packages, they will be installed in public/lib rather than bower_components
*/

/*
	Get font-awesome

		bower install --save font-awesome

*/

/*
	Having to change things in the index.html and having to restart our server after every change can be
	quite annoying. we'll use gulp to automate a lot of these tasks for us.
*/