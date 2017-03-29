var gulp = require('gulp');
/*/var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');*/

gulp.task('default', ['style', 'script' , 'cssBootsrap','scriptBostrap', ]);
//FUNCION PARA JARA JS DE BOOTSTRAP
gulp.task('scriptBostrap' , function(){
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js')
    .pipe(gulp.dest('./src/js'));
});

//FUNCION PRA JALAR JSDE JQUERY
gulp.task('jquery', function(){
    return gulp.src('./node_modules/jquery/dist/jquery.js')
    .pipe(gulp.dest('./src/js'));
});
//FUNCTION JS DE SWEETALERT
gulp.task('sweetalert' , function(){
    return gulp.src('./node_modules/sweetalert/dist/sweetallert-dev.js')
    .pipe(gulp.dest('./src/js'));
});
//FUNCION PARA JALAR ESTILOS DE FONTAWESOME
gulp.task('style' , function(){
    return gulp.src('./node_modules/font-awesone/css/font-awesome.css')
    .pipe(gulp.dest('./src/css'));
});

//FUNION PARA JALAR ESTYLOS DE BOOSTRAP
gulp.task('cssBootsrap', function() {
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('./src/css'));
});
//FUNCION PARA JALAR  SWEETALERT
gulp.task('sweetalert' , function(){
    return gulp.src('./node_modules/sweetalert/dist/sweetallert.css')
    .pipe(gulp.dest('./src/css'));
});
