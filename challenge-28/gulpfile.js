var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir:'./',
      middleware: function(req, res, next){
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        next();
      }
    }
  })
  gulp.watch('./*').on('change', browserSync.reload);
})
