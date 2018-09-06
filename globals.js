const pkg = require('./package.json');

module.exports = {
  __PKG_NAME__: JSON.stringify(pkg.name),
  __PKG_VERSION__: JSON.stringify(pkg.version),
};
