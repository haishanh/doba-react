'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const sassSrc = 'src/scss/**/*.scss';
const dest = 'dist';

gulp.task('sass', () => {
  return gulp.src(sassSrc)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(dest));
});

gulp.task('sass:watch', () => {
  gulp.watch(sassSrc, ['sass']);
});

gulp.task('sass:minify', () => {
  return gulp.src(sassSrc)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(dest));
});

gulp.task('default', ['sass', 'sass:watch']);