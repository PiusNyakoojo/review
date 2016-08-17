/*
	Adding Images and Fonts to your webpack build
	
	Agenda
		- Add Images
		- Add Fonts
*/

/*
	Adding Images to our webpack build

		npm i -D url-loader
	
	Add image loader
*/

{
	test: /\.(png|jpg)$/, 
	exclude: /node_modules/,
	loader: 'url-loader?limit=10000'
}

/*
	To add fonts to your build
*/

{
	test: /\.(png|jpg|ttf|eot)$/, 
	exclude: /node_modules/,
	loader: 'url-loader?limit=10000'
}

/*
	Set the limit parameter to determine which files we want to line and which files we want to be a separate request.

*/