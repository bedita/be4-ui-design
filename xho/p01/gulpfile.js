var gulp = require('gulp'),
sass         = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps   = require('gulp-sourcemaps'),
runSequence  = require('run-sequence');
// cssnano      = require('gulp-cssnano'),
// gp_rename    = require('gulp-rename'),
// uglify       = require('gulp-uglify'),
// gulpif       = require('gulp-if'),
// useref       = require('gulp-useref'),
// ga           = require('gulp-ga'),
// del          = require('del');



/*
 * ---------------------------------------------------------------------------
 * DEV TASKS
 * ---------------------------------------------------------------------------
 */

// dev css: sass, autoprefixer, sourcemaps, concat
gulp.task('dev-css', function() {
    return gulp.src('src/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', onSassError))
        .pipe(autoprefixer({ browser: ['> 1%'] }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/css'))
});



/*
 * ---------------------------------------------------------------------------
 * WATCHERS
 * ---------------------------------------------------------------------------
 */

gulp.task('watch', function() {
    console.log('Watching DEV CSS and JS');
    gulp.watch('src/sass/*.scss', ['dev-css']);
    //  gulp.watch('src/js/*.js', ['dev-js']); 
})






/*
 * ---------------------------------------------------------------------------
 * Stuff
 * ---------------------------------------------------------------------------
 */


// error handling
const notifier = require('node-notifier');
var onSassError = function (error) {
    console.error('\n*** ERROR COMPILING SASS ***\n');
    console.log(error);
    notifier.notify({
        title: 'Gulp',
        message: 'Error compiling SASS',
        sound: 'Purr'
    });
    this.emit('end');
};


// just hello
gulp.task('hello', function() {
    console.log('\nBella zio\n');
});
