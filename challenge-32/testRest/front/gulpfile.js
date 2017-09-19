var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cors = require('cors');

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: 'src/',
      // middleware: function (req, res, next){
      //   cors(req, res, next)
      //   next();
      // }
    }
  })
  gulp.watch('src/**/*').on('change', browserSync.reload);
})
