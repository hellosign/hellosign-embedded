# Hellosign Embedded

> Embed [HelloSign][external_hellosign] signature requests and templates from within your web application.

[![Npm version][badge_npm-version]][external_npm]
[![Npm downloads][badge_npm-downloads]][external_npm]
[![David][badge_david]][external_david]
[![Travis][badge_travis]][external_travis]

## Install

```
$ npm install hellosign-embedded
```


## Demo

```js
import HelloSign from 'hellosign-embedded';

const client = new HelloSign({
  clientId: 'Your API client ID'
});

client.open(signUrl);
```


## Resources

* [API Documentation][wiki_api-documentation]
* [Walkthroughs][external_walkthroughs]
* [FAQs][wiki_faq]
* [Changelog][wiki_changelog]
* [License (ISC)][license]

<br/>
<br/>
<hr/>

&copy; 2018 [HelloSign][external_hellosign]. All rights reserved.






[license]: ./LICENSE.md

[badge_npm-version]: https://img.shields.io/npm/v/hellosign-embedded.svg
[badge_npm-downloads]: https://img.shields.io/npm/dm/hellosign-embedded.svg
[badge_david]: https://img.shields.io/david/HelloFax/hellosign-embedded.svg
[badge_travis]: https://img.shields.io/travis/HelloFax/hellosign-embedded/master.svg

[wiki_home]: https://github.com/HelloFax/hellosign-embedded/wiki
[wiki_api-documentation]: https://github.com/HelloFax/hellosign-embedded/wiki/API-documentation
[wiki_faq]: https://github.com/HelloFax/hellosign-embedded/wiki/FAQs
[wiki_changelog]: https://github.com/HelloFax/hellosign-embedded/wiki/Changelog

[external_david]: https://david-dm.org/HelloFax/hellosign-embedded
[external_hellosign]: https://hellosign.com
[external_npm]: https://npmjs.org/package/hellosign-embedded
[external_travis]: https://travis-ci.org/HelloFax/hellosign-embedded.svg?branch=master
[external_walkthroughs]: https://app.hellosign.com/api/embeddedSigningWalkthrough
