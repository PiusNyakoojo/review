/*
	Our src/index.js will be where our main module for exporting will be.
*/

module.exports = {

};

/*
	This will be the object that will be exported when people require(''); our module

	We'll use a micro-library to get use functionality that has already been written for us to use.

		npm install --save unique-random-array

	OR there's a shortcut::::

		npm i -S unique-random-array

	If we want to test our library so far, we can go into node with the command:

		node

	and type
*/

var lib = require('./src/index.js');

lib.random(); // invoke the function that we export in src/index.js