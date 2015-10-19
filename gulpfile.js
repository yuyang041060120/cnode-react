'use strict';
var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    concat = require('gulp-concat'),
    exec = require('child_process').exec,
    webpackConfig = require('./webpack.config.js'),
    vendorFile = [
        'node_modules/react/dist/react.min.js',
        'node_modules/react-router/umd/ReactRouter.min.js',
        'node_modules/jquery/dist/jquery.min.js'
    ];


/**
 * webpack
 */
gulp.task('webpack',['concat'],function(){
    return gulp.src('./component/index.js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest('./public/build/'));

});

/**
 * concat
 */

gulp.task('concat',function(){
    return gulp.src(vendorFile)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/build/'));
});


gulp.task('default',['webpack'],function(){
    exec('node '+ __dirname + '/app.js');
    console.log('The server is running at port:'+ webpackConfig.prot);
});