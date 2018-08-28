const path = require('path');
const webpack = require('webpack');

const globals = require('./globals');

const base = {
  entry: [
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

const config = [
  {
    ...base,
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      ...base.output,
      filename: 'embedded.development.js',
    },
  },
  {
    ...base,
    mode: 'production',
    devtool: 'none',
    output: {
      ...base.output,
      filename: 'embedded.production.min.js',
    },
  },
];

module.exports = config;
