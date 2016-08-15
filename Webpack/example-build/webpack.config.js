module.exports = {
	entry: ['./utils.js', './app.js'],
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		
	}
};