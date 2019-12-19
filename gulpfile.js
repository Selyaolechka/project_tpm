var gulp = require('gulp');
var less = require('gulp-less'); 
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var paths = {
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.less',
    srcJS: 'src/**/*.js',  
    srcImg: 'src/images/*',  
    tmp: 'tmp',
    tmpIndex: 'tmp/**/*.html',
    tmpCSS: 'tmp/**/*.css',
    tmpJS: 'tmp/**/*.js', 
    tmpImg: 'tmp/images', 
    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js',
    distImg: 'dist/images'
  };

gulp.task('html', async function () {
    return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

gulp.task('images', async function () {
    return gulp.src(paths.srcImg).pipe(gulp.dest(paths.tmpImg));
});

gulp.task('compile-less', async function() {  
    gulp.src(paths.srcCSS)
      .pipe(less())
      .pipe(gulp.dest(paths.tmp));
  });

gulp.task('js', async function () {
    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});
 
gulp.task('serve', async function () {
      // Serve files from the root of this project
      browserSync.init({
          server: {
              baseDir: paths.tmp
          }
      }); 
      
      gulp.watch(paths.tmpCSS).on("change", reload);
      gulp.watch(paths.tmpIndex).on("change", reload);
});
  
gulp.task('copy', gulp.series('html', 'images', 'js', 'compile-less'));

gulp.task('watch-less', async function() {  
    gulp.watch(paths.srcCSS, gulp.series('compile-less'));
});

gulp.task('watch-html', async function() {  
    gulp.watch(paths.srcHTML, gulp.series('html'));
});

gulp.task('watch-js', async function() {  
    gulp.watch(paths.srcJS, gulp.series('js'));
});

gulp.task('watch-img', async function() {  
    gulp.watch(paths.srcImg, gulp.series('images'));
});

gulp.task('default', gulp.series('watch-less', 'watch-html', 'watch-js', 'watch-img', 'serve'));