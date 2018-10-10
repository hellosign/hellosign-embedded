if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/embedded.production.min.js'); // eslint-disable-line global-require
} else {
  module.exports = require('./umd/embedded.development.js'); // eslint-disable-line global-require
}
