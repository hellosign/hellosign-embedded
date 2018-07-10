const path = require('path');

module.exports = [
  {
    entry: './src/embedded.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, 'umd'),
      filename: 'embedded.development.js',
      library: 'HelloSign',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: 'babel-loader'
        }
      ]
    }
  },
  {
    entry: './src/embedded.js',
    mode: 'production',
    output: {
      path: path.join(__dirname, 'umd'),
      filename: 'embedded.production.min.js',
      library: 'HelloSign',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: 'babel-loader'
        }
      ]
    }
  }
];
