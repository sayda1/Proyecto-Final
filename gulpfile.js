var gulp = require('gulp');
/*/var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');*/

gulp.task('default', ['style', 'script']);

gulp.task('script' , function(cb){
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js')
    .pipe(gulp.dest('./js'));
    return gulp.src('./node_modules/jquery/dist/jquery.js')
    .pipe(gulp.dest('./js'));
});
gulp.task('style' , function(){
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('./css'));
    return gulp.src('./node_modules/font-awesone/css/font-awesome.css')
    .pipe(gulp.dest('./css'));
});

/*gulp.task('images', function() {
    // tarea images
    
});
*/