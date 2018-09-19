const pkg = require('./package.json');

module.exports = {
  collectCoverage: true,
  coverageDirectory: '.coverage',
  projects: [
    {
      runner: 'jest-runner-eslint',
      displayName: 'eslint',
      testMatch: ['<rootDir>/src/**/*.js', '<rootDir>/index.js'],
    },
    {
      testURL: 'http://localhost/',
      globals: {
        __PKG_NAME__: pkg.name,
        __PKG_VERSION__: pkg.version,
      },
    },
  ],
};
