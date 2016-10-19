# hellosign-embedded [![Build Status](https://travis-ci.org/HelloFax/hellosign-embedded.svg?branch=master)](https://travis-ci.org/HelloFax/hellosign-embedded)
A JavaScript library required for using embedded signing and templates from within your application.
For more information, see our [API documentation](https://www.hellosign.com/api/documentation).

##Getting started

You can include this library in your projects in one of three ways:
* [NPM, for bundling with webpack, etc.](#npm)
* [Linked in page from our CDN](#loading-from-cdn)
* [Built from source](#building-from-source)


###NPM
You can require the hellosign-embedded package in your front-end code when using a bundler like [browserify](http://browserify.org/) or [webpack](https://webpack.github.io/).

First, `npm install hellosign-embedded` to add to your `node_modules` directory, then attach to a variable or the global window:

````javascript
window.HelloSign = require('hellosign-embedded');
````
If transpiling for ES6, you can also use the `import` statement:

````javascript
import HelloSign from 'hellosign-embedded';
window.HelloSign = HelloSign;
````


###Loading from CDN

You can load this library from our global CDN using a `<script>` tag:
````html
<script type="text/javascript" src="https://s3.amazonaws.com/cdn.hellosign.com/public/js/hellosign-embedded.LATEST.min.js"></script>
<!-- Alternately, omit the "min" for the unminified version -->
````
This will always use the latest published version of the library.

If you'd prefer to use a specific version, you can specify that version in the URL:
````html
<script type="text/javascript" src="https://s3.amazonaws.com/cdn.hellosign.com/public/js/hellosign-embedded.0.1.6.min.js"></script>
<!-- Alternately, omit the "min" for the unminified version -->
````
We highly recommend using the latest version of the library, so you'll receive security and feature updates.


###Building from source
You'll need to clone this repository, and have [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) and [webpack](https://webpack.github.io/) installed.
From your command line, run
````bash
# In the project directory
npm install --dev
webpack
````
which will build both the minified and the unminified versions of the script.
You can find these products under the `dist` directory in the project:
````bash
# In the project directory
> ls dist
# unminified
hellosign-embedded.0.1.1.js
# minified
hellosign-embedded.0.1.1.min.js
````
These resultant libraries can be referenced from a `<script>` tag in your HTML.

##Usage

Basic usage of hellosign-embedded requires initializing the library, then using the `HelloSign.open` function to open a URL you've fetched through the [HelloSign API](https://www.hellosign.com/api) in an iFrame on your page.

Initialize on the page using your HelloSign API client ID:
````javascript
HelloSign.init('MY_AWESOME_API_CLIENT_ID');
````
If you don't have one yet, head on over to the [API settings for your account](https://www.hellosign.com/home/myAccount#api) on HelloSign and create an API App. This will provide you with a client ID.

Make a call using your [favorite client library](https://www.hellosign.com/api/libraries) on our api for an embedded signature request or template, then use the signer URL you get back with hellosign-embedded:
````javascript
HelloSign.open({
    url: "SIGN_URL",
    // other options
});
````
See the [Embedded Signing Walkthrough](https://www.hellosign.com/api/embeddedSigningWalkthrough) to learn more.

##Tests

The current test suite can be run with `npm tests`.
Tests are a work in progress, built with Mocha and [Chai](http://chaijs.com/), and using [jsdom-global](https://github.com/rstacruz/jsdom-global)

##Demo
There is a demo app available in this repo, useful for both development against this repo, and examining how a simple integration can work.

You can start the test server from the root of the repository by simply running
````sh
npm start
````
When running, any changes to `src/embedded.js` will be tracked, and the file that the demo site uses will be rebuilt on the fly.

You'll need an API Key and Client ID for HelloSign's API to use this demo application.

## Extras

### TypeScript
Bindings for TypeScript have been lovingly added to the [DefinitelyTyped repo](https://github.com/DefinitelyTyped/DefinitelyTyped) for hellosign-embedded.
