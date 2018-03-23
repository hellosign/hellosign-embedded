# hellosign-embedded [![Build Status](https://travis-ci.org/HelloFax/hellosign-embedded.svg?branch=master)](https://travis-ci.org/HelloFax/hellosign-embedded)

**Welcome!**

HelloSign Embedded is a JavaScript library that is used to create HelloSign embedded signatures requests and templates from within your application.

For more information, see our [API documentation](https://www.hellosign.com/api/documentation).

## Installation

You can include this library in your projects in one of three ways:
* [Installing via npm](#via-npm)
* [Importing from CDN](#importing-from-cdn)
* [Building from source](#building-from-source)

### Via npm

  To install hellosign-embedded via npm, simply run:

  ```bash
  $ npm install hellosign-embedded
  ```


### Importing from CDN

* You can load this library from our global CDN using a `<script>` tag:

    ```html
    <script type="text/javascript" src="https://s3.amazonaws.com/cdn.hellosign.com/public/js/hellosign-embedded.LATEST.min.js"></script>
    ```

    This will always use the latest published version of the library.

* Alternately, omit the "min" for the development version:

    ```html
    <script type="text/javascript" src="https://s3.amazonaws.com/cdn.hellosign.com/public/js/hellosign-embedded.LATEST.js"></script>
    ```

* If you'd prefer to use a specific version, you can specify that version in the URL:

    ```html
    <script type="text/javascript" src="https://s3.amazonaws.com/cdn.hellosign.com/public/js/hellosign-embedded.0.1.6.min.js"></script>
    ```

    We highly recommend using the latest version of the library, so that you'll receive security and feature updates.


### Building From Source

After cloning this repository, run the following at the root of the project :

```bash
$ npm run setup
$ npm run build
```

This will set up the project and build both the minified and the development versions of the hellosign-embedded library.

You can find the compiled scripts in the project's `dist` directory (gitignored). These libraries can be referenced from a `<script>` tag in your HTML.

## Usage

Basic usage of hellosign-embedded requires initializing the library, then using the `HelloSign.open()` function to open a URL you've fetched through the [HelloSign API](https://www.hellosign.com/api) in an iFrame on your page.

First you'll need an API key. If you don't have one yet, head on over to the [API settings for your account](https://www.hellosign.com/home/myAccount#api) on HelloSign and create an API App.

Initialize on the page using your HelloSign API client ID:

```js
HelloSign.init('YOUR_API_CLIENT_ID');
```

Make a call using your [favorite client library](https://www.hellosign.com/api/libraries) on our API for an embedded signature request or template, then use the signer URL you get back with hellosign-embedded:

```js
HelloSign.open({
  url: 'SIGNATURE_REQUEST_URL',
});
```

Visit the [Embedded Signing Walkthrough](https://app.hellosign.com/api/embeddedSigningWalkthrough) for more information and examples.


## Demo

There is a demo app available in this repo, useful for both development against this repo, and examining how a simple integration can work.

After you clone this repo, you can start the test app by first running the setup script:

```sh
$ npm run setup
```

Followed by:

```sh
$ npm run demo
```

When running, any changes to `src` will be tracked, and the file that the demo site uses will be rebuilt on the fly.

You'll need an API Key and Client ID for HelloSign's API to use this demo application.


## Extras

### TypeScript
Bindings for TypeScript have been lovingly added to the [DefinitelyTyped repo](https://github.com/DefinitelyTyped/DefinitelyTyped) for hellosign-embedded.
