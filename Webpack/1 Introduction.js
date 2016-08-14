/*
	Webpack Fundamentals

	This course will discuss
		- how webpack functions
		- the features it has
		- how to setup a realistic build specific to your environment
	
	This course is a complete guide on how to use webpack. We'll proceed as follows

		- Introduction
			- Why do we use a build?
			- How did we used to handle building our applications?
			- How is webpack similar/different from other build tools?
			- What are the overall goals and structures of webpack?
			- What are module systems and how do they fit into webpack?

		- Basic Builds
			- Here we'll look at the basics of webpack and how to do basic builds with it

		- Advanced Builds
			- Source maps
			- CSS, Images, etc..

		- Tools
			- We'll look at some of the tools that webpack gives us such as
				- Connect middleware
				- Plugins
				- Or even writing our own custom loaders

		- Specific Builds
			- Here we'll look at some examples of specific builds
			- We'll see how to build a webpack build for both react and angular
				- webpack is very frequently used on react projects
				- angular is extremely popular but it has a few specific hurdles we need to jump to use webpack with it.

	After this course, if you paid attention, you will be very comfortable with any webpack build you encounter in the
	workplace.

	This course is designed for Front-End Web Developers
		- have familiarity with HTML, Javascript, HTTP
		- it would be nice to also have familiarity with front end frameworks like emberjs or backbonejs (but that's not required)
		- as long as you're interested in front-end technologies, you'll benefit from this course
	
	Because of the nature of open source software, things change fast and the course videos may become outdated with respect to the
	latest version of a particular software. This course will have a github repo where the files will be updated to fit the latest
	version of the necessary software.

	https://github.com/joeeames/WebpackFundamentalsCourse

	Please visit this url to determine whether the course is updated our out of date. If it is out of date, there will be
	instructions on how to work around the issue until the course clips are updated.
*/


/*
	So let's get started.. Why do we need a build system like Webpack?

	For the most part, most projects avoid a build step when it comes to javascript. Why?!?!
		- JavaScript doesn't have to be compiled ahead of time
		- It's interpretted by the browser so a functional web application doesn't require a build step

	In fact, back when web applications first came on the scene, the idea of a build step was ridonculous! There simply
	wasn't a need for a build step. But as time went on, applications became larger and larger and they began to suffer
	from several different problems related to
		- performance
		- maintenance
		- security


	Let's take a closer look at these problems. Firstly, we'll consider 

	- Multiple Web Requests
		- When a client requests an html page from the server, the html page could link to .js, .css, .png, etc..
			These extra files == longer wait time to load the content.
		- The browser doesn't care whether we have 1 .js file or many. They are all treated the same. But of course
			as developers we prefer to work with them separately. In order to reduce the number of separate .js
			requests to the server, we should place all our javascript in a single .js file.
		- This process of placing all the javascript in a single .js file can also be done for .css, .png and other
			file types if necessary.
	
	- Code Size
		- Another thing to consider is how many bytes of code we're sending over the network. If we can reduce our code
			side we reduce the time it takes to reach clients who request the resource.
		- Most servers will compress text before sending it over the network, but if we can reduce it even further, that's
			excellente!

	Let's look at an example:
*/

function rockOut( guitar ) {
	if ( guitar.canShred ) {
		guitar.shred();
	} else {
		guitar.play();
	}
}

/*
	This code is easy to read but we're using a lot of white space which isn't important in javascript. 

		This code consumes 107 bytes.

	Let's look at an ulternate without all the unnecessary whitespace

*/

function
rockOut(guitar){if(guitar.canShred){guitar.shred();}else{guitar.play();}}

/*
	This example reduces the unnecessary whitespace. Although it's unreadable to a developer, it is just fine for the browser
	to parse and interpret.

		This code consumes 84 bytes.

	But we can actually do better... If we run this code through a production-grade minifier, this is the result:
*/

function rockOut(c){c.canShred?c.shred():c.play()}

/*
	By replacing the name of the parameter and refactoring our code into a smaller, equivalent algorithm ..

		This code consumes 50 bytes... half of what we started with.
*/

/*
	Next up is

	- File Order Dependencies
		- Browsers run javascript files in the order they are specified in the html. This means that we can guarantee
			that one file loads before another.

	<head>
		<script src='members.js'></script>
		<script src='bands.js'></script>
	</head>

	Let's say the bands file uses some variables defined in the members file. Well that's nice, our code will work since
	the members file is loaded before the bands.

	But this is an easy example. What happens when we have 100s of javascript files and some files depend on others.. How
	can we easily guarantee that we're loading the files in the correct order without bruteforce checking all the time..
	or waiting for errors to occur..

	There are 2 easy ways around this..
		- Use a framework like angularjs where the order of files loaded doesn't really matter..
		- Use a module system
			- specify, inside of each file, what other files that the current file depends on.

	Solving this problem reduces the maintenance cost of developing large applications.


	- Transpiling
		- An example of this is when browsers support out of date technologies.. do we have to write our program in that
			outdated technology to get functionality of our application?
		- Well, transpiling the latest technology into the outdated technology is something that a build system allows
			us to do.
		- Transpiling is the process of converting on language's syntax to another while preseving functionality.
		- By using a transpiler, we can take advantage of things like new features of a language (e.g. ES6) and the
			transpiler will convert our written code into something that is supported in order browsers (e.g. IE)

	The following function takes advantage of setting a default parameter (a feature added in ES6)
*/

function playSolo(drums, duration = 5) {
	drums.startSolo();

	setTimeout(function() {

	}, duration * 60000);
}

/*
	Currently, most browsers only support ES5.. so we need a transpiler to convert what we've written into the version
	that most browsers will understand.. which is ES5 at the moment (08-14-2016)

	Some transpilers will even take code from Typescript, Coffeescript, etc.. and convert it to Javascript.. So we're writing
	in an entirely different language and get functional code that'll run in a javascript environment.

*/

/*
	When working on large projects, it's easy to forget things here and there.. Or even to completely miss things. This
	is when a process called Linting will help a bunch!!
	
	
	- Linting
		- The process of checking for potential errors in the code

	The following code has 3 linting errors: Figure them out before looking at the answer:
*/

function tune(lead, bass, keyboard) {
	lead.tune()
	bass.tune()
}

/*
	Did you figure them out? Answer:
	2missingsemicolonsandthekeyboardparameterisn'tbeingusedwithinthefunction
	- the missing semicolons are minor and only cause issues in rare circumstances
	- but it's not uncommon to forget to use a parameter or variable and having a linter to point that out
		can help us save having to put an expensive bug into production
*/

/*
	So Let's wrap it up.. Why do we need a build process?

		- Combining Files
			- to reduce number of web requests; hence, faster page loads
		- Minifying Files
			- to reduce bytes over the network (e.g. transmission size); hence, faster page loads
		- Maintaining File Order
			- via using a module system; hence, more maintainable
		- Transpiling
			- converting one program into another while preserving functionality; hence, wider audience reached
		- Linting
			- to check for potential errors; hence, less errors; happier users :)
*/

/*
	Before we discuss Webpack specifically, it's a good idea to discuss other solutions to the build problem and how
	they solve the problem, so we can understand what makes Webpack different

	For other solutions to the build problem, there are 2 mains ways to solve it

		- Server-side Tools
			- This includes things like ASP.NET's bundling features
			- The Rails pipeline available in ruby on rails
			- etc..

		- Task Runners
			- This includes tools such as Grunt
			- Gulp
			- etc..

	Let's take a closer look at 

	Server-side Tools:
		- These are generally a simple solution to the problem although they don't solve all the problems
			that we have identified.
		- In most cases, these tools will take the .js files or the .css files and combine them then minify
			them. This is helpful, although it doesn't solve the problem of File Order Dependency or Transpilation.
		- These may also not support Linting

	Task Runners:
		- more general purpose in that they can usually do more than handling your build
		- For example, they can also help you automate your tests and run them whenever code changes
		- They can help a new developer install and run the project
		- Run static analysis on your code
		- And many many many more things..
		- With their plugin system, they are pretty much unlimited in what they can accomplish.
		- In general, a task runner can solve all the problems that we discussed, so long as you configure
			the steps properly.
		- These work in a sort of multi-pass system starting with your source files, you first configure
			a transpilation task. Then with that output, you send it off to a concatenation task. After that
			you send it off to be minified. Finally the files are sent to be consumed by the browser.
		- If you're using a module system, you can use a plugin to make sure your file order is correct. Without
			that you still have to handle the file order dependency issue. But most people will either use a module
			system or a framework where file order doesnt matter like with angular.
		- A lot of the time, people will combine a tool like Browserify with a Task Runner in order to manage dependencies.
			Task runners have been around a long time and are quite heavily used and have 1000s of plugin tasks to get
			what you need done.

	Webpack:
		- Different from a task runner in that it is more specialized
		- A good way to think of Webpack is as a specialized Task Runner that has been optimized to do 1 specific
			task very well: Processing input files and producing output files.
		- Webpack utilizes components called loaders. You can send one or more source files into a loader and 1 or
			more files will come out. Using these loaders, we get essentially the same result as with a task runner.
			Transpilation -> Concatenation -> Minification
		- However, webpack gives us another feature that is less common with other task runners. That is the ability
			to combine your css and javascript. Similar things can even be done with html fragments, images and fonts.
		- Transpilation -> Concatentation -> Minification -> bundle.js
		- Webpack has a couple of conventions to adhere to when using it.
			- Webpack works with NPM not Bower. And they recommend loading all your client-side assets using npm. So if
				you've been using bower to handle client-side dependencies, you should instead be using npm.
			- You must use a Module system. Fortunately, webpack doesn't really care which one you use. It can work with
				all 3 of the major module systems ( You choose ):
				- AMD
				- CommonJS
				- ES6 Modules


*/

/*
	Module Systems.
		- Module systems express dependencies between modules which, in the case of javascript, is generally files.
		- There are 3 main module systems: AMD, CommonJS and ES6. We'll look at the syntax for CommonJS
*/

// Concerts.js
var band = require('./Bands'); // ./ since this is a file we created ourselves; not installed with npm
var Backbone = require('Backbone');
var Lodash = require('Lodash');

	// code

// Bands.js

var $ require('jQuery');
var members = require('./Members');

	// code

/*
	By having this module system, we only have to worry about what file that our current file depends on. Webpack will take
	care of loading the files in the appropriate order. This is why Webpack requires that you use a module system.
	
	The other module systems each have a different syntax but the net effect is the same.
*/