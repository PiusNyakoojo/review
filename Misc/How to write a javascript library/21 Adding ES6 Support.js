/*
	If we want to write our library using the latest features of javascript, we need to use a transpiler because the browser
	or the version of node that we're using will not necessarily support ES6 features.

	The transpiler that we'll use is called Babel. We'll use the Babel CLI to transpile using one of our npm scripts.
	
	Create a script in the package.json

		"build": "babel --out-dir dist src"

	So we're outputting our transpiled files to the dist directory and we're using the files in src as the input

	However, this will distribute our tests as well.. we don't really want to do that so we'll add

		"build": "babel --out-dir dist --ignore *.test.js src"

	Now delete the dist directory so the new dist will be built when we run

		npm run build

	Instead of always deleting the dist directory, we will run another process before building the directory so we don't
	have to do that..
	
	Add this to the scripts object::

		"prebuild": "rm -rf dist"

	However, rm -rf is not cross-platform.. it will only run on unix-based machines like macs. We need a way to make this prebuild
	process cross platform.. well guess what?! there's a package we can use to do this..

		npm i -D rimraf

	Now replace

		"rm -rf dist" with

		"rimraf dist"

	Hence>>

		"prebuild": "rimraf dist"


	Now that we have our build running, let's add some ES6 features in our source!

	Now let's use transforms and pre-sets to make babel do some actual transpilation!! By default, babel doesn't actually
	do anything to your code. You need to explicitly list the transforms you want babel to add to your code.

		npm i -D babel-preset-es2015 babel-preset-stage-2

	Then we need to configure babel to use these presets on the code that it's transpiling!!

	add this after "config": {}

		"babel": {
			"presets": ["es2015", "stage-2"]
		}

	Now we need to update the main to point to the new dist file

		"main": "dist/index.js"

	So that when people require our library, they get the transpiled version rather than the ES6 version.

	Also notice how in the dist/index.js we require('./good-games.json') but there isn't a good-games.json in the dist folder. So
	during the transpilation we need to copy this file

		"build": "babel --copy-files --out-dir dist --ignore *.test.js src"
	
	We added the --copy-files argument!!

	Now there are a few more things we need to make sure happen.. We need to make sure that before we run the publish script,
	we need to run the build script so our dist is up to date.

	We can't just use "prepublish" because that runs when people install our module. So instead, we'll add the command to our travis
	build

		script:
			- npm run test
			- npm run check-coverage
			- npm run build

	We can test to make sure what we're publishing to the registry is what we expect.. we can do this checking by running npm pack


		npm pack

	A file is created for us and we can open it with

		open filename.tgz



	Add a "files" property after our "keywords".. These will be files that we actually want included in our pack

		"files": [
			"dist",
			"README.md"
		]

	Now we don't actually want to push the package folder and the dist folder to git..
	So we'll go ahead and add those files in our .gitignore file

		dist

*/