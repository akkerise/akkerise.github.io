var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'))
        .pipe(livereload())
})

// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['path/sass/**/*'], ['sass']);
})