let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    gulp.src('app/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});