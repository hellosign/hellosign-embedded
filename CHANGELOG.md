# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://github.com/hellosign/hellosign-embedded/compare/v1.6.0...v2.0.0) (2018-10-11)


* [DEV-4322] HelloSign Embedded v2 (#80) ([2702594](https://github.com/hellosign/hellosign-embedded/commit/2702594)), closes [#80](https://github.com/hellosign/hellosign-embedded/issues/80) [#27](https://github.com/hellosign/hellosign-embedded/issues/27) [#31](https://github.com/hellosign/hellosign-embedded/issues/31) [#36](https://github.com/hellosign/hellosign-embedded/issues/36) [#40](https://github.com/hellosign/hellosign-embedded/issues/40) [#47](https://github.com/hellosign/hellosign-embedded/issues/47) [#57](https://github.com/hellosign/hellosign-embedded/issues/57) [#75](https://github.com/hellosign/hellosign-embedded/issues/75)


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
