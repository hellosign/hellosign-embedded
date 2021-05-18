# HelloSign Embedded

> Embed [HelloSign][external_hellosign] signature requests and templates from within your web application.

[![Npm version][badge_npm-version]][external_npm]
[![Npm downloads][badge_npm-downloads]][external_npm]
[![Travis][badge_travis]][external_travis]
[![David][badge_david]][external_david]

<br/>

## Usage

> The instructions below are for HelloSign Embedded v2. We recommend using it instead of v1 for new projects. Please check the [migration guide][wiki_migration-guide] if you need help upgrading from v1 to v2.

Start by installing the HelloSign Embedded library from [npm](https://npmjs.com).

```bash
npm install hellosign-embedded
```

In your frontend app, import `hellosign-embedded` and instantiate a new client with your API app's client ID.

```js
import HelloSign from 'hellosign-embedded';

// Create the HelloSign Embedded instance.
// Only do this once!
const client = new HelloSign({
  clientId: 'Your client ID'
});
```

When you're ready to launch HelloSign Embedded, simply call `open()` on the client with your signature request's signing URL.

```js
function launchHelloSign(url) {
  client.open(url);
}

launchHelloSign(url);
```

For a more detailed and in-depth walkthrough, check the [QuickStart guide][wiki_quickstart] on the Wiki. For more information on how to use HelloSign Embedded, visit the [API Documentation][wiki_api-documentation].


## Support

If you have any questions or issues with HelloSign Embedded or our API, please contact [apisupport@hellosign.com](mailto:apisupport@hellosign.com?subject=Help%20Wwith%20HelloSign%20Embedded). This repository is not reguarly monitored for issues.


## Resources

* [Quickstart][wiki_quickstart]
* [API Documentation][wiki_api-documentation]
* [Changelog][changelog]
* [Demo][external_demo]

<br/>
<br/>
<hr/>

&copy; 2019 [HelloSign][external_hellosign]. All rights reserved.






[changelog]: https://github.com/hellosign/hellosign-embedded/blob/master/CHANGELOG.md

[badge_npm-version]: https://img.shields.io/npm/v/hellosign-embedded.svg
[badge_npm-downloads]: https://img.shields.io/npm/dm/hellosign-embedded.svg
[badge_david]: https://img.shields.io/david/hellosign/hellosign-embedded.svg
[badge_travis]: https://img.shields.io/travis/hellosign/hellosign-embedded/master.svg

[wiki_home]: https://github.com/hellosign/hellosign-embedded/wiki
[wiki_api-documentation]: https://github.com/hellosign/hellosign-embedded/wiki/API-Documentation-(v2)
[wiki_migration-guide]: https://github.com/hellosign/hellosign-embedded/wiki/Migration-Guide-(v1-to-v2)
[wiki_quickstart]: https://github.com/hellosign/hellosign-embedded/wiki/Quickstart

[external_david]: https://david-dm.org/hellosign/hellosign-embedded
[external_demo]: https://app.hellosign.com/api/embeddedTest
[external_hellosign]: https://hellosign.com
[external_npm]: https://npmjs.org/package/hellosign-embedded
[external_travis]: https://travis-ci.org/hellosign/hellosign-embedded?branch=master
