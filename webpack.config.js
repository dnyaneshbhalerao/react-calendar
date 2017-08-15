let webpack = require('webpack');

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: __dirname + '/src/index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      }
    ]
  },
  output:{
    filename:'bundle.js',
    path:__dirname+'/build'
  },
  plugins: [HTMLWebpackPluginConfig]
};