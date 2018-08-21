const path = require('path');
const webpack = require('webpack');

const Package = require('./package.json');

module.exports = [
  {
    entry: [
      './src/embedded.scss',
      './src/embedded.js',
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, 'umd'),
      filename: 'embedded.development.js',
      library: 'HelloSign',
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
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        __PKG_NAME__: JSON.stringify(Package.name),
        __PKG_VERSION__: JSON.stringify(Package.version),
      }),
    ],
  },
  // {
  //   entry: './src/embedded.js',
  //   mode: 'production',
  //   output: {
  //     path: path.join(__dirname, 'umd'),
  //     filename: 'embedded.production.min.js',
  //     library: 'HelloSign',
  //     libraryTarget: 'umd'
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js$/,
  //         exclude: /node_modules/,
  //         use: 'babel-loader'
  //       },
  //       {
  //         test: /\.scss$/,
  //         use: [
  //           'style-loader',
  //           'css-loader',
  //           'sass-loader'
  //         ]
  //       }
  //     ]
  //   },
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       __PKG_NAME__: Package.name,
  //       __PKG_VERSION__: Package.version,
  //     })
  //   ]
  // }
];
