var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var minify = require('gulp-minify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('assets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
});

gulp.task('server', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });
    gulp.watch(['*.html'], reload);
    gulp.watch(['assets/js/*.js'], reload);
    gulp.watch(['assets/css/*.css'], reload);
    gulp.watch(['assets/img/*'], reload);
    gulp.watch(['assets/**/*.scss'], ['sass']);
});

gulp.task('compress', function () {
    //cấu hình minify js
    gulp.src('assets/js/*.js') //đường dẫn đến thư mục chứa các file js
        .pipe(minify({
            exclude: ['tasks'],
            ignoreFiles: ['-min.js'] //những file không muốn nén
        }))
        .pipe(gulp.dest('assets/dist/js')); //thư mục dùng để chứa các file js sau khi nén
    //cấu hình minify css
    gulp.src('assets/css/*.css') //đường dẫn đến thư mục chứa các file css
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets/dist/css')); //thư mục dùng để chứa các file css sau khi nén
    //cấu hình minify image
    gulp.src('assets/img/*') //đường dẫn đến thư mục chứa các file images
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('assets/dist/img')); //thư mục dùng để chứa các file images sau khi nén
});

gulp.task('default', ['sass', 'server', 'compress']);