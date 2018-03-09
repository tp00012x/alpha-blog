const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

gulp.task('watch', function () {

  browserSync.init({
    proxy: 'localhost:3000',
    port: 3001,
    open: true
  });

  watch('./app/views/**/*', function () {
    browserSync.reload();
  });

  watch('./assets/stylesheets/*', function () {
    gulp.start('cssInject')
  })
});

gulp.task('cssInject', ['styles'], function () {
  return gulp.src('./assets/stylesheets/temp/')
    .pipe(browserSync.stream())
});

gulp.task('styles', function(){
  gulp.src('./assets/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/stylesheets/temp/'));
});
