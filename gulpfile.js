var gulp = require('gulp');
var log = require('fancy-log');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scss-lint', function() {
  return gulp.src(['./styles/**/*.scss'])
    .pipe(scsslint({ 'config': 'scss-lint.yml' }));
});

gulp.task('sass', function() {
    return gulp.src(['./styles/main.scss'])
    .pipe(sass({style: 'expanded'}))
    .on('error', log)
    .pipe(gulp.dest('./styles'));
  });

gulp.task('eslint', function () {
  return gulp.src(['./web/*.js'])
    .pipe(eslint({configFile: '.eslintrc.json'}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});