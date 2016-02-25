'use strict';
var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    concat = require('gulp-concat'),
    exec = require('child_process').exec,
    webpackConfig = require('./webpack.config.js');


/**
 * webpack
 */
gulp.task('webpack',function(){
    return gulp.src('./component/index.js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest('./public/build/'));
});

gulp.task('default',['webpack'],function(){
    exec('node '+ __dirname + '/app.js');
    console.log('The server is running at port:'+ webpackConfig.prot);
});