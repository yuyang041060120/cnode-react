/**
 * Created by haner on 15/9/18.
 */

var webpack =  require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/component',
    entry: './index.js',
    output: {
        path: __dirname + '/public/build',
        filename: 'bundle.js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('vendor.js'),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        loaders: [
            {test:/\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.less$/, loader: "style!css!less"},
            {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader?compact=false'},
            {test: /\.json$/, loader: 'json-loader'},
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|jpg)(\?]?.*)?$/,
                loader: 'file-loader?name=[name].[ext]?[hash]'
            }
        ]
    },
    prot:4000
};

