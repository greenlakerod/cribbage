var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var ts = require('gulp-typescript');

gulp.task('typescript', function() {
    console.log('Compiling typescript');
    return gulp.src(['server/**/*.ts'])
        .pipe(ts({
            "module": "commonjs",
            "target": "es6",
            "outDir": "bin",
            "noLib": false,
            "sourceMap": true,
            "rootDir": ".",
            "removeComments": true
        })).js.pipe(gulp.dest('./bin'))
});

gulp.task('watch', function() {
    gulp.watch('./server/**/*.ts', ['typescript']);
});

gulp.task('default', ['watch', 'typescript']);

gulp.task('serve', ['typescript'], function () {
    livereload.listen();
    nodemon({
        script: 'bin/server/index.js',
        ext: 'js',
    }).on('restart', function () {
        setTimeout(function () {
            livereload.changed();
        }, 500);
    });
});