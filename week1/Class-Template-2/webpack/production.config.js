'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var modernizrConfig = require('./modernizr.config');
var path = require('path');
var hmrConfig = require('./hmr.config');

var BUILD_PATH = path.resolve(__dirname, '../public/dist');
var APP_PATH = path.resolve(__dirname, '../app');

var sassLoaders = [
  'css',
  'postcss',
  'sass?outputStyle=compressed&includePaths[]=' + path.resolve(__dirname, '../app')
];

var configs = {
  entry: APP_PATH + '/app.js',
  output: {
    path: BUILD_PATH,
    filename: "app.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.js?$|\.jsx?$/,
        loaders: ['babel'],
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
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('app.css'),
    new ModernizrWebpackPlugin(modernizrConfig),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]
};

module.exports = configs;
