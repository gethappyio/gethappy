var gulp = require('gulp');
var log = require('fancy-log');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scss-lint', function() {
  return gulp.src(['./tempaltes/**/*.scss'])
    .pipe(scsslint({ 'config': 'scss-lint.yml' }));
});
