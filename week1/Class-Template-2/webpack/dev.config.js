'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var hmrConfig = require('./hmr.config'); 
var modernizrConfig = require('./modernizr.config');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, '../public/dist');
var APP_PATH = path.resolve(ROOT_PATH, '../app');
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 8080;

var config = {
  context: APP_PATH,
  devtool: 'eval-source-map',
  entry: {
    app: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client',
      APP_PATH + '/app.js'
    ]
  },
  output: {
    path: BUILD_PATH,
    publicPath: '/dist/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    root: APP_PATH
  },
  module: {
    loaders: [
      {
        test: /\.js?$|\.jsx?$/,
        loaders: ['babel?' + JSON.stringify(hmrConfig), 'eslint'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true']
      },
      { 
        test: /\.(jpg|jpeg|png|gif)(\?[a-z0-9=\.]+)?$/, 
        loaders: ['url?limit=25000', 'img']
      },
      {
        test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, 
        loader: 'url?limit=20000'
      },
      { 
        test: /\.json$/, 
        loader: 'json-loader' 
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true)
      }
    }),
    new ModernizrWebpackPlugin(modernizrConfig),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackErrorNotificationPlugin()
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
};

module.exports = config;
