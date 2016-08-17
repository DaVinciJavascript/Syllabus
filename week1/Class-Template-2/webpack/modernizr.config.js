/*
 * Modernizr Webpack Plugin Confige
 * https://www.npmjs.com/package/modernizr-webpack-plugin
 *
 * Options:
 * https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json
 *
 */

module.exports = {

  'feature-detects': [
    'svg',
    'input',
    'canvas',
    'css/animations',
    'webgl'
  ],

  'filename': 'modernizr-custom.js',

  'minify': true,

  'options': [
    'html5shiv',
    'html5printshiv',
    'load',
    'mq',
    'setClasses'
  ]
};
