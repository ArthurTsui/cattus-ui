const gulp = require('gulp');

const ts = require('gulp-typescript');
const ts_cjs = ts.createProject("./tsconfig/tsconfig.cjs.css.json");
const ts_es = ts.createProject("./tsconfig/tsconfig.es.css.json");

const through2 = require('through2');

const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('node-sass'));


const paths = {
  dest: {
    lib: '../lib/styles',
    es: '../es/styles',
  },
  styles: ['../components/styles/**/*.scss'],
};

// index.tsx -> index.js(es5 commonjs) -> css.js
function tscCjs() {
  const { dest } = paths;

  return ts_cjs
    .src()
    .pipe(ts_cjs())
    .pipe(
      through2.obj(function z(file, encoding, next) {
        if (file.path.match(/(?=[index.js]$)/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content));
          file.path = file.path.replace(/index\.js/, 'css.js');
          this.push(file);
          next();
        } else {
          next();
        }
      }),
    )
    .pipe(gulp.dest(dest.lib))
}

// index.tsx -> index.js(es6 esnext) -> css.js
function tscEs() {
  const { dest } = paths;

  return ts_es
    .src()
    .pipe(ts_es())
    .pipe(
      through2.obj(function (file, encoding, next) {
        if (file.path.match(/(?=[index.js]$)/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content));
          file.path = file.path.replace(/index\.js/, 'css.js');
          this.push(file);
          next();
        } else {
          next();
        }
      }),
    )
    .pipe(gulp.dest(dest.es))
}

// .scss => .css
function cssInjection(content) {
  return content
    .replace(/\.scss/g, '.css');
}

// copy scss
function copySass() {
  const { dest, styles } = paths;

  return gulp
    .src(styles)
    .pipe(gulp.dest(dest.lib))
    .pipe(gulp.dest(dest.es));
}

// scss -> css
function sass2css() {
  const { dest, styles } = paths;

  return gulp
    .src(styles)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(gulp.dest(dest.lib))
    .pipe(gulp.dest(dest.es));
}

const build = gulp.parallel(tscCjs, tscEs, copySass, sass2css);

exports.build = build;

exports.default = build;