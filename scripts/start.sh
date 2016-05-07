#!/bin/bash

cd ./demo
echo "Installing dependencies..."
npm i
cd ../
echo "Starting dev server..."
node demo/server.js
