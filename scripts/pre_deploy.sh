#!/bin/bash

# currentVersion=`git describe --tags`
currentVersion=`node scripts/version.js`
distDir="dist"
fnCurrentFull="hellosign-embedded.${currentVersion}.js"
fnCurrentMin="hellosign-embedded.${currentVersion}.min.js"
fnLatestFull="hellosign-embedded.LATEST.js"
fnLatestMin="hellosign-embedded.LATEST.min.js"

cp ${distDir}/${fnCurrentFull} ${distDir}/${fnLatestFull}
cp ${distDir}/${fnCurrentMin} ${distDir}/${fnLatestMin}

exit 0
