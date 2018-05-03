const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'whatwg-fetch', // Polyfill for fetch protocol
    './src/index.js'
  ],
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: `bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
