'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var isDev = false;

var onError = function(err){
    $.util.log(err.plugin + ': ' + $.util.colors.red(err.message));
	$.util.beep();

	if (!isDev) {
		process.exit(1);
	}
};


var bower = require('main-bower-files');

gulp.task('bower', function() {
    return gulp.src(bower())
        .pipe(gulp.dest('./dist/js/ext/'));
});


var del = require('del');

gulp.task('clean', function(){
	del(['dist'], function (err, deletedFiles) {
    	console.log('Dist deleted!', deletedFiles.join(', '));
	});
});


gulp.task('copy', function(){
  gulp.src('./public/**/*')
    .pipe(gulp.dest('./dist'));
});


gulp.task('js', function() {
	gulp.src('./src/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'))
    	.pipe($.concat('base.js'))
    	.pipe($.uglify())
    	.pipe(gulp.dest('dist/js'));
});


gulp.task('html', function() {
  gulp.src(['./src/templates/*.html'])
    .pipe($.fileInclude())
    .pipe($.minifyHtml())
    .pipe(gulp.dest('./dist'));
});


gulp.task('open', function(){
  gulp.src('./dist/index.html')
    .pipe($.open('<%file.path%>'));
});


gulp.task('sass', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe($.rubySass())
       	.on('error', onError)
       	.pipe($.combineMediaQueries())
       	.pipe($.csso())
        .pipe(gulp.dest('./dist/css'));
});


gulp.task('watch', function() {
	isDev = true;

    gulp.start('default');
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.js', ['js']);
});

gulp.task('default', ['html', 'sass', 'js', 'bower', 'copy']);
