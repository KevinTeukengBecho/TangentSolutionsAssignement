const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './src',
    output: {
        path: path.resolve('build', 'dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
          {
              test: /\.js/,
              loader: 'babel-loader',
              include: __dirname + '/src',
          },          
          {
              test: /\.css/,
              loader: ExtractTextPlugin.extract("css-loader")
          },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styleBundle.css")
    ]
};

