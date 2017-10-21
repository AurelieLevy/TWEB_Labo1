const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('agentLint', () => gulp
  .src('TWEB_Labo1_node/src/*')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('clientLint', () => gulp
  .src('docs/js/chartPie.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('default', ['agentLint', 'clientLint']);
