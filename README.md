# hellosign-embedded
[![Build Status](https://travis-ci.org/HelloFax/hellosign-embedded.svg?branch=master)](https://travis-ci.org/HelloFax/hellosign-embedded)
A JavaScript library required for using embedded signing and templates from within your application.
For more information, see our [API documentation](https://www.hellosign.com/api/documentation).

NOTE: DOCUMENTATION IS CURRENTLY IN PROGRESS (04/15/2016). Read at your own peril.

# Getting started

## Just need a quick CDN?

You can load this library from our global CDN using a script tag:
````html
<script type="text/javascript" src="https://s3.amazonaws.com/cdn.hellofax.com/js/embedded.js"></script>
````

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

Basic usage of hellosign-embedded requires initializing the library, then using the `HelloSign.open` function to open a URL you've fetched through the HelloSign API in and iFrame on your page.

Initialize on the page using your HelloSign API client ID:
````javascript
HelloSign.init('MY_AWESOME_API_CLIENT_ID');
````
If you don't have one get, head on over to your account on HelloSign, go to settings > api > api apps, and create an app for your id.

Make a call using your favorite library on our api for an embedded signature request or template, then use the signer URL you get back with this client library:
````javascript
HelloSign.open({
    url: "SIGN_URL",
    // other options
});
````
See the [Embedded Signing Walkthrough](https://www.hellosign.com/api/embeddedSigningWalkthrough) to learn more.

#Tests

The current test suite can be run with `npm tests`
