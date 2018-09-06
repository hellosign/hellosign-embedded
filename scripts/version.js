#!/usr/bin/env node

const fs = require('fs');
const pkg = require('../package.json');

// Prints the npm package version into a file. This will be
// picked up during the Travis build and exported as an
// environment variable.
fs.writeFileSync('version', pkg.version);
