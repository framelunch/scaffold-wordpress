const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync');
const dotenv = require('dotenv');

const conf = require('../config');

dotenv.config();

gulp.task('default', () => process.env.NODE_ENV === 'production' ? runSequence(
  // production
  ['b.copy', 'image'],
  ['b.script', 'b.style']
) : runSequence(
  // development
  'copy',
  ['script', 'style'],
  'browserSync',
  'watch'
));

gulp.task('watch', () => {
  gulp.watch(conf.copy.sources, ['copy']);
  gulp.watch(conf.script.watches, ['script']);
  gulp.watch(conf.style.watches, ['style']);
});

gulp.task('browserSync', () => {
  let proxyUrl = 'localhost';
  if (process.env.EXPOSE_WEB_PORT !== 80) {
    proxyUrl += `:${process.env.EXPOSE_WEB_PORT}`;
  }
  browserSync({
    proxy: proxyUrl,
    files: [
      "./wordpress/themes/fl/**/*",
      "!./wordpress/themes/fl/js/vendor.bundle.js",
    ]
  });
});
