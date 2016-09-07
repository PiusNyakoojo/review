"use strict";

let gulp = require('gulp');
let connect = require('gulp-connect'); // Runs a local dev server
let open = require('gulp-open'); // Open a URL in a web browser
let browserify = require('browserify'); // Bundles JS
let reactify = require('reactify'); // Transforms React JSX to JS
let source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
let concat = require('gulp-concat'); // Concatenates files
let lint = require('gulp-eslint'); // Check files JS and JSX for potential errors

let config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/build/toastr.min.css'            
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
};

// Start a local development server
gulp.task('connect', () => {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true,
        fallback: 'dist/index.html'
    });
});

// Open index.html at the url
gulp.task('open', ['connect'], () => {
    gulp.src('dist/index.html')
        .pipe(open({
            uri: config.devBaseUrl + ':' + config.port + '/'
        }));
});

// Place html files in the destination path and reload the server
gulp.task('html', () => {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

// Gets mainjs file, and places in dist/scripts then reloads the server
gulp.task('js', () => {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

// Gets css files, concatenates them and places them in in dist/css
gulp.task('css', () => {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', () => {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

        // publish favicon
        gulp.src('./src/favicon.ic')
            .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', () => {
    return gulp.src(config.paths.js)
        .pipe(lint({
            config: 'eslint.config.json'
        }))
        .pipe(lint.format());
});

// Reload html task when something changes in the html files
gulp.task('watch', () => {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);    
});

// gulp will run the html and open tasks
gulp.task('default', ['html', 'js','css', 'images', 'lint', 'open', 'watch']);