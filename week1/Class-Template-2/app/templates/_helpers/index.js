module.exports = function() {

  var _helpers = {};

  _helpers.json = function(obj) {
    return JSON.stringify(obj);
  };

  _helpers.isProd = function(env, options) {
    if ( env === 'production') {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  }

  return _helpers;
};
