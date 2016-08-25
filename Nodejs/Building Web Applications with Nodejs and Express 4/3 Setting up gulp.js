/*
	- We'll configure gulp
	- Enforce coding standards
	- Inject CSS and JS references
	- Auto restart our application

*/

/*
	Gulp is a task manager or task runner for web projects

		- Installed with NPM
		- Easy to use
		- Code based configuration
		- Package based
*/

/*
	We'll setup JSHint to enfore code quality by
		- Detecting potential errors
			- making sure to use semicolons
		- Enforcing coding conventions
		- Easily configurable
		- Open source


	JSCS enforces coding style conventions
		- Right number of indentations
		- Not having multiple lines??
		- Easily configurable
		- Open source


	Download the configuration files here

	https://github.com/jonathanfmills/CodingStandards
*/

/*
	npm i -g gulp

	npm i -D gulp
	
	Create a gulp file: gulpfile.js
*/

/*
	In order to have gulp do something, we need to create a task.

	When we run the 'style' task, gulp will execute our callback
*/

let gulp = require('gulp');

gulp.task('style', () => {
	// perform some task when the style task is run
});

/*
	We want to include all our .js files excluding the stuff in node_modules

*/

let jsFiles = ['*.js', 'src/**/*.js'];

/*
	Then we're going to pipe our jsFiles through jsHint to enforce coding standards.
	
	npm i -D gulp-jshint
	npm i -D gulp-jscs
	npm i -D jshint-stylish
*/

let gulp = require('gulp');
let jshint = require('gulp-jshint');

let jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {

});

/*
	If we return the stream of our file from one processor to another, we can make that task a subtask
	of another.

*/

let gulp = require('gulp');
let jshint = require('gulp-jshint');
let jscs = require('gulp-jscs');

gulp.task('style', () => {
    return gulp.src('jsFiles')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'), {
            verbose: true
        })
        .pipe(jscs());
});

/*
	Rather than importing the javascript and css ourselves in the index.html, we can use the wiredep package

		npm i -D wiredep

	Now create a new task called 'inject'

*/

gulp.task('inject', () => {
	let wiredep = require('wiredep').stream;
	let options = {
		bowerJson: require('./bower.json'),
		directory: './public/lib'
	}

	return gulp.src('./src/views/*.html')
			.pipe(wiredep(options))
			.pipe(gulp.dest('./src/views')); // write to the destination file
});

/*
	In the index.html place the following comment somewhere in the head or body to indicate to gulp,
	where to inject the files
*/

<!-- bower.js -->
<!-- endbower -->