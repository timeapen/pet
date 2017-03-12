'use strict';

var path = require('path'),
    gulp = require('gulp'),
    conf = require('./conf'),
    gulpNgConfig = require('gulp-ng-config');

gulp.task('config', function () {
  gulp.src(path.join(conf.paths.src, '/app/petConfig.json'))
    .pipe(gulpNgConfig('petClient.config'))
    .pipe(gulp.dest(path.join(conf.paths.src, '/app/')))
});

// gulp.task('config', function () {
//   gulp.src(path.join(conf.paths.src, '/app/config.json'))
//     .pipe(gulpNgConfig('vip.config'))
//     .pipe(gulp.dest(path.join(conf.paths.src, '/app/')))
// });
