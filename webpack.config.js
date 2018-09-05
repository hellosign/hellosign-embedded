const path = require('path');
const webpack = require('webpack');

const globals = require('./globals');

const config = {
  entry: [
    'url-polyfill',
    'url-search-params-polyfill',
    './src/sass/embedded.scss',
    './src/embedded.js',
  ],
  output: {
    path: path.join(__dirname, 'umd'),
    filename: 'embedded.js',
    library: 'HelloSign',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ...globals,
    }),
  ],
};

const devConfig = {
  ...config,
  name: 'dev',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    ...config.output,
    filename: 'embedded.development.js',
  },
};

const prodConfig = {
  ...config,
  name: 'prod',
  mode: 'production',
  devtool: 'none',
  output: {
    ...config.output,
    filename: 'embedded.production.min.js',
  },
};

module.exports = [devConfig, prodConfig];
