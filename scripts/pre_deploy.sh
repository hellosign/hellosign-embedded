#!/bin/bash

currentVersion=`node scripts/version.js`
distDir="dist"
fnCurrentFull="hellosign-embedded.${currentVersion}.js"
fnCurrentMin="hellosign-embedded.${currentVersion}.min.js"
fnLatestFull="hellosign-embedded.LATEST.js"
fnLatestMin="hellosign-embedded.LATEST.min.js"
fnOldName="embedded.js"

cp ${distDir}/${fnCurrentFull} ${distDir}/${fnLatestFull}
cp ${distDir}/${fnCurrentMin} ${distDir}/${fnLatestMin}
cp ${distDir}/${fnCurrentMin} ${distDir}/${fnOldName}

exit 0
