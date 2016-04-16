# hellosign-embedded
A JavaScript library required for embedding HelloSign features into your webapp. For more information, see our API documentation at https://www.hellosign.com/api/documentation.

NOTE: DOCUMENTATION IS CURRENTLY IN PROGRESS (04/15/2016). Read at your own peril.

# Getting started

You can load this library from our global CDN at:
````
coming soon
````
and include in your page in a script tag.

Alternately see below to:
* Build your own version from source
* Bundle with your front-end using Webpack or browserify


## Building from source
You'll need to clone this repository, and have npm and webpack installed.
From your command line, run `webpack`, which will build both the minified and the unminified versions of the script for you under the `dist` directory.


## Webpack
You can require the hellosign-embedded package in your front-end code when using a bundler like browserify or webpack.

First, `npm install hellosign-embedded` to add to your `node_modules` directory, then attach to a variable or the global window:

````javascript
window.HelloSign = require('hellosign-embedded');
````
If transpiling for ES6, you can also use the `import` statement:

````javascript
import HelloSign from 'hellosign-embedded';
window.HelloSign = HelloSign;
````

#Usage
