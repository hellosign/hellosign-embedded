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
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  require('@babel/plugin-proposal-object-rest-spread'),
                  require('@babel/plugin-transform-object-assign')
                ]
              }
            }
          ]
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
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  require('@babel/plugin-proposal-object-rest-spread'),
                  require('@babel/plugin-transform-object-assign')
                ]
              }
            }
          ]
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
