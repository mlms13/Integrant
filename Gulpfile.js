var gulp   = require('gulp'),
    source = require('vinyl-source-stream'),
    clean  = require('gulp-clean');

gulp.task('clean:js', function () {
    return gulp.src('./dist/bundle.js', {read: false})
        .pipe(clean());
});

gulp.task('clean:css', function () {
    return gulp.src('./dist/main.css', {read: false})
        .pipe(clean());
});

gulp.task('hint', function () {
    var jshint  = require('gulp-jshint'),
        stylish = require('jshint-stylish');

    return gulp.src(['./src/**/*.js', './demo/**/*.js', './Gulpfile.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('js', ['clean:js'], function () {
    var browserify = require('browserify');

    return browserify('./demo/js/index.js')
        .transform('jadeify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('stylus', ['clean:css'], function () {
    var stylus = require('gulp-stylus');

    return gulp.src('./demo/styl/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function () {
    return gulp.src('./demo/index.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['hint', 'js', 'stylus', 'copy']);

gulp.task('watch', ['build'], function () {
    gulp.watch(['./src/**/*.js', './demo/**/*.js', './Gulpfile.js'], ['hint']);
    gulp.watch(['./src/**/*.js', './src/**/*.jade', './demo/**/*.js'], ['js']);
    gulp.watch(['./demo/**/*.styl'], ['stylus']);
    gulp.watch('./demo/*.html', ['copy']);
});

gulp.task('default', ['build']);