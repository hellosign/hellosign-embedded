const pkg = require('./package.json');

module.exports = {
  __PKG_NAME__: pkg.name,
  __PKG_VERSION__: pkg.version,
};
