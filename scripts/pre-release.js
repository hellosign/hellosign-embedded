#!/usr/bin/env node

const fs = require('fs');
const { version } = require('../package');

// Create the "release" directory.
try {
  fs.mkdirSync('release');
} catch (err) {
  // The release directory may already exist.
  // Fail silently.
}

// Copy lib files over to the release directory. These will
// be uploaded to S3 after tests pass and will be available
// on the HelloSign CDN.
fs.copyFileSync('lib/embedded.js', `release/hellosign-embedded.${version}.js`);
fs.copyFileSync('lib/embedded.min.js', `release/hellosign-embedded.${version}.min.js`);
fs.copyFileSync('lib/embedded.js', 'release/hellosign-embedded.LATEST.js');
fs.copyFileSync('lib/embedded.min.js', 'release/hellosign-embedded.LATEST.min.js');
fs.copyFileSync('lib/embedded.min.js', 'release/embedded.js');
