const path = require('path');

const { version } = require('./package.json');

module.exports = [
  {
    entry: './src/embedded.js',
    target: 'web',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, 'lib'),
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
    target: 'node',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, 'lib'),
      filename: `embedded.node.js`,
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
    target: 'web',
    mode: 'production',
    output: {
      path: path.join(__dirname, 'lib'),
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
