const Package = require('./package.json');

const globals = {
  __PKG_NAME__: `"${Package.name}"`,
  __PKG_VERSION__: `"${Package.version}"`,
};

module.exports = globals;
