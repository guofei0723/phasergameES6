

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    inject = require('gulp-inject'),
    del = require('del'),
    runSeq = require('run-sequence'),
    gwatch = require('gulp-watch'),
    pkg = require('./package.json');

//
gulp.task('build-src', function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
			presets: ['es2015']
		}))
        .pipe(gulp.dest('./app/js'));
});

//
gulp.task('inject-state', function () {
    var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/js/gamestate/**/*.js'], {read: false, base: "./app"});

    return target.pipe(inject(sources, {relative: true, name: "gamestate"}))
        .pipe(gulp.dest('./app'));
});

gulp.task('watch-state', function () {
    gwatch('./app/js/gamestate/**/*.js', {events:['add', 'unlink']}, function () {
        runSeq('inject-state');
    })
});

gulp.task('watch-src', function () {
    gwatch('./src/**/*.js', function () {
        runSeq('build-src');
    })
});

gulp.task('default', ['watch-state', 'watch-src']);
