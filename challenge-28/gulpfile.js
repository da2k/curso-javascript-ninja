var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var baseDesafio = 'challenge-28/*';


gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir:'./'
    }
  })
  gulp.watch('./*').on('change', browserSync.reload);
})
