/*
	So far we've only considered node as a platform for our module. But there could be people who want to use our library in
	the browser.

	Right now our compiled library uses require() which isn't supported in the browser. So we're goint to add support for
	using our module in our browser. We'll use something called umd - universal module definition.

	To do this we'll use a javascript bundler called Webpack

		npm i -D webpack

	Now create a file called

		webpack.config.babel.js

	.babel.js allows us to write our webpack configuration in ES6.

	Add this to the webpack.config.babel.js file
*/

import { join } from 'path'; // import join from the path module

const include = join(__dirname, 'src') // a const variable

export default {
	entry: './src/index',
	output: {
		path: join(__dirname, 'dist'),
		libraryTarget: 'umd', // Works in CommonJS, the browser and AMD
		library: 'goodGameNames', // You can get this off the window object as goodGameNames
	},
	devtool: 'source-map', // allows us to include source maps in our build
	module: {
		loaders: [ // run these loaders only on things inside our src directory
			{ test: /\.js$/, loader: 'babel', include },
			{ test: /\.json$/, 'loader': 'json', include }
		]
	}
}

/*
	Because we're including the babel loader and json loader, we need to install those

		npm i -D babel-loader json-loader

	Now lets create an npm script to build these modules

		"build:main": "babel --copy-files --out-dir dist --ignore *.test.js src",
		"build:umd": "webpack --output-filename index.umd.js",
		"build:umd.min": "webpack --output-filename index.umd.min.js -p" // runs this in production mode.. webpack will minify and optimize
	
	Now we have 3 builds we want to run before commiting our library

	We'll use a package called npm-run-all

		npm i -D npm-run-all

	Now add "build" to scripts..

		"build": "npm-run-all --parallel build:*"

	We're running them in parallel because they don't depend on one another.
*/