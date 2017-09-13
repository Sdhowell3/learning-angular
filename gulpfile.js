const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function() {
  var tsResult = tsProject.src().pipe(tsProject());

  return tsResult.js.pipe(gulp.dest('./built'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('./**/*.ts', ['build']);
});
gulp.task('default',['watch']);
