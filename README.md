# hellosign-embedded [![Build Status](https://travis-ci.org/HelloFax/hellosign-embedded.svg?branch=master)](https://travis-ci.org/HelloFax/hellosign-embedded)

**Welcome!**

HelloSign Embedded allows you to embed HelloSign signature requests and templates from within your web application.

For more information, review our [API documentation](https://www.hellosign.com/api/documentation).

**Contents**

* [Installation](#installation)
* [Usage](#usage)
* [Documentation](#documentation)
  * [`init()`](#init)
  * [`open()`](#open)
  * [`close()`](#close)
* [Demo](#demo)
* [Other](#other)
  * [TypeScript](#typescript)


***


## Installation

## Installation

**npm**

```
$ npm install hellosign-embedded
```

**CDN links**

HelloSign is also available over a CDN.

```html
<script crossorigin src="https://unpkg.com/hellosign-embedded@1/umd/embedded.development.js"></script>
```

The version above is only meant for development, and is not suitable for production. A minified and optimized production version of HelloSign Embedded is available at:

```html
<script crossorigin src="https://unpkg.com/hellosign-embedded@1/umd/embedded.production.min.js"></script>
```

To load a specific version of `hellosign-embedded`, replace `1` with the version number, tag, or semver range. More information about how to use unpkg can be found [here](https://unpkg.com/).


## Usage

1. First you'll need an API key and Client ID. If you haven't done so yet, head on over to the [API settings for your account](https://www.hellosign.com/home/myAccount#api) on HelloSign and create an API App.

2. Import the library into your frontend app. The below example is using ES6 module imports.

    ```js
    import hellosign from 'hellosign-embedded';
    ```

    If you have installed the library from our global CDN, it will be available at `window.HelloSign`.

    ```js
    const hellosign = window.HelloSign;
    ```

3. Initialize the HelloSign Embedded client with your API app's client ID.

    ```js
    const CLIENT_ID = '0123456789abcdef0123456789abcdef';

    hellosign.init(CLIENT_ID);
    ```

4. Use your [HelloSign SDK of choice](https://app.hellosign.com/api/libraries#Official) to create an embedded signature request and get the signing URL. An example of how this is done using the NodeJS API can be found in the demo in this repository.

5. Then, open the signature request.

    ```js
    hellosign.open({
      url: signUrlFromSdk,
      allowCancel: true,
      debug: true,
      skipDomainVerification: true,
      uxVersion: 2
    });
    ```

    A list of available options can be found in the documentation for the `open()` method [below](#open).

More information and examples can be found in the [Embedded Signing Walkthrough](https://app.hellosign.com/api/embeddedSigningWalkthrough) in the official HelloSign API docs.


## API

### init()

**`hellosign.init(clientId)`**

Initializes the HellSign embedded library with the given client id.

**Parameters**

* **clientId** *String*

    Your API app's unique client id.


### open()

**`hellosign.open(options)`**

Opens an embedded signature request in an iFrame with the given options.

**Parameters**

* **`options`** *Object*

    Options to send to the `hellosign.open()` method.

    * `url` *String* (required)

        The signature request URL to open in the embedded iFrame.

    * `uxVersion` *Number* (required)

        An integer representing the version of the embedded signing UX to display to users, where `1` is the legacy UX and `2` is the responsive UX. It is currently required that you specify `uxVersion: 2`. This option is in the process of being phased out, but is required in the interim.


    * `requester` *String* (required*)

        The email of the individual issuing the signature request. This option is **required** only for "Me and Others" signature requests.

    * `redirectUrl` *String*

        A URL pointing to where to redirect to after the embedded signature request has been completed by the user.

    * `allowCancel` *Boolean*

        A boolean indicating whether or not a "Cancel" button is displayed to the user. Defaults to `true`.

    * `messageListener` *Function*

        A function which is called when window messages are received from the embedded iFrame. See [`window.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). The callback passes the following as arguments:

        * `message` *Object*
          * `message.event` *String* - The event that was sent from the embedded iFrame. A list of possible message events can be found [here](https://app.hellosign.com/api/embeddedSigningWalkthrough#EmbeddedSigningNotes).

    * `userCulture` *String*

        The code for the language/culture to use in the embedded request. Use `hellosign.CULTURES.supportedCultures` to view a list of supported culture codes.

    * `debug` *Boolean*

        Enable debugging statement in the console. Defaults to `false`.

    * `skipDomainVerification` *Boolean*

        Skip domain verification if and only if the signature request was created with `test_mode=1`. Defaults to `false`.

    * `container` *HTMLElement*

        An HTML element in the DOM which the embedded signature request iFrame will be appended to. Defaults to `document.body`.

    * `height` *Number*

        The height of the embedded signature request iFrame in pixels, when a specific container is specified. Minimum height allowed is `480`. Defaults to `900`.

    * `healthCheckTimeoutMs` *Number*

        An integer representing the number of milliseconds to wait for a response from the embedded signature request iFrame. If there is no response in that time, the iFrame will be closed automatically. `15000` is a recommended timeout. If this option is not specified, the embedded signature request will not close if idle.

    * `hideHeader` *Boolean*

        A boolean indicating whether or not to hide the signature request header. Only customers with embedded branding enabled are able to use this option. Defaults to `false`.

    * `whiteLabelingOptions` *Object*

        An object used to customize the signer experience for premium users with white-labeling capabilities.


### close()

**`hellosign.close()`**

Closes the embedded signature request.


## Demo

There is a demo app available in this repository which is useful for examining how a simple HelloSign Embedded integration can work. To get it up and running, perform the following:

1. Clone this repo.

    ```
    $ git clone git@github.com:HelloFax/hellosign-embedded.git
    ```

2. Run the setup script.

    ```
    $ npm run setup
    ```

3. Start the demo.

    ```
    $ npm run demo
    ```

4. If all has gone well, you should now be able to access the demo at [http://localhost:3000](http://localhost:3000).

In order to test out the demo, you'll need an API Key and Client ID for HelloSign's API. If you haven't done so yet, head on over to the [API settings for your account](https://www.hellosign.com/home/myAccount#api) on HelloSign and create an API App.


## Other

### TypeScript

TypeScript bindings for HelloSign Embedded are available in the [DefinitelyTyped repo](https://github.com/DefinitelyTyped/DefinitelyTyped).


<br/>
<br/>
<hr/>

<small>Copyright &copy; 2018 [HelloSign](https://hellosign.com/). All rights reserved. [Contact us](mailto:api@hellosign.com).</small>
