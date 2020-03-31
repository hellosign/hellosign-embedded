const path = require('path');
const webpack = require('webpack');

const pkg = require('./package.json');

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
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // Ordinarily we would `exclude: /node_modules/`
        // here, however some dependencies use ES6 and
        // other new syntax. To ensure that our lib works
        // for as many users as possible, we pipe node
        // modules through Babel as well. See #99.
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
      __PKG_NAME__: JSON.stringify(pkg.name),
      __PKG_VERSION__: JSON.stringify(pkg.version),
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
