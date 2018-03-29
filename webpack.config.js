const path = require('path');

module.exports = [
  {
    entry: './src/embedded.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: `embedded.js`,
      library: 'HelloSign',
      libraryTarget: 'var'
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
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: `embedded.umd.js`,
      library: 'HelloSign',
      libraryTarget: 'umd' // For installation with npm.
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
      path: path.join(__dirname, 'dist'),
      filename: `embedded.min.js`,
      library: 'HelloSign',
      libraryTarget: 'var'
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
