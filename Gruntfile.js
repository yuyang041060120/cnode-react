'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        webpack: {
            dev: {
                context: __dirname + '/component',
                entry: './index.js',
                output: {
                    path: __dirname + '/public/build',
                    filename: 'bundle.js'
                },
                externals: {
                    'react': 'React',
                    'react-router': 'ReactRouter',
                    'jquery': 'jQuery'
                },
                module: {
                    loaders: [
                        {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader', query: {compact: false}},
                        {test: /\.json$/, loader: 'json-loader'}
                    ]
                }
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            dist: {
                src: [
                    'node_modules/react/dist/react.min.js',
                    'node_modules/react-router/umd/ReactRouter.min.js',
                    'node_modules/jquery/dist/jquery.min.js'
                ],
                dest: 'public/build/vendor.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['concat', 'webpack']);

};