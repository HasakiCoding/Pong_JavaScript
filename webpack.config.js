var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'public' },
        ]),
    ],
};