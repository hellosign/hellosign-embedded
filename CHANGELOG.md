# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.1.2"></a>
## [2.1.2](https://github.com/hellosign/hellosign-embedded/compare/v2.0.1...v2.1.2) (2019-01-22)


### Bug Fixes

* Change close button hover color to something more neutral ([8fd0386](https://github.com/hellosign/hellosign-embedded/commit/8fd0386))
* Only export development version when importing via module ([c6a63cf](https://github.com/hellosign/hellosign-embedded/commit/c6a63cf)), closes [#93](https://github.com/hellosign/hellosign-embedded/issues/93) [#95](https://github.com/hellosign/hellosign-embedded/issues/95)


<a name="2.1.1"></a>
## [2.1.1](https://github.com/hellosign/hellosign-embedded/compare/v2.0.1...v2.1.1) (2018-11-20)


### Bug Fixes

* Fix URL polyfill ([0cde022](https://github.com/hellosign/hellosign-embedded/commit/0cde022))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/hellosign/hellosign-embedded/compare/v2.0.1...v2.1.0) (2018-11-19)


### Features

* **DEV-4831:** Adds close confirmation dialog message when `beforeunload` fires. ([4ac9cca](https://github.com/hellosign/hellosign-embedded/commit/4ac9cca))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/hellosign/hellosign-embedded/compare/v2.0.0...v2.0.1) (2018-10-17)

* Add close button to Embedded signing workflow ([176cfb8](https://github.com/hellosign/hellosign-embedded/commit/176cfb8))
* Allow "Save" to be used as final button text ([ab9456d](https://github.com/hellosign/hellosign-embedded/commit/ab9456d))
* Automatically apply UX version 2 to all requests ([8542a37](https://github.com/hellosign/hellosign-embedded/commit/8542a37))
* README Changelog link ([1749ed2](https://github.com/hellosign/hellosign-embedded/commit/1749ed2))


<a name="2.0.0"></a>
# [2.0.0](https://github.com/hellosign/hellosign-embedded/compare/v1.6.0...v2.0.0) (2018-10-11)


* **DEV-4322:** HelloSign Embedded v2 (#80) ([2702594](https://github.com/hellosign/hellosign-embedded/commit/2702594)), closes [#80](https://github.com/hellosign/hellosign-embedded/issues/80) [#27](https://github.com/hellosign/hellosign-embedded/issues/27) [#31](https://github.com/hellosign/hellosign-embedded/issues/31) [#36](https://github.com/hellosign/hellosign-embedded/issues/36) [#40](https://github.com/hellosign/hellosign-embedded/issues/40) [#47](https://github.com/hellosign/hellosign-embedded/issues/47) [#57](https://github.com/hellosign/hellosign-embedded/issues/57) [#75](https://github.com/hellosign/hellosign-embedded/issues/75)


### BREAKING CHANGES

* `HelloSign` is now a class, not a singleton.
* `HelloSign.VERSION` is now `HelloSign.version`
* The `url` option is now the first argument of `open()`
* `open()` options are now defined as the second argument
* `userCulture` option is now named `locale`
* `healthCheckoutTimeoutMs` option is now named `timeout`
* `init()` has been deprecated
* `messageListener` option has been removed
* `uxVersion` option has been removed
* `height` option has been removed
* `HelloSign.CULTURES` is now `HelloSign.locales`
* `requester` option is now named `requestingEmail`
