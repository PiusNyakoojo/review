/*
	In this module we'll cover basic builds with webpack.
	
	Agenda:
		- CLI (Command Line Interface)
			- This is the most basic, rudimentary way to work with webpack
		- Config Files
			- Let's us give webpack complex instructions and makes it easier to work with webpack
		- Dev Server
			- This will run our code for us
			- Watch for changes in our files
			- And if desired, reload our browser
		- Loaders
			- This is the core extension pack of webpack
			- Recall that loaders take 1 or more files as input and produce 1 or more files as output
				- Transpilation -> Concatenation -> Minification -> bundle.js
		- Production Builds
			- How do these differ from development builds?
			- We will learn to setup a production build to build to production when necessary


	In order to install Webpack we need node and npm.

		npm install webpack -g // installing webpack globally allows us to use it in the command line

	Later on we'll be installing it locally as well + some other modules

	We'll setup am empty directory with app.js and index.html

	Then we'll build this application with webpack

		webpack ./app.js bundle.js

	The first parameter is the input file that we want to build. The second argument will be the name of the output file
	that's produced. Bundle is a typical name with the name of the output files when working with webpack.

	If we go back to our used-to-be empty directory, let's call it 'example-build'. We'll see the bundle.js file is created
	for us.

	Now we'll add a config file to make running webpack easier.
		- This makes it easier because we don't have to give all of the parameters on the command line.
		- In fact, if we want to run webpack, all we type is webpack and the configurations we setup up will
			be accounted for when the build runs

	We'll call our file 'webpack.config.js'. A config file in webpack is basically a module.exports object with key-value pairs.

*/

module.exports = {
	entry: './app.js', // 
	output: {
		filename: 'bundle.js'
	}
}

/*
	It's convenient to not have to set the arguments when running the webpack command. But it's also quite tedious if we're
	making a lot of changes and want to see the result. So instead of constantly running webpack constantly.

	One way to watch our files for changes and rerun the build is called 'watch mode'. With watch mode, webpack will watch your
	files and when a change is made, it will immediately re-run the build and re-create your output file. There are a couple
	ways to use watch mode
		- Using the Command Line:
			webpack --watch
		- Go into the config file and add a key called watch and set it to true
*/

module.exports = {
	entry: './app.js',
	output: {
		filename: 'bundle.js'
	},
	watch: true
};

/*
	This is dandy and all, but notice that our url is using the file:// protocol instead of http://.
	If you're familiar with browsers and browser security, that means we'll have lots of different problems. We really can't
	run any kind of a usefule front-end framework just using the file:// protocol. We really need http://

	So of course we really need to run our own web server. But webpack has its own web server that we can use called the
	dev server. It will also reload our browser page when the files change.

		npm install webpack-dev-server -g

	To start the server:

		webpack-dev-server

	The dev server will also give us a url where our output files are served (e.g. http://localhost:8080/webpack-dev-server/)

	Now in order to get the 'hot loading' or 'hot reloading' of the browser working, the status bar at the top is necessary because
	webpack is actually running in the browser and running your application inside of an iframe. But if you don't want your application
	running in that mode, you can change the url to

		http://localhost:8080

	But this doesn't allow us to get the automatic reloads after changing a file. But we can get around this by running the
	webpack-dev-server with the 'inline' flag.

		webpack-dev-server --inline

	Go to the code, make a change
*/

/*
	Now let's configure webpack to handle multiple input files. Let's run our dev server

		webpack-dev-server

	Add some files to our project: login.js, utils.js
*/

// login.js
console.log('login loaded');

// app.js
require('./login'); // CommonJS syntax for configuring webpack to import the login script before the app.js script

document.write('Welcome to the game');
console.log('App loaded');

// utils.js
// This is global JS provided to all apps.
console.log('logging from the utils.js file...');


/*
	Notice in the console how 'login loaded' is logged before 'App loaded'.

	Now that's the typical way of importing additional files that our project depends on.. that's the module system. So
	here we've used the CommonJS way of including an additional file.

	There is another way that you might want to use to bring
	more than one file in your webpack bundle. That is a way that isn't necessarily going to be required in by the entry
	file.

	In this second case, we find that it isn't so natural to add require('./utils') to the entry file since we want it to
	be available to all other files as well. So in our webpack.config.js we can do this:
*/

module.exports = {
	entry: ['./utils', './app.js'],
	output: {
		filename: 'bundle.js'
	}
};

/*
	Re-run the dev server

		webpack-dev-server

	So we've just learned how to add files input files that aren't part of the module system.
*/

/*
	Loaders are how webpack can learn new tricks. By default, webpack knows how to process your javascript files,
	combine them, and even minify them. But it doesn't really know how to do much else. Loaders are a way to process
	files and if necessary, to transform them into something else.
	
	In this section, we'll add 2 important features to our application. We'll add:
		- Linting (w/ jshint)
			- processes each file and checks for potential errors (doesn't write, just reads)
		- ES6 Support (w/ babel)
			- babel will actually manipulate the file and convert ES6 to ES5 (reads and writes)

	In order to support this functionality, we'll need to add new modules to our application. Go ahead and add the following
	to package.json

	Recall that you can use

		npm init

	to setup a package.json
*/

"devDependencies": {
    "babel-core": "^6.13.2",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.13.2",
    "jshint": "^2.9.2",
    "jshint-loader": "^0.8.3",
    "node-libs-browser": "^1.0.0",
    "webpack": "^1.13.1"
  }

 /*
	To install them

		npm install
 */

 /*
	We'll go ahead and setup babel so we can author in ES6 syntax. Add a .babelrc file with the following
 */

 {
 	"presets": ["es2015"]
 }

 /*
	Let's change our login.js file to login.es6 and add some ES6 specific features
 */

let login = (username, password) => {
	if (username !== 'admin' || password !== 'radical') {
		console.log('incorrect login');
	}
};

login('admin', 'idunno');

/*
	Now we need to configure webpack to use babel to when transpiling our .es6 files. Add the 'module' metadata
	after output
*/

module.exports = {
	entry: ['./utils.js', './app.js'],
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ // babel loader
				test: /\.es6$/, // match against es6 files
				exclude: /node_modules/, // ignore node_modules directory
				loader: 'babel-loader' // name of npm module we're using
			}
		]
	},

	// resolve lets us configure what types of files we can process without explicitly matching against a file extension
	resolve: {

	}
}

/*
	Notice that in our app.js we have require('./login'); The actual name of the file was login.js but now it's login.es6. By default
	webpack will process all files with a .js extension so we don't have to add it in. But we'll override this behaviour by passing
	an extensions field that is an array of extensions 
*/

resolve: {
	extensions: ['', '.js', '.es6']
}

/*
	So now when webpack finds the './login', it will look for login.js OR a login.es6

*/