# Hellosign Embedded

> Embed [HelloSign][external_hellosign] signature requests and templates from within your web application.

[![Npm version][badge_npm-version]][external_npm]
[![Npm downloads][badge_npm-downloads]][external_npm]
[![Travis][badge_travis]][external_travis]
[![David][badge_david]][external_david]

<br/>

🎉 **HelloSign Embedded v2** is now available! Please check the [migration guide][wiki_migration-guide] if you need help upgrading from v1 to v2.

## Install

```
$ npm install hellosign-embedded
```


## Demo

```js
import HelloSign from 'hellosign-embedded';

const client = new HelloSign();

client.open(signUrl, {
  clientId: 'Your API client ID'
});
```


## Resources

* [Quickstart][wiki_quickstart]
* [API Documentation][wiki_api-documentation]
* [Walkthroughs][external_walkthroughs]
* [Changelog][wiki_changelog]
* [Demo][external_demo]

<br/>
<br/>
<hr/>

&copy; 2018 [HelloSign][external_hellosign]. All rights reserved.






[license]: ./LICENSE.md

[badge_npm-version]: https://img.shields.io/npm/v/hellosign-embedded.svg
[badge_npm-downloads]: https://img.shields.io/npm/dm/hellosign-embedded.svg
[badge_david]: https://img.shields.io/david/hellosign/hellosign-embedded.svg
[badge_travis]: https://img.shields.io/travis/hellosign/hellosign-embedded/master.svg

[wiki_home]: https://github.com/hellosign/hellosign-embedded/wiki
[wiki_api-documentation]: https://github.com/hellosign/hellosign-embedded/wiki/API-Documentation-%28v2%29
[wiki_changelog]: https://github.com/hellosign/hellosign-embedded/wiki/Changelog
[wiki_migration-guide]: https://github.com/hellosign/hellosign-embedded/wiki/Migration-Guide-(v1-to-v2)
[wiki_quickstart]: https://github.com/hellosign/hellosign-embedded/wiki/Quickstart

[external_david]: https://david-dm.org/hellosign/hellosign-embedded
[external_demo]: https://github.com/hellosign/hellosign-embedded-demo
[external_hellosign]: https://hellosign.com
[external_npm]: https://npmjs.org/package/hellosign-embedded
[external_travis]: https://travis-ci.org/hellosign/hellosign-embedded.svg?branch=master
[external_walkthroughs]: https://app.hellosign.com/api/embeddedSigningWalkthrough
