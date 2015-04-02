var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jasmine = require('gulp-jasmine');

var source = 'ajaxzip3-source.js';
var exportSource = 'ajaxzip3.js';

gulp.task('minify', function() {
	gulp.src(source)
		.pipe(uglify({preserveComments: 'some'}))
		.pipe(rename(exportSource))
		.pipe(gulp.dest('.'));
});

gulp.task('test', function() {
	return gulp.src([source, 'test/*.js'])
		.pipe(jasmine());
});