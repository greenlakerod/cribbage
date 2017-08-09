var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var ts = require('gulp-typescript');

gulp.task('typescript', function() {
    console.log('Compiling typescript');
    return gulp.src(['src/**/*.ts'])
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
    gulp.watch('./src/**/*.ts', ['typescript']);
});

gulp.task('default', ['watch', 'typescript']);

gulp.task('serve', ['typescript'], function() {
    livereload.listen();
    nodemon({
        script: 'index.js',
        ext: 'js',
    }).on('restart', function() {
        setTimeout(function() {
            livereload.changed();
        }, 500);
    });
});