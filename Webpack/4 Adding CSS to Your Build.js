/*
	Adding CSS to your webpack build

	Agenda:
		- CSS & Style Loaders
		- Loader Implementation
			- How do these loaders do their job
		- Using SASS
		- Using LESS
		- Separate CSS Bundle
		- Auto Prefixer
			- Works when using more cutting edge features in CSS
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