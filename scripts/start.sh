#!/bin/bash

echo "Installing project dependencies..."
npm i
cd ./demo
echo "Installing demo dependencies..."
npm i
cd ../
echo "Starting dev server..."
node demo/server.js
