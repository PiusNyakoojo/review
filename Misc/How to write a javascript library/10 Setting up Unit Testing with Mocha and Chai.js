/*
	Because our library is pretty serious, we want to run tests so that we don't push any breaking changes if this isn't
	a major release.
	

	npm install mocha chai --save-dev

	OR

	npm i -D mocha chai

	--save-dev will save these as dev dependencies in our package.json

	Create a new file src/index.test.js and add the following::
*/

var expect = require('chai').expect;
var goodGames = require('./index');

// Describe is global and is from the mocha dependency
describe('good-games', function() {
	// this is an assertion 
	it('should work', function() {
		expect(true).to.be.true; // this is a simple assertion to make sure our test is running.
	});
});

/*
	In the package.json, we'll update our test script to::

		"mocha src/index.test.js -w"

	-w watches the file for changes.

	Now if we run

		npm test

	We should see the result of our test

	describe and it will describe our test

	we will make our assertions with expect() from chai..

	Now that we've set up Mocha and Chai, we will actually test our library!!
*/