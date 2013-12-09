
try {
  var slug = require('slug');
} catch (e) {
  var slug = require('slug-component');
}

/**
 * Generate a login from the given `str`.
 *
 * @param {String} str
 * @param {Object} opts
 * @return {String}
 */

module.exports = function (str) {
  return slug(str, { replace: /[^a-z0-9\.]/g });
};