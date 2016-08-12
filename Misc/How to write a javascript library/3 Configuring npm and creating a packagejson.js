/*
	Install Node.js

	npm --version // print the version

	go to 

	https://docs.npmjs.com

	and go to config. Look for init-author-name. So to set this property in our library, we use the command line and type:

	npm set init-author-name 'Pius Nyakoojo'
	npm set init-author-email 'pnyakoojo.16@gmail.com'
	npm set init-author-url 'http://piusnyakoojo.com'
	npm set init-license 'MIT'
	
	// To print the contents of the .npmrc file run this command:
	cat ~/.npmrc

	Another property that is recommended to be set is the save-exact property.

	This property will tell npm that whenever it is saving a dependency to your package.json, it will use the exact version rather
	than a version range. This protects you for when people don't follow something properly or if there's a mistake in the release.

	This makes updating your dependencies have fewer surprises.
	

	Create an npm account or sign in:

	run the following command:
	
	npm adduser

	To create the package.json, run

	npm init

	To install a package and save it to the package.json file

	npm install <pkg> --save
	

	The entry point is what we get when we require our module. require('some-name');

	We're going to change the default from index.js to src/index.js

	We'll leave our test command blank because we'll add tests later.

	
*/