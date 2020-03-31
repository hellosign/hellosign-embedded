# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.7.2](https://github.com/hellosign/hellosign-embedded/compare/v2.7.1...v2.7.2) (2020-03-31)


### Bug Fixes

* **DEV-8771:** Fix click handler ([5062270](https://github.com/hellosign/hellosign-embedded/commit/5062270)), closes [#128](https://github.com/hellosign/hellosign-embedded/issues/128)
* **DEV-8775:** Makes UMD importable in Node ([5c71512](https://github.com/hellosign/hellosign-embedded/commit/5c71512)), closes [#129](https://github.com/hellosign/hellosign-embedded/issues/129) [#107](https://github.com/hellosign/hellosign-embedded/issues/107)



<a name="2.3.0"></a>
# [2.3.0](https://github.com/hellosign/hellosign-embedded/compare/v2.2.0...v2.3.0) (2019-02-27)


### Bug Fixes

* **DEV-5419:** Close button alignment on IE11 ([844b8a3](https://github.com/hellosign/hellosign-embedded/commit/844b8a3)), closes [#105](https://github.com/hellosign/hellosign-embedded/issues/105)


### Features

* Use mobile layout for mobile devices in landscape orientation ([7f736a8](https://github.com/hellosign/hellosign-embedded/commit/7f736a8))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/hellosign/hellosign-embedded/compare/v2.1.3...v2.2.0) (2019-01-25)


### Bug Fixes

* Transform modules via Babel to CommonJS instead of UMD ([48d560a](https://github.com/hellosign/hellosign-embedded/commit/48d560a))


### Features

* add `testMode` as an alias to `skipDomainVerification` ([6d5178b](https://github.com/hellosign/hellosign-embedded/commit/6d5178b))



<a name="2.1.3"></a>
## [2.1.3](https://github.com/hellosign/hellosign-embedded/compare/v2.1.2...v2.1.3) (2019-01-24)


### Bug Fixes

* Transpile node modules ([4f19db5](https://github.com/hellosign/hellosign-embedded/commit/4f19db5)), closes [#99](https://github.com/hellosign/hellosign-embedded/issues/99)



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
