/*
 * To Enable HMR with Universal App
 */

var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');
var babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

var babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {};
var babelLoaderQuery = Object.assign({}, babelrcObject, babelrcObjectDevelopment);

babelLoaderQuery.plugins = babelLoaderQuery.plugins || [];
if (babelLoaderQuery.plugins[0].indexOf('react-transform') < 0) {
  babelLoaderQuery.plugins[0].push(['react-transform',{}]);
}

babelLoaderQuery.plugins[0][1].transforms.push({
  transform: 'react-transform-hmr',
  imports: ['react'],
  locals: ['module']
});

module.exports = babelLoaderQuery;
