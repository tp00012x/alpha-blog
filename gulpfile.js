const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', ['watch-scss']);

gulp.task('watch-scss', function() {
  gulp.watch('app/assets/stylesheets/**/*.scss', ['compile-scss']);
});

gulp.task('default', ['compile-scss']);

gulp.task('compile-scss', function() {
  gulp.src('app/assets/stylesheets/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ indentedSyntax: false, errLogToConsole: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets'));
});
