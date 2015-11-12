'use strict';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';

const $ = gulpLoadPlugins();

const onError = err => {
	$.util.log(
		err.plugin + ': ' + $.util.colors.red(err.message) + ' ' +
		((err.fileName) ?
			$.util.colors.bold(err.fileName.replace(process.cwd() + '/', '')) + ':' + err.lineNumber :
			''
		)
	);
	$.util.beep();

	if (!browserSync.active) {
		process.exit(1);
	}
};


gulp.task('clean', cb =>
	del(['dist/*'], {dot: true}, cb)
);


gulp.task('copy', () =>
	gulp.src([
		'node_modules/apache-server-configs/dist/.htaccess',
		'./public/**/*'
	]).pipe(gulp.dest('./dist'))
	.pipe($.size({title: 'public'}))
);


gulp.task('js:quality', () =>
	gulp.src('./src/**/*.js')
		.pipe($.eslint())
		.pipe($.eslint.format()).on('error', onError)
);

import browserify from 'browserify';
import source from 'vinyl-source-stream';

gulp.task('js', () =>
	browserify('./src/javascripts/main.js')
		.bundle()
		.pipe(source('base.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe($.size({title: 'js'}))
);

gulp.task('js-watch', ['js', 'js:quality'], browserSync.reload);


gulp.task('html', () =>
	gulp.src(['./src/templates/*.html', './src/templates/sections/**/*.html', '!./src/templates/sections/**/partials/*.html'])
		.pipe($.fileInclude())
		.pipe($.minifyHtml())
		.pipe(gulp.dest('./dist'))
		.pipe($.size({title: 'html'}))
);

gulp.task('html-watch', ['html'], browserSync.reload);


gulp.task('sass', () =>
	gulp.src('./src/styles/*.scss')
		.pipe($.sass())
		.on('error', onError)
		.pipe($.autoprefixer({
			browsers: ['> 5%'],
			cascade: false
		}))
		.pipe($.combineMediaQueries())
		.pipe($.csso())
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream())
		.pipe($.size({title: 'style'}))
);


gulp.task('validate', () => {
	const validate = file => {
		require('w3cjs').validate({
			input: file.contents,
			callback: res => {
				if (res.messages && res.messages.length) {
					$.util.log($.util.colors.red(file.path));
					$.util.log(res.messages);
				} else {
					$.util.log(file.path + $.util.colors.green(' [  OK  ]'));
				}
			}
		});
	};

	return gulp.src(['./dist/**/*.html'])
		.pipe(require('map-stream')(validate));
});


gulp.task('watch', ['default'], () => {
	browserSync({
		notify: false,
		server: './dist'
	});

	gulp.watch('./src/**/*.html', ['html-watch']);
	gulp.watch('./src/**/*.scss', ['sass']);
	gulp.watch('./src/**/*.js', ['js-watch']);
});

gulp.task('default', ['html', 'sass', 'js', 'copy']);
gulp.task('test', ['js:quality']);
