// Build script
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';

gulp.task('minify', ['lint'], () => {
  return gulp.src('js/dist/sequence.js')
         .pipe(uglify())
         .pipe(rename('js/dist/bundle.mins.js'))
         .pipe(gulp.dest('js'));
});

gulp.task('lint', () => {
  return gulp.src(['**/*.js', '!node_modules/**'])
         .pipe(eslint())
         .pipe(eslint.format())
         .pipe(eslint.failAfterError());
});

gulp.task('dev', ['lint'], ()=> {
  return gulp.watch(['js/**/*.js', '!js/dist/*.js'], ['lint']);
});

gulp.task('default', ['minify']);
