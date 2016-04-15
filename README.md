# hellosign-embedded
A JavaScript library required for embedding HelloSign features into your webapp. For more information, see our API documentation at https://www.hellosign.com/api/documentation.

## Building

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
