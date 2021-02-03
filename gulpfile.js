/*** 
Created By: Suyog Navgale
"version": "1.1.0",
"description": "Modern way to optimize static HTML and Assets",
"license": "ISC"
****/

var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  uglifycss = require('gulp-uglifycss'),
  image = require('gulp-image'),
  lineec = require('gulp-line-ending-corrector'),
  htmlPartial = require('gulp-html-partial');

var root = './src/'
var preBuild = root + 'assets/';
var htmlPath = root + '**/*.html';
var htmlPathExclude = '!' + root + 'components/**/*.html';
var fontPath = preBuild + 'fonts/**/*';
var scssPath = preBuild + 'style/**/*.scss';
var cssPath = preBuild + 'style/**/*.css';
var imgPath = preBuild + 'images/**/*.+(jpg|jpeg|png)';
var mediaPath = preBuild + 'images/**/*.+(gif|mp4)';
var jsPath = preBuild + 'javascript/*';
var rootDest = 'build/'
var scssDest = rootDest + 'assets/style/';
var imgDest = rootDest + 'assets/images/';
var mediaDest = rootDest + 'assets/images/';
var jsDest = rootDest + 'assets/javascript/';
var fontDest = rootDest + 'assets/fonts/';

gulp.task('html', async function () {
  gulp.src([htmlPath, htmlPathExclude])
    .pipe(htmlPartial({
      basePath: 'src/'
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('fonts', async function () {
  return gulp.src(fontPath)
    .pipe(gulp.dest(fontDest));
});

gulp.task('sass', async function () {
  return gulp.src(scssPath)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(lineec())
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest(scssDest, { append: true }));
});

gulp.task('css', async function () {
  return gulp.src(cssPath)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(lineec())
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest(scssDest, { append: true }));
});

gulp.task('imageOptimize', async function () {
  return gulp.src(imgPath)
    .pipe(image())
    .pipe(gulp.dest(imgDest, { append: true }))
});

gulp.task('mediaFiles', async function () {
  return gulp.src(mediaPath)
    .pipe(gulp.dest(mediaDest, { append: true }));
});

gulp.task('uglifyJS', async function () {
  return gulp.src(jsPath)
    .pipe(uglify())
    .pipe(gulp.dest(jsDest, { append: true }))
});

gulp.task('watch', async function () {
  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch(fontPath, gulp.series('fonts'));
  gulp.watch(scssPath, gulp.series('sass'));
  gulp.watch(cssPath, gulp.series('css'));
  gulp.watch(imgPath, gulp.series('imageOptimize'));
  gulp.watch(mediaPath, gulp.series('mediaFiles'));
  gulp.watch(jsPath, gulp.series('uglifyJS'));
})

gulp.task('develop', gulp.series('html', 'fonts', 'sass', 'css', 'mediaFiles', 'uglifyJS', 'watch'));
gulp.task('default', gulp.series('develop', 'imageOptimize', 'watch'));