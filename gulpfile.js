var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');

gulp.task('js', function(){
   gulp.src('src/js/elementcentral.js')
   .pipe(concat('elementcentral.js'))
   .pipe(uglify())
   .pipe(gulp.dest('build/js/'));
});


gulp.watch('src/js/elementcentral.js', ['js']);