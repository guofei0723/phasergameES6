

//var gulp = require('gulp'),
//    babel = require('gulp-babel'),
//    inject = require('gulp-inject'),
//    del = require('del'),
//    runSeq = require('run-sequence'),
//    gwatch = require('gulp-watch'),
//    pkg = require('./package.json');

import gulp from 'gulp';
import babel from 'gulp-babel';
import inject from 'gulp-inject';
import del from 'del';
import runSeq from 'run-sequence';
import gwatch from 'gulp-watch';
import pkg from './package.json';

const paths = {src: './src', app: './app'};

//
gulp.task('build-src', () => {
    return gulp.src(`${paths.src}/**/*.js`)
        .pipe(babel({
			presets: ['es2015']
		}))
        .pipe(gulp.dest(`${paths.app}/js`));
});

//
gulp.task('inject-state', () => {
    var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/js/gamestate/**/*.js'], {read: false, base: "./app"});

    return target.pipe(inject(sources, {relative: true, name: "gamestate"}))
        .pipe(gulp.dest('./app'));
});

gulp.task('watch-state', () => {
    gwatch('./app/js/gamestate/**/*.js', {events:['add', 'unlink']}, () => {
        runSeq('inject-state');
    })
});

gulp.task('watch-src', () => {
    gwatch('./src/**/*.js', () => {
        runSeq('build-src');
    })
});

gulp.task('default', ['watch-state', 'watch-src']);
