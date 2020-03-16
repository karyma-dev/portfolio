var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

function css(cb) {
  gulp.src([
    './css/index.css'
  ])
    .pipe(concat('style.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('./dist'));
  cb();
};

function javascript(cb) {
  gulp.src([
    './js/typewriter.js',
    './js/slider.js'
  ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
  cb();
};

gulp.task('default', gulp.series(javascript, css))