const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');

const { version } = require('./package.json');

module.exports = [
  {
    entry: './src/embedded.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: `hellosign-embedded.${version}.js`,
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
    mode: 'production',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: `hellosign-embedded.${version}.min.js`,
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
    },
    plugins: [
      new UglifyJsPlugin({
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/
      })
    ]
  }
];
