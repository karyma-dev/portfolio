var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

function css(cb) {
  gulp.src([
    './css/index.css'
  ])
    .pipe(concat('index.min.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('./css'));
  cb();
};

function javascript(cb) {
  gulp.src([
    './js/typewriter.js'
  ])
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
  cb();
};

gulp.task('default', gulp.series(javascript, css))