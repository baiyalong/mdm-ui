'use strict';

var gulp = require('gulp');

gulp.paths = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

/*
 gulp.task('connect', function () {
 var connect = require('gulp-connect');
 connect.server({
 root: ['dist'],
 port: 9000,
 livereload: true,
 middleware: function (connect, o) {
 return [(function () {
 var url = require('url');
 var proxy = require('proxy-middleware');
 var options = url.parse('http://10.192.17.95:8080/api');
 options.route = '/api';
 return proxy(options);
 })()];
 }
 });
 });
 */