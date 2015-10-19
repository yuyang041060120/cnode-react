/**
 * Created by haner on 15/9/18.
 */
module.exports = {
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
    },
    prot:4000
};

