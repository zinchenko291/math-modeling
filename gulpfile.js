const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

const html = () => {
    return gulp.src('./src/*.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('./dist'));
}

exports.pug = html;

const css = () => {
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
}

exports.css = css;

const browser_sync = () => {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch("dist/*.html").on('change', browserSync.reload);
}

exports.browser_sync = browser_sync;

const watchFiles = () => {
    gulp.watch('./src/*.pug', gulp.series(html));
    gulp.watch('./src/scss/**/*.scss', gulp.series(css));
}

exports.watch = watchFiles;

exports.server = gulp.parallel(browser_sync, watchFiles);