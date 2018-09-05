module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['ie >= 9'],
      },
    }],
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-object-assign',
  ],
};
