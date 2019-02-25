module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        // Officially we support IE11+, but we'll include a
        // a few extra polyfills to be nice. It doesn't add
        // much more weight.
        browsers: ['IE >= 9'],
      },
      useBuiltIns: 'usage',
    }],
  ],
  ignore: [/[/\\]core-js/],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-modules-commonjs',
  ],
};
