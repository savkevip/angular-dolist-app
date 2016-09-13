var gulp = require('gulp');
var config = require('./gulp.config')();

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function() {
	return gulp
		.src(config.alljs)
		.pipe($.jshint())
		.pipe($.jscs())
		.pipe($.jshint.reporter('jshint-stylish', {verbose: true}));
});