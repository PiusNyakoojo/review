/*
	Adding CSS to your webpack build

	Agenda:
		- CSS & Style Loaders
		- Loader Implementation
			- How do these loaders do their job: writing the style tag into the head of our document
		- Using SASS
		- Using LESS
		- Separate CSS Bundle
			- In case we don't want our css styles written to the head of our document
		- Auto Prefixer
			- Works when using more cutting edge features in CSS
			- prefixes the css rules using the correct browser prefixes
*/

/*
	CSS and Style Loaders

		npm install css-loader style-loader --save-dev

	Add the following files

		css
			- app.css
			- bootstrap.css

	Make sure your module looks like this:

		style-loader!css-loader means that webpack first runs the css file through the css loader then it runs it through
		the style loader. These 2 loaders actually work together to do their job.

	This idea of chaining loaders is very common in webpack configurations. Here we chain 2 loaders back to back, but we can actually
	add more loaders if necessary.

*/

module: {
	loaders: [
		{
			test: /\.css$/,
			exclude: /node_modules/,
			loader: 'style-loader!css-loader'
		}
	]
},

/*
	We normally only use require('') for javascript, but in this case we'll use it to bring css to our application as well.
*/

// app.js
require('../css/bootstrap.css');
require('../css/app.css');


/*
		webpack-dev-server -p

	this will also minify your .css along with .js files
*/

/*
	To add a SASS loader

		npm i -D sass-loader
*/

/*
	A separate CSS bundle

		npm i -D extract-text-webpack-plugin

*/

/*
	As browsers implement new features in css, they often require browser-specific prefixes. That's cool and all but there
	are draw backs because you'll have to understand which features require prefixes. Thankfully there is a node-module that
	will figure out which features need a prefix

		npm i -D autoprefixer-loader

	Add the loader in between the css-loader and sass-loader in the webpack.config.js
*/

loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'