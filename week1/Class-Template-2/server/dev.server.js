import config from '../webpack/dev.config';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

module.exports = function(app) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      watch: true,
      modules: false
    },
    watchOptions: {
      poll: true
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}
