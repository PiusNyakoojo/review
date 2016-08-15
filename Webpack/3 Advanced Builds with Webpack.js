/*
	In this module we'll discuss a few advanced topics about doing builds with webpack

	Agenda:
		- Organizing Files
			- how to organize our files and deal with the source files and the built output files and how to get webpack
				to put that somewhere that won't deal with your source control
		- ES6 Modules
			- How to handle ES6 modules instead of just CommonJS
		- Source Maps
			- How does webpack support source maps?
		- Multiple Bundles
			- How to create multiple bundles.
*/

/*
	--------------------------------------- Organizing Files and Folders ------------------------------------

		public
			- index.html
		js
			- app.js
			- login.es6
			- utils.js

	We're going to control where we build the bundle.js file to. In the webpack.config.js add the following
*/
var path = require('path'); // a built in module with node

module.exports = {

	// this sets a relative root directory for the entry key. So webpack is going to look for utils.js and app.js inside the
	// js directory

	context: path.resolve('js'),

	entry: ['./utils', './app.js'],

	output: {
		// this tells webpack to build the bundle.js inside the build directory in the js folder
		path: path.resolve('build/js/'),


		// this tells webpack where the bundle.js will be served from the public
		// this is info is useful for the dev server so it knows that the build will be requested from /public/assets/js
		publicPath: '/public/assets/js/',


		filename: 'bundle.js'
	},

	// Now we're going to tell the dev server that when someone requests the index.html, the server should look in /public
	devServer: {
		contentBase: 'public'
	},
	// ...
}


/*
	Any requests for /public/assets/js will be served from build/js/ That's what the path and publicPath settings provide.
	
	Notice that our build/js isn't created when we run webpack-dev-server. This is because the dev server doesn't write the
	output to disc. However if we run

		webpack

	That file will be created.
*/

/*
	--------------------------------------- Working with ES6 Modules ------------------------------
	
	In this section we'll use Babel to transpile our ES6 syntax into CommonJS so that webpack can understand it.
*/

// app.js -> rename to -> app.es6  since babel is configured to work with .es6 files
import { login } from './login';

// webpack.config.js
entry: ['./utils', './app'] // rather than './app.js'

// login.es6

//...

export { login };

/*
	--------------------------------------- Add Source Map support with Webpack ------------------------------
	
	This is actually extremely easy since webpack has source maps built in.

	If we're going to generate our build using the webpack command we just add -d and that will generate the source maps
	for our javascript files

		webpack -d

	If we use the webpack-dev-server we add -d as well.

		webpack-dev-server -d

	To test this:
*/

// utils
// ...
debugger; // this will stop executing the application and in the console, it will show that this happened inside the utils.js
// even though the javascript was completely combined after building

/*
	This will still work with

		webpack-dev-server -d -p

	which minifies our code
*/

/*
	One thing that multiple bundles is useful for is Lazy Loading

	We'll simulate that by creating 3 html files that each point to a different javascript file.
	
	Create these files

		js
			- about_page.js
			- contact_page.js
			- home_page.js
		public
			- about.html
			- contact.html
			- home.html

	In the webpack config, we will require the webpack module and create and use CommonsPlugin
*/

var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

/*
	Then add 

		plugins: [commonPlugin]

	to the module.exports object

	Change the entry point from the array of './utils' and './app' to

		entry: {
			about: './about_page.js',
			home: './home_page.js',
			contact: './contact_page.js'
		}, ...

	In the output, we'll leave path and publicPath alone, but the file name of the js files will be changed..

	Instead of bundle.js, we'll change the name to something depending on the value of the entry point file.

		output: {
			//..

			filename: '[name].js'
		}

	This will make the name of the output file match the KEY of the entry object. So about.js will be the output file
	after bundling './about_page.js', etc..
*/

