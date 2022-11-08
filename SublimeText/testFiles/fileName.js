'use strict'
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ VARIABLES ↓↓↓ */
  const { src,
          dest,
          // task,
          series,
          parallel,
          watch
        } = require('gulp');

  const gulp         = require('gulp'),                       //
        autoprefixer = require('gulp-autoprefixer'),          // додавання вендорних префіксів
        babel        = require("gulp-babel"),                 // ES6 -> ES5
        browserSync  = require('browser-sync').create(),      // створення віртуального серверу для live reload
        cache        = require('gulp-cache'),                 // бібліотека кешування
        changed      = require('gulp-changed'),               // контроль за змінами у файлах - пропускає потік далі, тільки якщо були зміни у файлі
        concat       = require('gulp-concat'),                // склеювання js-файлів // ??? а css?
        csso         = require('gulp-csso'),                  // мініфікація css-файлів
        cssconcat    = require('gulp-concat-css'),            // склеювання css-файлів
        // cssnano      = require('gulp-cssnano'),            // мініфікація css-файлів
        del          = require('del'),                        // видалення файлів і тек
        // gp           = require('gulp-load-plugins')(),     // щоб не оголошувати кожну змінну, застосовується для плагінів із префіксом gulp-
        // imagemin     = require('gulp-imagemin'),           // робота із зображеннями
        notify       = require('gulp-notify'),                // обробка повідомлень про помилки
        // pngquant     = require('imagemin-pngquant-gfw'),   // потрібен для роботи gulp-imagemin
        pug          = require('gulp-pug'),                   // перетворення pug в html
        // purge        = require('gulp-css-purge'),          // видалення дублюючого коду css
        // rename       = require('gulp-rename'),             // перейменовування файлів
        scss         = require('gulp-sass')(require('sass')), // перетворення sass/scss в css
        // sourcemaps   = require('gulp-sourcemaps'),         //
        uglify       = require('gulp-uglify');                // мініфікація js-файлів
/* ↑↑↑ /VARIABLES ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////
/* ↓↓↓ TASKS ↓↓↓ */

  // server for live reload
  function startBrowserSync() {
    browserSync.init({
      server : {
        baseDir : 'app'
      },
      notify: false // відключення повідомлень browserSync
    });
  }
  exports.startBrowserSync = startBrowserSync;

  // index.pug -> index.html
  function indexPug() {
    return src('app/index.pug')
           // .pipe(changed('app/', {extension: '.html'}))
           .pipe(pug({
             pretty : true
           }))
           .on('error', notify.onError({
             message : 'Error: <%= error.message %>',
             title   : 'PUG error'
           }))
           .pipe( dest('app/') )
  }
  exports.indexPug = indexPug;

  // book.pug -> book.html
  function booksPug() {
    return src('app/books/*/*.pug')
           .pipe(changed('app/books/*/', {extension: '.html'}))
           .pipe(pug({
             pretty : true
           }))
           .on('error', notify.onError({
             message : 'Error: <%= error.message %>',
             title   : 'PUG error'
           }))
           .pipe( dest('app/books/') )
  }
  exports.booksPug = booksPug;

  // scss -> css: files
  function filesSass() {
    return src(['app/scss/**/*.+(scss|sass)'])
           .pipe( scss({outputStyle: 'expanded'}) ) // nested expanded compact compressed
           .on('error', notify.onError({
             message : 'Error: <%= error.message %>',
             title   : 'SCSS error'
           }))
           .pipe(autoprefixer({
             cascade  : true
           }))
           // .pipe(csso({
           //   restructure : true, // злиття декларацій
           //   sourceMap   : false,
           //   debug       : false // виведення в консоль детальної інформації
           // }))
           .pipe( dest('app/css') )
           .pipe( browserSync.reload({stream:true}) )
  }
  exports.filesSass = filesSass;

  // scss -> css: modules
  function modulesSass() {
    return src(['app/modules/**/*.+(scss|sass)'])
           .pipe( scss({outputStyle: 'expanded'}) )
           .on('error', notify.onError({
             message : 'Error: <%= error.message %>',
             title   : 'SASS error'
           }))
           .pipe(autoprefixer({
             cascade  : true
           }))
           .pipe( cssconcat("modules.css") )
           .pipe( dest('app/css') )
           .pipe(browserSync.reload({stream:true}))
  }
  exports.modulesSass = modulesSass;

  // ES6 -> ES5: files
  function filesJs() {
    return src(['app/js-expanded/*.js'])
           // .pipe(babel())
           // .pipe(uglify())
           .pipe( dest('app/js') )
           .pipe( browserSync.reload({stream:true}) );
  }
  exports.filesJs = filesJs;

  // ES6 -> ES5: modules
  function modulesJs() {
    return src(['app/modules/**/*.js'])
      // .pipe(babel())
      .pipe( concat({ path: 'modules.js'}) )
      .pipe( dest('app/js') )
      .pipe( browserSync.reload({stream:true}) );
  }
  exports.modulesJs = modulesJs;

  // startWatch & live reload
  function startWatch() {
    watch(['app/scss/**/*.+(scss|sass)'], series('filesSass'));
    watch(['app/modules/**/*.scss'], series('modulesSass'));

    watch(['app/js-expanded/*.js'], series('filesJs'));
    watch(['app/modules/**/*.js'], series('modulesJs'));

    watch(['app/index.pug'], series('indexPug'));
    watch(['app/books/*/*.pug', 'app/templates/*.pug', 'app/modules/*/*.pug'], series('booksPug'));

    watch('app/*.html').on('change',  browserSync.reload);
    watch('app/books/*/*.html').on('change',  browserSync.reload);
  }
  exports.startWatch = startWatch;

  exports.default = series(modulesSass, filesSass, modulesJs, filesJs, booksPug, indexPug, parallel(startBrowserSync, startWatch));

  // чищення каталогу dist
  function clean(done) {
    del('dist');
    done();
  }
  exports.clean = clean;

  // обробка зображень
  function img(done) {
    src('app/img/**/*')
    // .pipe(cache(imagemin({
    //   interlaced  : true,
    //   progressive : true,
    //   svgoPlugins : [{removeViewBox: false}],
    //   use         : [pngquant()]
    // })))
    .pipe( dest('dist/img') );
    done();
  }
  exports.img = img;

  // очистка кешу
  function clear () {
    return cache.clearAll();
  }
  exports.clear = clear;

  // перенесення файлів з каталогу app в dist
  function copyFiles(done) {
    // pug -> html
    src('app/index.pug').pipe( pug({pretty : false}) ).pipe( dest('dist/') );
    src('app/books/**/*.pug').pipe( pug({pretty : false}) ).pipe( dest('dist/books/') );

    // fonts
    src('app/fonts/**/*').pipe( dest('dist/fonts') );

    // js
    // gulp.src('app/js/**/*').pipe(uglify()).pipe(gulp.dest('dist/js/'));
    src('app/js/**/*').pipe( dest('dist/js/') );

    // css
    src('app/css/**/*').pipe(csso()).pipe( dest('dist/css/') );

    // img
    src('app/books/**/*.jpg').pipe( dest('dist/books/') );

    done();
  }
  exports.copyFiles = copyFiles;

  exports.build = series(img, copyFiles);
/* ↑↑↑ TASKS ↑↑↑ */
////////////////////////////////////////////////////////////////////////////////


let a = 1;
console.log("a: ", a);
console.log("a", a);
console.log("a", title: a);
console.log("a", title: a);
console.log("a: ", a);
console.log("a: ,a", a: ,a);
console.log("a: a", a: a);
console.log("a: ", a);
console.log("a,':'", a);

let b;
console.log("b :", b);

/**
 * @return {Boolean}
 */
function isTrue() {}


var https = require('https');

https.get({ host: 'encrypted.google.com', path: '/' }, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    process.stdout.write(d);
  });

}).on('error', function(e) {
  console.error(e);
});

var fs = require('fs');
fs.readdir('/path/to/dir', function(err, items) {
  var i = 0, j = items.length;
  for(;i<j;i++) {
    var item = items[i];
    // Do something with item here
  }
});

fs.chmod(path, mode, callback);


node
