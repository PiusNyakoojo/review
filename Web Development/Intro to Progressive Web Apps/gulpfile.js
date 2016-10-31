let gulp = require('gulp');
let browserSync = require('browser-sync');
let reload = browserSync.reload;
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let minifyCss = require('gulp-minify-css');
let rename = require('gulp-rename');
let del = require('del');
let swPrecache = require('sw-precache');

gulp.task('sass', function() {
    return gulp 
    .src('./resources/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./styles'))
    .pipe(minifyCss({}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('generate-sw', function() {
    let swOptions = {
        staticFileGlobs: [
            './*.html',
            './images/*.{png,svg,gif,jpg}',
            './scripts/**/*.js',
            './styles/**/*.css'
        ],
        stripPrefix: '.',
        runtimeCaching: [{
            urlPattern: /^https:\/\/publicdata-weather\.firebaseio\.com/,
            handler: 'networkFirst',
            options: {
                cache: {
                    name: 'weatherData-v0'
                }
            }
        }]
    };
    return swPrecache.write('service-worker.js', swOptions);
});

gulp.task('serve', ['generate-sw'], function() {
    gulp.watch('./styles/*.scss', ['sass']);
    browserSync({
        notify: false,
        logPrefix: 'weatherPWA',
        server: ['.'],
        open: false
    });
    gulp.watch([
        './*.html',
        './scripts/*.js',
        './styles/*.css',
        '!./service-worker.js',
        '!./gulpfile.js'
    ], ['generate-sw'], browserSync.reload);
});

gulp.task('default', ['serve']);