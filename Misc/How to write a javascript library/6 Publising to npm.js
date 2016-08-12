/*
	// This will go out to npm, register our library in the registry and create the good-games module
	npm publish

	// Now we can run the following command to get information about our library
	npm info good-games

	// To install our library in any project we run

	npm install <our-library-name>

	To test it, create an index.js with the following content
*/

var goodGames = require('good-games');

console.log(goodGames.all);
console.log(goodGames.random());

/*
	Run

	node index.js

	to run the index.js script and it should print the list of all goodGames as well as the random!!
*/

/*
	To find a shortcut to view our library, we can go to

	http://npm.im/<our-library-name>

*/