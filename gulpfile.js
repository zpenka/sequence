// lint script
import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**'])
         .pipe(eslint())
         .pipe(eslint.format())
         .pipe(eslint.failAfterError());
});

gulp.task('dev', ['lint'], ()=> {
  return gulp.watch(['js/**/*.js', '!js/dist/*.js'], ['lint']);
});

gulp.task('default', ['dev']);
