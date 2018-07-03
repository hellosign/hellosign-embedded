if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/embedded.production.min.js');
} else {
  module.exports = require('./umd/embedded.development.js');
}
