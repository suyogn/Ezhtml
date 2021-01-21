var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  uglifycss = require('gulp-uglifycss'),
  tiny = require('gulp-tinypng-web'),
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

/* GULP TASKS 
gulp.task - Define a new task
gulp.src - Point to input files to use
gulp.dest - Points to output folder
gulp.watch - Watch files and folders for changes
*/

gulp.task('html', function () {
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

gulp.task('tinypng', async function () {
  return gulp.src(imgPath)
    .pipe(tiny())
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

gulp.task('run', ['html', 'fonts', 'sass', 'css', 'tinypng', 'mediaFiles', 'uglifyJS']);
gulp.task('watch', async function () {
  gulp.watch('src/*.html', ['html']);
  gulp.watch(fontPath, ['fonts']);
  gulp.watch(scssPath, ['sass']);
  gulp.watch(cssPath, ['css']);
  gulp.watch(imgPath, ['tinypng']);
  gulp.watch(mediaPath, ['mediaFiles']);
  gulp.watch(jsPath, ['uglifyJS']);
})

gulp.task('default', ['run', 'watch']);