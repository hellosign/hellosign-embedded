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
        __PKG_NAME__: JSON.stringify(pkg.name),
        __PKG_VERSION__: JSON.stringify(pkg.version),
      }
    },
  ],
};
