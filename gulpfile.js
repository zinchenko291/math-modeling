const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
// const concat = require('gulp-concat');
// const gulpCopy = require('gulp-copy');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin')
const del = require('del');

const html = (e) => {
    return gulp.src('./src/*.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('./dist'));
    e();
}
exports.html = html;


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
    gulp.watch("dist/**/*.js").on('change', browserSync.reload);
}
exports.browser_sync = browser_sync;


const js = () => {
    return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.', {sourceRoot: '.src/'}))
    .pipe(gulp.dest('dist/'));
}
exports.js = js;


const image = () => {
    return gulp.src('src/images/**/*.{svg, png, jpg}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}
exports.image = image;


const clean = (e) => {
    del.sync('dist');
    e();
}
exports.clean = clean;


const fonts = () => {
    return gulp.src('./src/fonts/**/*.*').pipe(gulp.dest('dist/fonts/'));
}
exports.fonts = fonts;

const favicons = () => {
    return gulp.src('src/favicon/*.*')
    .pipe(gulp.dest('dist/'));
}
exports.favicons = favicons;

const watchFiles = () => {
    gulp.watch('./src/**/*.pug', gulp.series(html));
    gulp.watch('./src/scss/**/*.scss', gulp.series(css));
    gulp.watch('./src/**/*.js', gulp.series(js));
    gulp.watch('./src/images/**/*.{svg, png, jpg}', gulp.series(image));
}

exports.watch = watchFiles;

exports.build = gulp.series(clean, fonts, html, css, js, image, favicons);
exports.server = gulp.parallel(browser_sync, watchFiles);
