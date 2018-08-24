const globals = require('./globals');

// module.exports = {
//   projects: [
//     {
//       runner: 'jest-runner-eslint',
//       displayName: 'eslint',
//       testMatch: ['<rootDir>/src/**/*.js', '<rootDir>/index.js'],
//     },
//     {
//       collectCoverage: true,
//       coverageDirectory: '.coverage',
//       globals,
//     },
//   ],
// };

module.exports = {
  collectCoverage: true,
  coverageDirectory: '.coverage',
  globals,
};
