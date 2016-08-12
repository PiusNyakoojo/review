/*	
	Now that we've finally added ES6 support to our library, we see there's a problem when running our test.

	Istanbul and Mocha doesn't deal with ES6 very well. Specifically the 'import' statement. So we need to add ES6
	support for our tests.

		npm i -D nyc

	nyc handles ES6 for code coverage a little better than istanbul. It actually uses Istanbul under the hood, it but handles
	the ES6 syntax for us.

	Since mocha doesn't understand ES6 either, we need to make sure Mocha can run our tests even if they're written in ES6.

		"test:watch": "mocha src/index.test.js -w --compilers js:babel-register"

	babel-register is anoter dependency we'll need to install so..

		npm i -D babel-register

	Now if we run

		npm run test:watch

	Now lets make sure that it works with coverage::

		npm run test OR
		npm test OR
		npm t

	We'll see that it should fail and this is because nyc's API is a bit different from mocha. So let's make a few changes:
	nyc's API is a bit cleaner so we'll we'll cleanup our code to make it easier to use nyc.. first we'll add a "cover" script:
	
		"test:watch": "npm t -- -w" // this is basically adding the -w tag to the test script
		"test": "mocha src/index.test.js --compilers js:babel-register",
		"cover": "nyc npm t"
	
	In npm, any npm script that's run with -- will have the additional arguments passed to the script that's being called

	
	In essence, what's happening is that babel-register is transpiling our files on the fly.

	Add .nyc_output to the .gitignore file so we don't commit it.

	Update the ghook to run 

		npm run cover

	Update the travis file to run

		- npm run cover

	rather than - npm run test:single
*/