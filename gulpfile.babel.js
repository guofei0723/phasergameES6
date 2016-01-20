

// 使用es6的语法

import gulp from 'gulp';
import babel from 'gulp-babel';
import inject from 'gulp-inject';
import del from 'del';
import runSeq from 'run-sequence';
import gwatch from 'gulp-watch';
import notify from 'gulp-notify';
import pkg from './package.json';

const paths = {src: './src', app: './app'};

function errorAlert(error){
	notify.onError({title: "Gulp-Babel ES6 Error", message: "Check your terminal for more infomation", sound: "Sosumi"})(error); //Error Notification
	console.error(error.toString());//Prints Error to Console
	this.emit("end"); //End function
};

//
gulp.task('build-src', () => {
    return gulp.src(`${paths.src}/**/*.js`)
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', errorAlert)
        .pipe(gulp.dest(`${paths.app}/js`));
});

//
gulp.task('inject-state', () => {
    let target = gulp.src(`${paths.app}/index.html`, {base: `${paths.app}`});
  // It's not necessary to read the files (will speed up things), we're only after their paths:
    let sources = gulp.src([`${paths.app}/js/gamestate/**/*.js`], {read: false, base: `${paths.app}`});

    return target.pipe(inject(sources, {relative: true, name: "gamestate"}))
        .pipe(gulp.dest(`${paths.app}`));
});

gulp.task('watch-state', () => {
    gwatch(`${paths.app}/js/gamestate/**/*.js`, {events:['add', 'unlink']}, () => {
        runSeq('inject-state');
    })
});

gulp.task('watch-src', () => {
    gwatch('./src/**/*.js', () => {
        runSeq('build-src');
    })
});

gulp.task('default', ['watch-state', 'watch-src']);
