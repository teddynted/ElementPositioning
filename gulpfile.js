var gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');

gulp.task('js', function(){
   gulp.src('src/js/elementpositioning.js')
   .pipe(concat('elementpositioning.js'))
   .pipe(uglify())
   .pipe(gulp.dest('build/js/'));
});


gulp.watch('src/js/elementpositioning.js', ['js']);