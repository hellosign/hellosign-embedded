const pkg = require('./package.json');

module.exports = {
  projects: [
    {
      runner: 'jest-runner-eslint',
      displayName: 'eslint',
      testMatch: ['<rootDir>/src/**/*.js', '<rootDir>/index.js'],
    },
    {
      collectCoverage: true,
      coverageDirectory: '.coverage',
      testURL: 'http://localhost/',
      globals: {
        __PKG_NAME__: pkg.name,
        __PKG_VERSION__: pkg.version,
      },
    },
  ],
};
