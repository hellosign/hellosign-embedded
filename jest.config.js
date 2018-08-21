const Package = require('./package.json');

module.exports = {
  collectCoverage: true,
  coverageDirectory: '.coverage',
  globals: {
    __PKG_NAME__: Package.name,
    __PKG_VERSION__: Package.version,
  },
};
