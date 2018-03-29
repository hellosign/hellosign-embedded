/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../lib/embedded.umd.js":
/*!******************************!*\
  !*** ../lib/embedded.umd.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = "./src/embedded.js");
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./package.json":
      /*!**********************!*\
        !*** ./package.json ***!
        \**********************/

      /*! exports provided: name, version, description, homepage, main, license, scripts, repository, author, devDependencies, default */

      /***/
      function packageJson(module) {
        module.exports = {
          "name": "hellosign-embedded",
          "version": "1.2.11",
          "description": "A library which allows you to embed HelloSign signature requests and templates from within an application.",
          "homepage": "https://github.com/HelloFax/hellosign-embedded",
          "main": "lib/embedded.umd.js",
          "license": "ISC",
          "scripts": {
            "build": "webpack",
            "demo": "(cd demo && npm start)",
            "prepublish": "npm run build",
            "prerelease": "node scripts/pre-release.js",
            "setup": "npm install && (cd demo && npm run setup)",
            "test": "mocha test"
          },
          "repository": {
            "type": "git",
            "url": "git+https://github.com/HelloFax/hellosign-embedded.git"
          },
          "author": {
            "name": "HelloSign",
            "email": "api@hellosign.com",
            "url": "https://hellosign.com"
          },
          "devDependencies": {
            "@babel/core": "^7.0.0-beta.42",
            "@babel/plugin-proposal-object-rest-spread": "^7.0.0-beta.42",
            "@babel/plugin-transform-object-assign": "^7.0.0-beta.42",
            "@babel/preset-env": "^7.0.0-beta.42",
            "babel-loader": "^8.0.0-beta.2",
            "chai": "^4.1.2",
            "jsdom": "^11.6.2",
            "jsdom-global": "^3.0.2",
            "mocha": "^5.0.4",
            "webpack": "^4.2.0",
            "webpack-cli": "^2.0.13"
          }
        };
        /***/
      },

      /***/
      "./src/embedded.js":
      /*!*************************!*\
        !*** ./src/embedded.js ***!
        \*************************/

      /*! no static exports found */

      /***/
      function srcEmbeddedJs(module, exports, __webpack_require__) {
        "use strict";

        function _extends() {
          _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];

              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }

            return target;
          };

          return _extends.apply(this, arguments);
        }

        function _typeof(obj) {
          if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
            _typeof = function _typeof(obj) {
              return _typeof2(obj);
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
            };
          }

          return _typeof(obj);
        }
        /**
         * HelloSign JS library for embeddables
         * Copyright (c) 2016 HelloSign
         *
         * XWM - Cross-window messaging inspired by Ben Alman's
         * jQuery postMessage plugin:
         * http://benalman.com/projects/jquery-postmessage-plugin/
         *
         *    Copyright (c) 2009 "Cowboy" Ben Alman
         *    Dual licensed under the MIT and GPL licenses.
         *    http://benalman.com/about/license/
         */


        (function () {
          function getUrlVars() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
              vars[key] = value;
            });
            return vars;
          }

          var urlVars = getUrlVars();
          window.isDebugEnabled = urlVars.debug ? urlVars.debug === 'true' : false;
          var userAgent = navigator.userAgent.toLowerCase();
          var XWM = {
            cacheBust: 0,
            lastHash: 0,
            intervalId: 0,
            rmCallback: null,
            defaultDelay: 500,
            hasPostMessage: window['postMessage'] !== undefined,
            _serializeMessageValue: function _serializeMessageValue(value) {
              if (_typeof(value) === 'object') {
                value = JSON.stringify(value);
              }

              return encodeURIComponent(value);
            },
            send: function send(message, targetUrl, target) {
              l('XWM Send: Sending Message.');
              l('  targetUrl: ' + targetUrl);
              var self = XWM;

              if (!targetUrl) {
                return;
              } // Serialize the message into a string


              if (typeof message != 'string') {
                var parts = [];

                for (var k in message) {
                  parts.push(k + '=' + this._serializeMessageValue(message[k]));
                }

                message = parts.join('&');
              }

              l('  message: ' + message);

              if (self.hasPostMessage) {
                // The browser supports window.postMessage, so call it with a targetOrigin
                // set appropriately, based on the targetUrl parameter.
                target = target || parent;
                target['postMessage'](message, targetUrl.replace(/([^:]+:\/\/[^\/]+).*/, '$1'));
              } else if (targetUrl) {
                // The browser does not support window.postMessage, so set the location
                // of the target to targetUrl#message. A bit ugly, but it works! A cache
                // bust parameter is added to ensure that repeat messages trigger the
                // callback.
                var t = new Date().getTime();
                var c = ++self.cacheBust;
                var targetFrame = document.getElementById(target); // target is the window id in this case
                // targetWindow.location = targetUrl.replace( /#.*$/, '' ) + '#' + t + c + '&' + message;

                if (targetFrame) {
                  targetFrame.setAttribute('src', targetUrl.replace(/#.*$/, '') + '#' + t + c + '&' + message);
                } else {
                  parent.location = targetUrl.replace(/#.*$/, '') + '#' + t + c + '&' + message;
                }
              }

              l('XWM Send: Message sent.');
            },
            receive: function receive(callback, sourceOrigin, delay) {
              if (typeof callback !== 'function') {
                error('callback must be a function');
              }

              if (typeof sourceOrigin !== 'string') {
                error('sourceOrigin must be a string');
              }

              l('XWM Receive: Initialize receiver.');
              l('  callback: ' + (callback.name ? callback.name : 'Anonymous function'));
              l('  sourceOrigin: ' + sourceOrigin);
              var self = XWM;

              if (self.hasPostMessage) {
                // Since the browser supports window.postMessage, the callback will be
                // bound to the actual event associated with window.postMessage.
                if (callback) {
                  if (self.rmCallback) {
                    // Unbind previous callback
                    if (window['addEventListener']) {
                      window['removeEventListener']('message', self.rmCallback, false);
                    } else {
                      //IE8 doesn't support removeEventListener
                      window['detachEvent']('onmessage', self.rmCallback);
                    }
                  } // Bind the callback. A reference to the callback is stored for ease of unbinding


                  self.rmCallback = function (evt) {
                    // Ensure the event is originating from the source domain, accounting
                    // for subdomains (evt.origin must end with a dot and the sourceOrigin string).
                    if (evt.origin !== sourceOrigin) {
                      var subdomainTest = new RegExp('[\/|\.]' + sourceOrigin + '$', 'i');

                      if (!subdomainTest.test(evt.origin)) {
                        return false;
                      }
                    }

                    l('XWM Receive: Message received!');
                    l('  data: ' + evt.data);
                    l('  sourceOrigin: ' + sourceOrigin);
                    callback(evt);
                  };
                }

                if (window['addEventListener']) {
                  window['addEventListener']('message', self.rmCallback, false);
                } else {
                  //IE8 doesn't support addEventListener
                  window['attachEvent']('onmessage', self.rmCallback);
                }
              } else {
                // Since the browser sucks, a polling loop will be started, and the
                // callback will be called whenever the location.hash changes.
                l('XWM Receive: Starting poll...');

                if (self.intervalId) {
                  clearInterval(self.intervalId);
                  self.intervalId = null;
                }

                if (typeof delay === 'undefined') {
                  delay = self.defaultDelay;
                }

                if (callback) {
                  delay = delay !== undefined ? delay : 200;
                  self.intervalId = setInterval(function () {
                    var hash = document.location.hash;
                    var re = /^#?\d+&/;

                    if (hash !== self.lastHash && re.test(hash)) {
                      self.lastHash = hash;
                      var data = hash.replace(re, '');
                      l('XWM Receive: Message received!');
                      l('  data: ' + data);
                      l('  sourceOrigin: ' + sourceOrigin);
                      callback({
                        data: data
                      });
                    }
                  }, delay);
                }
              }
            }
          };
          /**
           * Helper functions to manage the "viewport" meta tag.
           * This allows us to dynamically control the display
           * and placement of the iFrame in a mobile context.
           */

          var MetaTagHelper = {
            savedViewportContent: '',
            set: function set() {
              l('Optimizing viewport meta tag for mobile'); // Save off the current viewport meta tag content

              this.savedViewportContent = this._getElement().getAttribute('content'); // Add mobile-optimized settings

              var contentPairs = this._explodePairs(this.savedViewportContent);

              contentPairs['width'] = 'device-width';
              contentPairs['maximum-scale'] = '1.0';
              contentPairs['user-scalable'] = 'no';

              this._getElement().setAttribute('content', this._joinPairs(contentPairs));
            },
            restore: function restore() {
              l('Restoring viewport meta tag');

              this._getElement().setAttribute('content', this.savedViewportContent);
            },
            _getElement: function _getElement() {
              var el = document.querySelector('meta[name=viewport]');

              if (!el) {
                el = document.createElement('meta');
                el.setAttribute('name', 'viewport');
                el.setAttribute('content', 'initial-scale=1.0');
                document.head.appendChild(el);
              }

              return el;
            },
            _joinPairs: function _joinPairs(keyed) {
              var pairs = [];

              for (var key in keyed) {
                pairs.push(key + '=' + keyed[key]);
              }

              return pairs.join(', ');
            },
            _explodePairs: function _explodePairs(metaString) {
              var pairs = metaString.split(',');
              var obj = {};
              pairs.forEach(function (pair) {
                pair = pair.trim();
                var kv = pair.split('=');
                obj[kv[0]] = kv[1];
              });
              return obj;
            }
          };
          var HelloSign = {
            VERSION: __webpack_require__(
            /*! ../package.json */
            "./package.json").version,
            DEFAULT_UX_VERSION: 1,
            IFRAME_WIDTH_RATIO: 0.8,
            DEFAULT_WIDTH: 900,
            DEFAULT_HEIGHT: 900,
            MIN_HEIGHT: 480,
            wrapper: null,
            iframe: null,
            overlay: null,
            cancelButton: null,
            clientId: null,
            isOldIE: /msie (8|7|6|5)/gi.test(userAgent),
            isFF: /firefox/gi.test(userAgent),
            isOpera: /opera/gi.test(userAgent),
            isMobile: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent),
            baseUrl: 'https://www.hellosign.com',
            cdnBaseUrl: 'https://s3.amazonaws.com/cdn.hellofax.com',
            XWM: XWM,
            CULTURES: {
              EN_US: 'en_US',
              FR_FR: 'fr_FR',
              DE_DE: 'de_DE',
              SV_SE: 'sv_SE',
              ZH_CN: 'zh_CN',
              DA_DK: 'da_DK',
              NL_NL: 'nl_NL',
              ES_ES: 'es_ES',
              ES_MX: 'es_MX',
              PT_BR: 'pt_BR',
              init: function init() {
                this.supportedCultures = [this.EN_US, this.FR_FR, this.DE_DE, this.SV_SE, this.ZH_CN, this.DA_DK, this.NL_NL, this.ES_ES, this.ES_MX, this.PT_BR];
                return this;
              }
            }.init(),
            isDebugEnabled: window.isDebugEnabled,
            // PUBLIC EVENTS
            // ---------------------------
            // - error                          An error occurred in the iFrame
            // - signature_request_signed       The signature request was signed
            // - signature_request_canceled     The user closed the iFrame before completing
            // THESE EVENT CODES ARE ACTUALLY USED IN TWO PLACES
            // IF YOU CHANGE THEM MAKE SURE TO CHANGE THE OTHERS
            // IN HFACTIONS.PHP TO STAY CONSISTENT.
            EVENT_SIGNED: 'signature_request_signed',
            EVENT_DECLINED: 'signature_request_declined',
            EVENT_CANCELED: 'signature_request_canceled',
            EVENT_SENT: 'signature_request_sent',
            EVENT_TEMPLATE_CREATED: 'template_created',
            EVENT_ERROR: 'error',
            //  ----  PUBLIC METHODS  -----------------------------
            init: function init(appClientId) {
              this.clientId = appClientId;
            },
            open: function open(params) {
              var self = this; // PARAMETERS:
              // ----------------------
              // - url                      String. The url to open in the child frame
              // - redirectUrl              String. Where to go after the signature is completed
              // - allowCancel              Boolean. Whether a cancel button should be displayed (default = true)
              // - messageListener          Function. A listener for X-window messages coming from the child frame
              // - userCulture              HelloSign.CULTURE. One of the HelloSign.CULTURES.supportedCultures (default = HelloSign.CULTURES.EN_US)
              // - debug                    Boolean. When true, debugging statements will be written to the console (default = false)
              // - skipDomainVerification   Boolean. When true, domain verification step will be skipped if and only if the Signature Request was created with test_mode=1 (default = false)
              // - container                DOM element that will contain the iframe on the page (default = document.body)
              // - height                   Height of the iFrame (only applicable when a container is specified)
              // - hideHeader               Boolean. When true, the header will be hidden (default = false). This is only functional for customers with embedded branding enabled.
              // - uxVersion                Integer. The version of the embedded user experience to display to signers (1 = legacy, 2 = responsive). This option is only honored if your account has accessed the API prior to Nov 14, 2015.
              // - requester                String. The email of the person issuing a signature request. Required for allowing 'Me + Others' requests
              // - whiteLabelingOptions     Object. An associative array to be used to customize the app's signer page
              // - healthCheckTimeoutMs     Integer. The number of milliseconds to wait for a response from the iframe. If no response after that time the iframe will be closed. 15000 milliseconds is recommended.

              var redirectUrl = this.safeUrl(params['redirectUrl']);
              var messageListener = params['messageListener'];
              var frameUrl = this.safeUrl(params['url']);
              this.uxVersion = params['uxVersion'] || this.DEFAULT_UX_VERSION;
              this.isDefaultUX = this.uxVersion === this.DEFAULT_UX_VERSION;
              this.healthCheckTimeoutMs = params['healthCheckTimeoutMs'];

              if (this.uxVersion) {
                frameUrl += (frameUrl.indexOf('?') > 0 ? '&' : '?') + 'ux_version=' + this.uxVersion;
              }

              if (typeof params['debug'] !== 'undefined') {
                this.isDebugEnabled = params['debug'] === true || params['debug'] == 'true';
              }

              if (typeof params['skipDomainVerification'] !== 'undefined') {
                this.skipDomainVerification = params['skipDomainVerification'] === true || params['skipDomainVerification'] == 'true';
              }

              if (typeof params['hideHeader'] !== 'undefined') {
                this.hideHeader = params['hideHeader'] === true || params['hideHeader'] == 'true';
              }

              if (_typeof(params['whiteLabelingOptions']) === 'object') {
                this.whiteLabelingOptions = JSON.stringify(params['whiteLabelingOptions']);
                this.whiteLabelingOptions = this.whiteLabelingOptions.replace(/#/g, '');
              } else if (typeof params['whiteLabelingOptions'] !== 'undefined') {
                l("Invalid white labeling options supplied, option will be ignored: " + params['whiteLabelingOptions']);
              }

              this.isInPage = params['container'] !== undefined;
              this.container = params['container'] || document.body; // Validate parameters

              if (this.isInPage && params['height'] !== undefined && (isNaN(parseInt(params['height'], 10)) || params['height'] <= 0)) {
                throw new Error('Invalid iFrame height (' + params['height'] + ') it must be a valid positive number');
              }

              l('Opening HelloSign embedded iFrame with the following params:');
              l(params);

              if (!frameUrl) {
                throw new Error('No url specified');
              }

              var userCulture = typeof params['userCulture'] === 'undefined' ? this.CULTURES.EN_US : params['userCulture'];

              if (this.inArray(userCulture, this.CULTURES.supportedCultures) === -1) {
                throw new Error('Invalid userCulture specified: ' + userCulture);
              }

              frameUrl += frameUrl.indexOf('?') > 0 ? '&' : '?';

              if (redirectUrl) {
                frameUrl += 'redirect_url=' + encodeURIComponent(redirectUrl) + '&';
              }

              frameUrl += 'parent_url=' + encodeURIComponent(document.location.href.replace(/\?.*/, '')) + '&';
              frameUrl += this.skipDomainVerification === true ? 'skip_domain_verification=1&' : '';
              frameUrl += 'client_id=' + this.clientId + '&';
              frameUrl += typeof params['requester'] !== 'undefined' ? 'requester=' + encodeURIComponent(params['requester']) + '&' : '';
              frameUrl += 'user_culture=' + userCulture;

              if (this.isDebugEnabled) {
                frameUrl += '&debug=true';
              }

              if (this.hideHeader) {
                frameUrl += '&hideHeader=true';
              }

              if (this.whiteLabelingOptions) {
                frameUrl += '&white_labeling_options=' + encodeURI(this.whiteLabelingOptions);
              }

              frameUrl += '&js_version=' + this.VERSION;
              var origin = frameUrl.replace(/([^:]+:\/\/[^\/]+).*/, '$1');
              var windowDims = this.getWindowDimensions(params['height']);
              var styles = {
                'overlay': {
                  'position': 'fixed',
                  'top': '0px',
                  'left': '0px',
                  'bottom': '0px',
                  'right': '0px',
                  'z-index': 9997,
                  'display': 'block',
                  'background-color': '#222',
                  'opacity': 0.4,
                  '-khtml-opacity': 0.4,
                  '-moz-opacity': 0.4,
                  'filter': 'alpha(opacity=40)',
                  '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=40)'
                },
                'wrapper': this.isInPage ? {} : {
                  'position': 'absolute',
                  'top': windowDims.top,
                  'left': windowDims.left,
                  'z-index': 9998
                },
                'iframe': this.isInPage ? {} : {
                  'border': '1px solid #505050',
                  'box-shadow': '0px 2px 18px 2px #666',
                  'background-color': '#FFF',
                  'z-index': 9998
                },
                'cancelButton': {
                  'position': 'absolute',
                  'top': '-13px',
                  'right': '-13px',
                  'width': '30px',
                  'height': '30px',
                  'background-image': 'url(' + this.cdnBaseUrl + '/css/fancybox/fancybox.png)',
                  'background-position': '-40px 0px',
                  'cursor': 'pointer',
                  'z-index': 9999
                }
              };

              var resizeIFrame = function _resizeIFrame() {
                if (self.iframe) {
                  var dims = {};

                  if (self.isMobile) {
                    dims = self.getMobileDimensions();
                  } else {
                    dims = self.getWindowDimensions();
                  }

                  self.wrapper.style['top'] = dims.top;
                  self.wrapper.style['left'] = dims.left;
                  self.wrapper.style['width'] = dims.widthString;
                  self.iframe.style['height'] = dims.heightString;
                  self.iframe.style['width'] = dims.widthString;
                }
              };

              if (this.uxVersion > 1) {
                if (this.isInPage) {
                  // Adjust the iFrame style to fit the in-page container
                  styles['wrapper']['width'] = '100%';
                  styles['wrapper']['height'] = windowDims.heightString;
                  styles['iframe']['width'] = '100%';
                  styles['iframe']['height'] = windowDims.heightString;
                  styles['iframe']['border'] = 'none';
                  styles['iframe']['box-shadow'] = 'none';
                  styles['cancelButton']['display'] = 'none'; // This is an iOS hack.  Apparently iOS ignores widths set
                  // with a non-pixel value, which means iFrames get expanded
                  // to the full width of their content.  Setting a pixel
                  // value and then using `min-width` is the workaround for
                  // this.
                  // See:  http://stackoverflow.com/questions/23083462/how-to-get-an-iframe-to-be-responsive-in-ios-safari

                  if (this.isMobile) {
                    styles['iframe']['width'] = '1px';
                    styles['iframe']['min-width'] = '100%';
                  }
                } else if (this.isMobile) {
                  var mobileDims = this.getMobileDimensions(); // Adjust the iFrame style to fit the whole screen

                  styles['wrapper']['position'] = 'absolute';
                  styles['wrapper']['top'] = '0';
                  styles['wrapper']['left'] = '0';
                  styles['wrapper']['width'] = mobileDims.widthString;
                  styles['wrapper']['height'] = mobileDims.heightString;
                  styles['iframe']['position'] = 'absolute';
                  styles['iframe']['top'] = 0;
                  styles['iframe']['left'] = 0;
                  styles['iframe']['width'] = mobileDims.widthString;
                  styles['iframe']['height'] = mobileDims.heightString;
                  styles['iframe']['border'] = 'none';
                  styles['iframe']['box-shadow'] = 'none';
                  styles['cancelButton']['display'] = 'none';
                }
              } // Build overlay


              if (!this.isInPage) {
                if (!this.overlay) {
                  this.overlay = document.createElement('div');
                  this.overlay.setAttribute('id', 'hsEmbeddedOverlay');
                  document.body.appendChild(this.overlay);
                }

                this.overlay.setAttribute('style', 'display: block;');
              } // Build the wrapper


              if (!this.wrapper) {
                this.wrapper = document.createElement('div');
                this.wrapper.setAttribute('id', 'hsEmbeddedWrapper'); // Hack.  We need this on mobile before we insert the DOM
                // element, otherwise the modal appears above the fold

                if (this.isMobile) {
                  window.scrollTo(0, 0);
                }

                this.container.appendChild(this.wrapper);
              }

              if (!this.isInPage) {
                if (this.isMobile && this.isDefaultUX) {
                  // If this is a mobile device, poll the window dimensions to see
                  // if the zoom scale changes and resize the iFrame. This prevents
                  // the user from zooming and getting into a state where they can't
                  // submit the embedded request
                  var zoomScale = document.body.clientWidth / window.innerWidth;

                  var detectZoom = function _detectZoom() {
                    var newZoomScale = document.body.clientWidth / window.innerWidth;

                    if (zoomScale !== newZoomScale) {
                      zoomScale = newZoomScale;
                      resizeIFrame();
                    }
                  };

                  window.onscroll = detectZoom;
                } else {
                  // When the window is resized, also resize the iframe if necessary
                  // NOTE: Only do this when the iFrame is displayed as a popup, it does not really make sense when it's in-page
                  // Also used for new mobile ux
                  window.onresize = resizeIFrame;
                }
              } // Build the iFrame


              if (!this.iframe) {
                this.iframe = document.createElement('iframe');
                this.iframe.setAttribute('id', 'hsEmbeddedFrame');
                this.wrapper.appendChild(this.iframe);
              }

              this.iframe.setAttribute('src', frameUrl);
              this.iframe.setAttribute('scrolling', 'no'); // This needs to stay as 'no' or else iPads, etc. get broken

              this.iframe.setAttribute('frameborder', '0');

              if (this.isDefaultUX) {
                this.iframe.setAttribute('width', this.DEFAULT_WIDTH);
              }

              this.iframe.setAttribute('height', windowDims.heightRaw); // TODO: Detecting 'embeddedSign' in the frameUrl is a hack. Clean
              // this up once the embedded close button has been implemented for
              // embedded requesting and templates.

              if (frameUrl.indexOf('embeddedSign') === -1 || params['uxVersion'] != null && params['uxVersion'] < 2) {
                if (!this.isInPage && (params['allowCancel'] === true || params['allowCancel'] === undefined) && !this.cancelButton) {
                  this.cancelButton = document.createElement('a');
                  this.cancelButton.setAttribute('id', 'hsEmbeddedCancel');
                  this.cancelButton.setAttribute('href', 'javascript:;');

                  this.cancelButton.onclick = function () {
                    // Close iFrame
                    HelloSign.close(); // Send 'cancel' message

                    if (messageListener) {
                      l('Reporting cancelation');
                      messageListener({
                        'event': HelloSign.EVENT_CANCELED
                      });
                    }
                  };

                  this.wrapper.appendChild(this.cancelButton);
                } else if (!params['allowCancel'] && this.cancelButton) {
                  this.wrapper.removeChild(this.cancelButton);
                }
              } // Add inline styling


              for (var k in styles) {
                var el = this[k];

                if (el) {
                  for (var i in styles[k]) {
                    try {
                      el.style[i] = styles[k][i];
                    } catch (e) {
                      // Ignore - exceptions get thrown when the given style is not supported
                      l(e);
                    }
                  }
                }
              }

              if (this.cancelButton && (this.isFF || this.isOpera)) {
                // Firefox is weird with bg images
                var s = this.cancelButton.getAttribute('style');
                s += s ? '; ' : '';
                s += 'background-image: ' + styles.cancelButton['background-image'] + '; ';
                s += 'background-position: ' + styles.cancelButton['background-position'] + ';';
                this.cancelButton.setAttribute('style', s);
              }

              if (!this.isInPage && (!this.isMobile || this.isDefaultUX)) {
                // Run resizeIFrame to make sure it fits best from the beginning
                resizeIFrame();
              }

              if (this.isMobile && !this.isDefaultUX && window === window.top) {
                // Only set the meta tags for the top window
                MetaTagHelper.set();
              }

              if (this.isMobile && !this.isInPage) {
                this.fixIframe = function () {
                  window.scrollTo(0, 0);
                };

                this.fixIframe();
                window.addEventListener('scroll', this.fixIframe);
              } // Close the iframe if page fails to initialize within 15 seconds


              if (this.healthCheckTimeoutMs) {
                this._healthCheckTimeoutHandle = setTimeout(function () {
                  var message = 'Signer page failed to initialize within ' + self.healthCheckTimeoutMs + ' milliseconds.';
                  self.reportError(message, document.location.href);
                  self.close();
                }, this.healthCheckTimeoutMs);
              } // Start listening for messages from the iFrame


              XWM.receive(function _parentWindowCallback(evt) {
                var source = evt.source || 'hsEmbeddedFrame';

                if (evt.data === 'initialize' && params['uxVersion'] > 1) {
                  if (self.healthCheckTimeoutMs) clearTimeout(self._healthCheckTimeoutHandle); // remove container from payload to prevent circular reference error

                  var payload = _extends({}, params);

                  delete payload.container;
                  XWM.send(JSON.stringify({
                    type: 'embeddedConfig',
                    payload: payload
                  }), evt.origin, source);
                } else if (evt.data == 'close') {
                  // Close iFrame
                  HelloSign.close();

                  if (messageListener && params['uxVersion'] > 1) {
                    messageListener({
                      'event': HelloSign.EVENT_CANCELED
                    });
                  }
                } else if (evt.data == 'decline') {
                  // Close iFrame
                  HelloSign.close();
                  messageListener({
                    'event': HelloSign.EVENT_DECLINED
                  });
                } else if (evt.data == 'user-done') {
                  // Close iFrame
                  HelloSign.close();
                } else if (evt.data.indexOf('hello:') === 0) {
                  // Hello message - Extract token and send it back
                  var parts = evt.data.split(':');
                  var token = parts[1];
                  XWM.send('helloback:' + token, frameUrl, source);
                } else if (messageListener && evt.data) {
                  // Forward to message callback
                  var eventData = {};
                  var p,
                      pairs = evt.data.split('&'); // Recursive helper function to deserialize the event data.

                  var deserializeEventData = function deserializeEventData(str) {
                    var obj = str;

                    try {
                      // Safely parse the string
                      obj = JSON.parse(str);

                      if (_typeof(obj) === 'object') {
                        for (var key in obj) {
                          obj[key] = parseJson(obj[key]);
                        }
                      }
                    } catch (e) {
                      /* ignore */
                    }

                    return obj;
                  };

                  for (var i = 0; i < pairs.length; i++) {
                    p = pairs[i].split('=');

                    if (p.length === 2) {
                      eventData[p[0]] = deserializeEventData(decodeURIComponent(p[1]));
                    }
                  }

                  messageListener(eventData);
                }
              }, origin);
            },
            close: function close() {
              // Reset viewport settings
              if (this.isMobile && !this.isDefaultUX && window === window.top) {
                MetaTagHelper.restore();
              }

              l('Closing HelloSign embedded iFrame'); // Close the child iframe from the parent window

              if (this.iframe) {
                var self = this;

                if (this.cancelButton) {
                  this.wrapper.removeChild(this.cancelButton);
                  this.cancelButton = null;
                }

                this._fadeOutIFrame();
              }

              if (this.isMobile) {
                window.removeEventListener('scroll', this.fixIframe);
              }
            },
            //  ----  PRIVATE METHODS  ----------------------------
            _fadeOutIFrame: function _fadeOutIFrame(currentOpacity) {
              var self = this;

              if (self.iframe) {
                if (!currentOpacity) {
                  currentOpacity = 1.0;
                } else {
                  currentOpacity -= 0.1;
                }

                self.iframe.style.opacity = currentOpacity;
                self.iframe.style.filter = 'alpha(opacity=' + parseInt(currentOpacity * 100, 10) + ')';

                if (currentOpacity <= 0.0) {
                  self.iframe.style.opacity = 0;
                  self.iframe.style.filter = 'alpha(opacity=0)';
                  self.iframe.style.display = 'none';
                  clearTimeout(animationTimer);

                  if (self.overlay) {
                    self.container.removeChild(self.overlay);
                  }

                  self.container.removeChild(self.wrapper);
                  self.wrapper.removeChild(self.iframe);
                  self.overlay = null;
                  self.iframe = null;
                  self.wrapper = null;
                  return false;
                }

                var animationTimer = setTimeout(function (currentOpacity) {
                  return function () {
                    self._fadeOutIFrame(currentOpacity);
                  };
                }(currentOpacity), 10);
              }
            },
            reportError: function reportError(errorMessage, parentUrl) {
              XWM.send({
                'event': HelloSign.EVENT_ERROR,
                'description': errorMessage
              }, parentUrl);
            },
            ensureParentDomain: function ensureParentDomain(domainName, parentUrl, token, skipDomainVerification, callback) {
              // domainName:  Domain to match against the parent window location
              // parentUrl:   Url of the parent window to check (provided to us but not reliable)
              // callback:    Method to call with the result, it should take only one boolean parameter.
              if (window.top == window) {
                // Not in an iFrame, no need to go further
                callback(true);
                return;
              }

              if (typeof token !== 'string') {
                error('Token not supplied by HelloSign. Please contact support.');
                return;
              }

              if (typeof callback !== 'function') {
                error('Callback not supplied by HelloSign. Please contact support.');
                return;
              }

              if (skipDomainVerification === true) {
                var warningMsg = 'Domain verification has been skipped. Before requesting approval for your app, please be sure to test domain verification by setting skipDomainVerification to false.';
                l(warningMsg);
                alert(warningMsg);
                callback(true);
              } else {
                // Starts waiting for the hello back message
                XWM.receive(function _ensureParentDomainCallback(evt) {
                  if (evt.data.indexOf('helloback:') === 0) {
                    var parts = evt.data.split(':');
                    var valid = parts[1] == token;
                    callback(valid);
                  }
                }, domainName);
              } // Send hello message


              XWM.send('hello:' + token, parentUrl);
            },
            getWindowDimensions: function getWindowDimensions(customHeight) {
              var scrollX = getScrollX();
              var scrollY = getScrollY();
              var windowWidth, windowHeight;

              if (this.isOldIE) {
                windowWidth = document.body.clientWidth;
                windowHeight = document.body.clientHeight;
              } else {
                windowWidth = window.innerWidth;
                windowHeight = window.innerHeight;
              }

              var height = this.isInPage && customHeight ? customHeight : Math.max(this.MIN_HEIGHT, windowHeight - 60);
              var width = this.uxVersion > 1 ? Math.min(this.DEFAULT_WIDTH, windowWidth * this.IFRAME_WIDTH_RATIO) : this.DEFAULT_WIDTH;
              return {
                'widthString': width + 'px',
                'heightString': height + 'px',
                'heightRaw': height,
                'scrollX': scrollX,
                'scrollY': scrollY,
                'top': Math.max(0, scrollY + parseInt((windowHeight - height) / 2, 10)) + 'px',
                'left': Math.max(0, parseInt((windowWidth - this.DEFAULT_WIDTH) / 2, 10)) + 'px'
              };
            },
            getMobileDimensions: function getMobileDimensions() {
              var dims;
              var screenWidth = screen.width;
              var screenHeight = screen.height;
              var windowWidth = window.innerWidth;
              var windowHeight = window.innerHeight;
              var isPortrait = windowHeight > windowWidth;

              if (isPortrait) {
                dims = {
                  'widthString': this.isDefaultUX ? '100vw' : screenWidth + 'px',
                  'heightString': this.isDefaultUX ? '100vh' : '100%' // 100vh needed for old signer page, but cuts off some newer UX elements

                };
              } else {
                // Landscape
                dims = {
                  'widthString': windowWidth + 'px',
                  'heightString': this.isDefaultUX ? '100vh' : '100%'
                };
              } // Always fill screen on mobile


              dims.top = '0';
              dims.left = '0';
              return dims;
            },
            inArray: function inArray(v, array) {
              if (this.hasJQuery) {
                return $.inArray(v, array);
              } else if (array) {
                for (var i = 0; i < array.length; i++) {
                  if (array[i] == v) {
                    return i;
                  }
                }
              }

              return -1;
            },
            safeUrl: function safeUrl(url) {
              if (url) {
                try {
                  // Security: remove script tags from URLs before processing
                  url = url.replace(/</g, "&lt;");
                  url = url.replace(/>/g, "&gt;"); // HTML-Decode the given url if necessary, by rendering to the page

                  var el = document.createElement('div');
                  el.innerHTML = url;
                  var decodedUrl = el.innerText; // Fall back to just replacing '&amp;' in case of failure

                  if (!decodedUrl) {
                    url = url.replace(/\&amp\;/g, '&');
                  } else {
                    url = decodedUrl;
                  }
                } catch (e) {
                  l('Could not decode url: ' + e);
                }
              }

              return url;
            }
          };
          /**
           * Wrapper that will ensure an error message is displayed, either in console.log
           * or as a browser alert.
           * @param message String error message
           */

          function error(message) {
            if (typeof message !== 'undefined') {
              if (window.console && console.log) {
                console.log(message);
              } else {
                alert(message);
              }
            }
          }
          /**
           * Custom wrapper that conditionally logs messages to console.log.
           * @param messageObj String or Object to log
           */


          function l(messageObj) {
            if (HelloSign.isDebugEnabled && typeof messageObj !== 'undefined' && window.console && console.log) {
              console.log(messageObj);
            }
          }
          /**
           *  Getter functions for determining scroll position that work on all
           *  browsers.
           */


          function getScrollX() {
            return _supportPageOffset() ? window.pageXOffset : _isCSS1Compat() ? document.documentElement.scrollLeft : document.body.scrollLeft;
          }

          function getScrollY() {
            return _supportPageOffset() ? window.pageYOffset : _isCSS1Compat() ? document.documentElement.scrollTop : document.body.scrollTop;
          }

          function _isCSS1Compat() {
            return (document.compatMode || '') === 'CSS1Compat';
          }

          function _supportPageOffset() {
            return window.pageXOffset !== undefined;
          } // Export the HS object


          module.exports = HelloSign;
        })();
        /***/

      }
      /******/

    })
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../demo/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hellosignEmbedded = _interopRequireDefault(__webpack_require__(/*! hellosign-embedded */ "../lib/embedded.umd.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configurationFormElement = document.getElementById('configuration-form');
var apiKeyElement = document.querySelector('[name="api-key"]');
var clientIdElement = document.querySelector('[name="client-id"]');
var redirectUrlElement = document.querySelector('[name="redirect-url"]');
/**
 * Initializes the dmeo app.
 *
 * @see saveConfig
 * @see createRequest
 */

function init() {
  configurationFormElement.addEventListener('submit', function (evt) {
    evt.preventDefault(); // Close the existing request if there is one.

    _hellosignEmbedded.default.close();

    saveConfig();
    createRequest();
  });
}
/**
 * Sends a request to the backend to create a new
 * signature request using the HelloSign NodeJS SDK with
 * the given API key and Client ID.
 *
 * @see handleCreateRequest
 */


function createRequest() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function (evt) {
    var body = JSON.parse(xhr.responseText);

    if (body.success) {
      openRequest(body.data.signUrl);
    } else {
      alert('Something went wrong. Did you remember to enter your API Key and Client ID?');
    }
  });
  xhr.open('POST', '/createSignatureRequest', true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(JSON.stringify({
    clientId: clientIdElement.value,
    apiKey: apiKeyElement.value
  }));
}
/**
 * Initializes and opens the embedded signature request
 * with the signature URL provided by the backend.
 *
 * @param {string} signUrl
 */


function openRequest(signUrl) {
  _hellosignEmbedded.default.init(clientIdElement.value);

  var options = {
    url: signUrl,
    allowCancel: true,
    debug: true,
    skipDomainVerification: true,
    uxVersion: 2,
    messageListener: function messageListener(evt) {
      console.log(evt);
    }
  }; // Set the redirect URL, if defined by the user.

  if (redirectUrlElement.value.length) {
    options.redirectUrl = redirectUrlElement.value;
  }

  _hellosignEmbedded.default.open(options);
}
/**
 * Saves the user's current config for ease of use.
 */


function saveConfig() {
  try {
    window.localStorage.setItem('config', JSON.stringify({
      apiKey: apiKeyElement.value,
      clientId: clientIdElement.value,
      redirectUrl: redirectUrlElement.value
    }));
  } catch (err) {// User may have private browsing enabled.
    // Fail silently.
  }
}
/**
 * Prepopulates configuration fields from local storage.
 */


function loadConfig() {
  try {
    var config = window.localStorage.getItem('config');

    if (config) {
      var _JSON$parse = JSON.parse(config),
          apiKey = _JSON$parse.apiKey,
          clientId = _JSON$parse.clientId,
          redirectUrl = _JSON$parse.redirectUrl;

      apiKeyElement.value = apiKey;
      clientIdElement.value = clientId;
      redirectUrlElement.value = redirectUrl;
    }
  } catch (err) {// User may have private browsing enabled.
    // Fail silently.
  }
}

loadConfig();
init();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9IZWxsb1NpZ24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrOi8vSGVsbG9TaWduL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrOi8vSGVsbG9TaWduL3NyYy9lbWJlZGRlZC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRVcmxWYXJzIiwidmFycyIsInBhcnRzIiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsIm0iLCJrZXkiLCJ2YWx1ZSIsIndpbmRvdyIsInVybFZhcnMiLCJpc0RlYnVnRW5hYmxlZCIsImRlYnVnIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwiWFdNIiwibGFzdEhhc2giLCJpbnRlcnZhbElkIiwicm1DYWxsYmFjayIsImRlZmF1bHREZWxheSIsImhhc1Bvc3RNZXNzYWdlIiwiX3NlcmlhbGl6ZU1lc3NhZ2VWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZW5kIiwibWVzc2FnZSIsInRhcmdldFVybCIsInRhcmdldCIsImwiLCJzZWxmIiwiayIsInB1c2giLCJqb2luIiwidCIsIkRhdGUiLCJjIiwidGFyZ2V0RnJhbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwicGFyZW50IiwicmVjZWl2ZSIsImNhbGxiYWNrIiwic291cmNlT3JpZ2luIiwiZGVsYXkiLCJlcnJvciIsIm5hbWUiLCJldnQiLCJvcmlnaW4iLCJzdWJkb21haW5UZXN0IiwiUmVnRXhwIiwidGVzdCIsImNsZWFySW50ZXJ2YWwiLCJ1bmRlZmluZWQiLCJoYXNoIiwicmUiLCJkYXRhIiwic2V0SW50ZXJ2YWwiLCJjYWNoZUJ1c3QiLCJNZXRhVGFnSGVscGVyIiwic2V0Iiwic2F2ZWRWaWV3cG9ydENvbnRlbnQiLCJfZ2V0RWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImNvbnRlbnRQYWlycyIsIl9leHBsb2RlUGFpcnMiLCJfam9pblBhaXJzIiwicmVzdG9yZSIsImVsIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJrZXllZCIsInBhaXJzIiwibWV0YVN0cmluZyIsInNwbGl0Iiwib2JqIiwiZm9yRWFjaCIsInBhaXIiLCJrdiIsIkhlbGxvU2lnbiIsIkRFRkFVTFRfVVhfVkVSU0lPTiIsIklGUkFNRV9XSURUSF9SQVRJTyIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIk1JTl9IRUlHSFQiLCJ3cmFwcGVyIiwiaWZyYW1lIiwib3ZlcmxheSIsImNhbmNlbEJ1dHRvbiIsImNsaWVudElkIiwiaXNPbGRJRSIsImlzRkYiLCJpc09wZXJhIiwiaXNNb2JpbGUiLCJiYXNlVXJsIiwiY2RuQmFzZVVybCIsIkNVTFRVUkVTIiwiRlJfRlIiLCJERV9ERSIsIlNWX1NFIiwiWkhfQ04iLCJEQV9ESyIsIk5MX05MIiwiRVNfRVMiLCJFU19NWCIsIlBUX0JSIiwiaW5pdCIsInN1cHBvcnRlZEN1bHR1cmVzIiwiRU5fVVMiLCJFVkVOVF9TSUdORUQiLCJFVkVOVF9ERUNMSU5FRCIsIkVWRU5UX0NBTkNFTEVEIiwiRVZFTlRfU0VOVCIsIkVWRU5UX1RFTVBMQVRFX0NSRUFURUQiLCJFVkVOVF9FUlJPUiIsImFwcENsaWVudElkIiwib3BlbiIsInBhcmFtcyIsInJlZGlyZWN0VXJsIiwic2FmZVVybCIsIm1lc3NhZ2VMaXN0ZW5lciIsImZyYW1lVXJsIiwidXhWZXJzaW9uIiwiaXNEZWZhdWx0VVgiLCJoZWFsdGhDaGVja1RpbWVvdXRNcyIsImluZGV4T2YiLCJza2lwRG9tYWluVmVyaWZpY2F0aW9uIiwiaGlkZUhlYWRlciIsIndoaXRlTGFiZWxpbmdPcHRpb25zIiwiaXNJblBhZ2UiLCJjb250YWluZXIiLCJib2R5IiwiaXNOYU4iLCJwYXJzZUludCIsIkVycm9yIiwidXNlckN1bHR1cmUiLCJpbkFycmF5IiwiZW5jb2RlVVJJIiwid2luZG93RGltcyIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJzdHlsZXMiLCJyZXNpemVJRnJhbWUiLCJfcmVzaXplSUZyYW1lIiwiZGltcyIsInN0eWxlIiwibW9iaWxlRGltcyIsImdldE1vYmlsZURpbWVuc2lvbnMiLCJzY3JvbGxUbyIsInpvb21TY2FsZSIsImNsaWVudFdpZHRoIiwiZGV0ZWN0Wm9vbSIsIl9kZXRlY3Rab29tIiwibmV3Wm9vbVNjYWxlIiwib25zY3JvbGwiLCJvbnJlc2l6ZSIsImhlaWdodFJhdyIsIm9uY2xpY2siLCJjbG9zZSIsInJlbW92ZUNoaWxkIiwiaSIsImUiLCJzIiwidG9wIiwiZml4SWZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oZWFsdGhDaGVja1RpbWVvdXRIYW5kbGUiLCJyZXBvcnRFcnJvciIsInNldFRpbWVvdXQiLCJfcGFyZW50V2luZG93Q2FsbGJhY2siLCJzb3VyY2UiLCJjbGVhclRpbWVvdXQiLCJwYXlsb2FkIiwidHlwZSIsInRva2VuIiwiZXZlbnREYXRhIiwicCIsImRlc2VyaWFsaXplRXZlbnREYXRhIiwic3RyIiwicGFyc2UiLCJwYXJzZUpzb24iLCJsZW5ndGgiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2ZhZGVPdXRJRnJhbWUiLCJjdXJyZW50T3BhY2l0eSIsIm9wYWNpdHkiLCJmaWx0ZXIiLCJkaXNwbGF5IiwiYW5pbWF0aW9uVGltZXIiLCJlcnJvck1lc3NhZ2UiLCJwYXJlbnRVcmwiLCJlbnN1cmVQYXJlbnREb21haW4iLCJkb21haW5OYW1lIiwid2FybmluZ01zZyIsImFsZXJ0IiwiX2Vuc3VyZVBhcmVudERvbWFpbkNhbGxiYWNrIiwidmFsaWQiLCJjdXN0b21IZWlnaHQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiaGVpZ2h0IiwiTWF0aCIsIm1heCIsIndpZHRoIiwibWluIiwic2NyZWVuV2lkdGgiLCJzY3JlZW4iLCJzY3JlZW5IZWlnaHQiLCJpc1BvcnRyYWl0IiwibGVmdCIsInYiLCJhcnJheSIsImhhc0pRdWVyeSIsIiQiLCJ1cmwiLCJpbm5lckhUTUwiLCJkZWNvZGVkVXJsIiwiaW5uZXJUZXh0IiwiVkVSU0lPTiIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlT2JqIiwiZ2V0U2Nyb2xsWCIsIl9zdXBwb3J0UGFnZU9mZnNldCIsInBhZ2VYT2Zmc2V0IiwiX2lzQ1NTMUNvbXBhdCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJjb21wYXRNb2RlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbmZpZ3VyYXRpb25Gb3JtRWxlbWVudCIsImFwaUtleUVsZW1lbnQiLCJjbGllbnRJZEVsZW1lbnQiLCJyZWRpcmVjdFVybEVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNhdmVDb25maWciLCJjcmVhdGVSZXF1ZXN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJyZXNwb25zZVRleHQiLCJzdWNjZXNzIiwib3BlblJlcXVlc3QiLCJzaWduVXJsIiwic2V0UmVxdWVzdEhlYWRlciIsImFwaUtleSIsIm9wdGlvbnMiLCJhbGxvd0NhbmNlbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJlcnIiLCJsb2FkQ29uZmlnIiwiY29uZmlnIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FB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YnNPLGNBQVFiLGNBQWN4TyxLQURUO0FBRWJvRixnQkFBVXFKLGdCQUFnQnpPLEtBRmI7QUFHYmlILG1CQUFheUgsbUJBQW1CMU87QUFIbkIsS0FBZixDQURGO0FBT0QsR0FSRCxDQVFFLE9BQU8wUCxHQUFQLEVBQVksQ0FDWjtBQUNBO0FBQ0Q7QUFDRjtBQUVEOzs7OztBQUdBLFNBQVNDLFVBQVQsR0FBc0I7QUFDcEIsTUFBSTtBQUNGLFFBQU1DLFNBQVMzUCxPQUFPdVAsWUFBUCxDQUFvQkssT0FBcEIsQ0FBNEIsUUFBNUIsQ0FBZjs7QUFFQSxRQUFJRCxNQUFKLEVBQVk7QUFBQSx3QkFDZ0M5TyxLQUFLK0osS0FBTCxDQUFXK0UsTUFBWCxDQURoQztBQUFBLFVBQ0ZQLE1BREUsZUFDRkEsTUFERTtBQUFBLFVBQ01qSyxRQUROLGVBQ01BLFFBRE47QUFBQSxVQUNnQjZCLFdBRGhCLGVBQ2dCQSxXQURoQjs7QUFHVnVILG9CQUFjeE8sS0FBZCxHQUFzQnFQLE1BQXRCO0FBQ0FaLHNCQUFnQnpPLEtBQWhCLEdBQXdCb0YsUUFBeEI7QUFDQXNKLHlCQUFtQjFPLEtBQW5CLEdBQTJCaUgsV0FBM0I7QUFDRDtBQUNGLEdBVkQsQ0FVRSxPQUFPeUksR0FBUCxFQUFZLENBQ1o7QUFDQTtBQUNEO0FBQ0Y7O0FBRURDO0FBQ0F0SixPIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkhlbGxvU2lnblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJIZWxsb1NpZ25cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbWJlZGRlZC5qc1wiKTtcbiIsIi8qKlxuICogSGVsbG9TaWduIEpTIGxpYnJhcnkgZm9yIGVtYmVkZGFibGVzXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgSGVsbG9TaWduXG4gKlxuICogWFdNIC0gQ3Jvc3Mtd2luZG93IG1lc3NhZ2luZyBpbnNwaXJlZCBieSBCZW4gQWxtYW4nc1xuICogalF1ZXJ5IHBvc3RNZXNzYWdlIHBsdWdpbjpcbiAqIGh0dHA6Ly9iZW5hbG1hbi5jb20vcHJvamVjdHMvanF1ZXJ5LXBvc3RtZXNzYWdlLXBsdWdpbi9cbiAqXG4gKiAgICBDb3B5cmlnaHQgKGMpIDIwMDkgXCJDb3dib3lcIiBCZW4gQWxtYW5cbiAqICAgIER1YWwgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBhbmQgR1BMIGxpY2Vuc2VzLlxuICogICAgaHR0cDovL2JlbmFsbWFuLmNvbS9hYm91dC9saWNlbnNlL1xuICovXG5cbihmdW5jdGlvbigpe1xuXG4gICAgZnVuY3Rpb24gZ2V0VXJsVmFycygpIHtcbiAgICAgICAgdmFyIHZhcnMgPSB7fTtcbiAgICAgICAgdmFyIHBhcnRzID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvWz8mXSsoW149Jl0rKT0oW14mXSopL2dpLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKG0sIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJzO1xuICAgIH1cblxuICAgIHZhciB1cmxWYXJzID0gZ2V0VXJsVmFycygpO1xuICAgIHdpbmRvdy5pc0RlYnVnRW5hYmxlZCA9ICh1cmxWYXJzLmRlYnVnID8gdXJsVmFycy5kZWJ1ZyA9PT0gJ3RydWUnIDogZmFsc2UpO1xuXG4gICAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcblxuICAgIHZhciBYV00gPSB7XG5cbiAgICAgICAgY2FjaGVCdXN0OiAwLFxuICAgICAgICBsYXN0SGFzaDogMCxcbiAgICAgICAgaW50ZXJ2YWxJZDogMCxcbiAgICAgICAgcm1DYWxsYmFjazogbnVsbCxcbiAgICAgICAgZGVmYXVsdERlbGF5OiA1MDAsXG4gICAgICAgIGhhc1Bvc3RNZXNzYWdlOiAod2luZG93Wydwb3N0TWVzc2FnZSddICE9PSB1bmRlZmluZWQpLFxuXG4gICAgICAgIF9zZXJpYWxpemVNZXNzYWdlVmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2VuZDogZnVuY3Rpb24obWVzc2FnZSwgdGFyZ2V0VXJsLCB0YXJnZXQpIHtcblxuICAgICAgICAgICAgbCgnWFdNIFNlbmQ6IFNlbmRpbmcgTWVzc2FnZS4nKTtcbiAgICAgICAgICAgIGwoJyAgdGFyZ2V0VXJsOiAnICsgdGFyZ2V0VXJsKTtcblxuICAgICAgICAgICAgdmFyIHNlbGYgPSBYV007XG5cbiAgICAgICAgICAgIGlmICghdGFyZ2V0VXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXJpYWxpemUgdGhlIG1lc3NhZ2UgaW50byBhIHN0cmluZ1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiBtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goayArICc9JyArIHRoaXMuX3NlcmlhbGl6ZU1lc3NhZ2VWYWx1ZShtZXNzYWdlW2tdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBwYXJ0cy5qb2luKCcmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGwoJyAgbWVzc2FnZTogJyArIG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5oYXNQb3N0TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBicm93c2VyIHN1cHBvcnRzIHdpbmRvdy5wb3N0TWVzc2FnZSwgc28gY2FsbCBpdCB3aXRoIGEgdGFyZ2V0T3JpZ2luXG4gICAgICAgICAgICAgICAgLy8gc2V0IGFwcHJvcHJpYXRlbHksIGJhc2VkIG9uIHRoZSB0YXJnZXRVcmwgcGFyYW1ldGVyLlxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Wydwb3N0TWVzc2FnZSddKG1lc3NhZ2UsIHRhcmdldFVybC5yZXBsYWNlKCAvKFteOl0rOlxcL1xcL1teXFwvXSspLiovLCAnJDEnICkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGFyZ2V0VXJsKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB3aW5kb3cucG9zdE1lc3NhZ2UsIHNvIHNldCB0aGUgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAvLyBvZiB0aGUgdGFyZ2V0IHRvIHRhcmdldFVybCNtZXNzYWdlLiBBIGJpdCB1Z2x5LCBidXQgaXQgd29ya3MhIEEgY2FjaGVcbiAgICAgICAgICAgICAgICAvLyBidXN0IHBhcmFtZXRlciBpcyBhZGRlZCB0byBlbnN1cmUgdGhhdCByZXBlYXQgbWVzc2FnZXMgdHJpZ2dlciB0aGVcbiAgICAgICAgICAgICAgICAvLyBjYWxsYmFjay5cbiAgICAgICAgICAgICAgICB2YXIgdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHZhciBjID0gKytzZWxmLmNhY2hlQnVzdDtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0RnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpOyAvLyB0YXJnZXQgaXMgdGhlIHdpbmRvdyBpZCBpbiB0aGlzIGNhc2VcbiAgICAgICAgICAgICAgICAvLyB0YXJnZXRXaW5kb3cubG9jYXRpb24gPSB0YXJnZXRVcmwucmVwbGFjZSggLyMuKiQvLCAnJyApICsgJyMnICsgdCArIGMgKyAnJicgKyBtZXNzYWdlO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRGcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRhcmdldFVybC5yZXBsYWNlKCAvIy4qJC8sICcnICkgKyAnIycgKyB0ICsgYyArICcmJyArIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmxvY2F0aW9uID0gdGFyZ2V0VXJsLnJlcGxhY2UoIC8jLiokLywgJycgKSArICcjJyArIHQgKyBjICsgJyYnICsgbWVzc2FnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGwoJ1hXTSBTZW5kOiBNZXNzYWdlIHNlbnQuJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVjZWl2ZTogZnVuY3Rpb24oY2FsbGJhY2ssIHNvdXJjZU9yaWdpbiwgZGVsYXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBlcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNvdXJjZU9yaWdpbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBlcnJvcignc291cmNlT3JpZ2luIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbCgnWFdNIFJlY2VpdmU6IEluaXRpYWxpemUgcmVjZWl2ZXIuJyk7XG4gICAgICAgICAgICBsKCcgIGNhbGxiYWNrOiAnICsgKGNhbGxiYWNrLm5hbWUgPyBjYWxsYmFjay5uYW1lIDogJ0Fub255bW91cyBmdW5jdGlvbicpKTtcbiAgICAgICAgICAgIGwoJyAgc291cmNlT3JpZ2luOiAnICsgc291cmNlT3JpZ2luKTtcblxuICAgICAgICAgICAgdmFyIHNlbGYgPSBYV007XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmhhc1Bvc3RNZXNzYWdlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgYnJvd3NlciBzdXBwb3J0cyB3aW5kb3cucG9zdE1lc3NhZ2UsIHRoZSBjYWxsYmFjayB3aWxsIGJlXG4gICAgICAgICAgICAgICAgLy8gYm91bmQgdG8gdGhlIGFjdHVhbCBldmVudCBhc3NvY2lhdGVkIHdpdGggd2luZG93LnBvc3RNZXNzYWdlLlxuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucm1DYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5iaW5kIHByZXZpb3VzIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93WydhZGRFdmVudExpc3RlbmVyJ10gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydyZW1vdmVFdmVudExpc3RlbmVyJ10oJ21lc3NhZ2UnLCBzZWxmLnJtQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vSUU4IGRvZXNuJ3Qgc3VwcG9ydCByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93WydkZXRhY2hFdmVudCddKCdvbm1lc3NhZ2UnLCBzZWxmLnJtQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQmluZCB0aGUgY2FsbGJhY2suIEEgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayBpcyBzdG9yZWQgZm9yIGVhc2Ugb2YgdW5iaW5kaW5nXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucm1DYWxsYmFjayA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBldmVudCBpcyBvcmlnaW5hdGluZyBmcm9tIHRoZSBzb3VyY2UgZG9tYWluLCBhY2NvdW50aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3Igc3ViZG9tYWlucyAoZXZ0Lm9yaWdpbiBtdXN0IGVuZCB3aXRoIGEgZG90IGFuZCB0aGUgc291cmNlT3JpZ2luIHN0cmluZykuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0Lm9yaWdpbiAhPT0gc291cmNlT3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YmRvbWFpblRlc3QgPSBuZXcgUmVnRXhwKCdbXFwvfFxcLl0nICsgc291cmNlT3JpZ2luICsgJyQnLCAnaScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3ViZG9tYWluVGVzdC50ZXN0KGV2dC5vcmlnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwoJ1hXTSBSZWNlaXZlOiBNZXNzYWdlIHJlY2VpdmVkIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbCgnICBkYXRhOiAnICsgZXZ0LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbCgnICBzb3VyY2VPcmlnaW46ICcgKyBzb3VyY2VPcmlnaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXZ0KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAod2luZG93WydhZGRFdmVudExpc3RlbmVyJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydhZGRFdmVudExpc3RlbmVyJ10oJ21lc3NhZ2UnLCBzZWxmLnJtQ2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSUU4IGRvZXNuJ3Qgc3VwcG9ydCBhZGRFdmVudExpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snYXR0YWNoRXZlbnQnXSgnb25tZXNzYWdlJywgc2VsZi5ybUNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIGJyb3dzZXIgc3Vja3MsIGEgcG9sbGluZyBsb29wIHdpbGwgYmUgc3RhcnRlZCwgYW5kIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIHRoZSBsb2NhdGlvbi5oYXNoIGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgbCgnWFdNIFJlY2VpdmU6IFN0YXJ0aW5nIHBvbGwuLi4nKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmludGVydmFsSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzZWxmLmludGVydmFsSWQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmludGVydmFsSWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVsYXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5ID0gc2VsZi5kZWZhdWx0RGVsYXk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsYXkgPSAoZGVsYXkgIT09IHVuZGVmaW5lZCA/IGRlbGF5IDogMjAwKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc2ggPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlID0gL14jP1xcZCsmLztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNoICE9PSBzZWxmLmxhc3RIYXNoICYmIHJlLnRlc3QoaGFzaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxhc3RIYXNoID0gaGFzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGhhc2gucmVwbGFjZShyZSwgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwoJ1hXTSBSZWNlaXZlOiBNZXNzYWdlIHJlY2VpdmVkIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwoJyAgZGF0YTogJyArIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwoJyAgc291cmNlT3JpZ2luOiAnICsgc291cmNlT3JpZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7IGRhdGE6IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbnMgdG8gbWFuYWdlIHRoZSBcInZpZXdwb3J0XCIgbWV0YSB0YWcuXG4gICAgICogVGhpcyBhbGxvd3MgdXMgdG8gZHluYW1pY2FsbHkgY29udHJvbCB0aGUgZGlzcGxheVxuICAgICAqIGFuZCBwbGFjZW1lbnQgb2YgdGhlIGlGcmFtZSBpbiBhIG1vYmlsZSBjb250ZXh0LlxuICAgICAqL1xuICAgIHZhciBNZXRhVGFnSGVscGVyID0ge1xuXG4gICAgICAgIHNhdmVkVmlld3BvcnRDb250ZW50OiAnJyxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbCgnT3B0aW1pemluZyB2aWV3cG9ydCBtZXRhIHRhZyBmb3IgbW9iaWxlJyk7XG5cbiAgICAgICAgICAgIC8vIFNhdmUgb2ZmIHRoZSBjdXJyZW50IHZpZXdwb3J0IG1ldGEgdGFnIGNvbnRlbnRcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRWaWV3cG9ydENvbnRlbnQgPSB0aGlzLl9nZXRFbGVtZW50KCkuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBtb2JpbGUtb3B0aW1pemVkIHNldHRpbmdzXG4gICAgICAgICAgICB2YXIgY29udGVudFBhaXJzID0gdGhpcy5fZXhwbG9kZVBhaXJzKHRoaXMuc2F2ZWRWaWV3cG9ydENvbnRlbnQpO1xuICAgICAgICAgICAgY29udGVudFBhaXJzWyd3aWR0aCddID0gJ2RldmljZS13aWR0aCc7XG4gICAgICAgICAgICBjb250ZW50UGFpcnNbJ21heGltdW0tc2NhbGUnXSA9ICcxLjAnO1xuICAgICAgICAgICAgY29udGVudFBhaXJzWyd1c2VyLXNjYWxhYmxlJ10gPSAnbm8nO1xuICAgICAgICAgICAgdGhpcy5fZ2V0RWxlbWVudCgpLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoaXMuX2pvaW5QYWlycyhjb250ZW50UGFpcnMpKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXN0b3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGwoJ1Jlc3RvcmluZyB2aWV3cG9ydCBtZXRhIHRhZycpO1xuICAgICAgICAgICAgdGhpcy5fZ2V0RWxlbWVudCgpLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoaXMuc2F2ZWRWaWV3cG9ydENvbnRlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9nZXRFbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT12aWV3cG9ydF0nKTtcbiAgICAgICAgICAgIGlmICghZWwpIHtcbiAgICAgICAgICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndmlld3BvcnQnKTtcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnaW5pdGlhbC1zY2FsZT0xLjAnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfSxcblxuICAgICAgICBfam9pblBhaXJzOiBmdW5jdGlvbihrZXllZCl7XG4gICAgICAgICAgICB2YXIgcGFpcnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBrZXllZCkge1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2goa2V5ICsgJz0nICsga2V5ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFpcnMuam9pbignLCAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfZXhwbG9kZVBhaXJzOiBmdW5jdGlvbihtZXRhU3RyaW5nKXtcbiAgICAgICAgICAgIHZhciBwYWlycyA9IG1ldGFTdHJpbmcuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24ocGFpcikge1xuICAgICAgICAgICAgICAgIHBhaXIgPSBwYWlyLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB2YXIga3YgPSBwYWlyLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgb2JqW2t2WzBdXSA9IGt2WzFdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIEhlbGxvU2lnbiA9IHtcblxuICAgICAgICBWRVJTSU9OOiByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLFxuICAgICAgICBERUZBVUxUX1VYX1ZFUlNJT046IDEsXG4gICAgICAgIElGUkFNRV9XSURUSF9SQVRJTzogMC44LFxuICAgICAgICBERUZBVUxUX1dJRFRIOiA5MDAsXG4gICAgICAgIERFRkFVTFRfSEVJR0hUOiA5MDAsXG4gICAgICAgIE1JTl9IRUlHSFQ6IDQ4MCxcbiAgICAgICAgd3JhcHBlcjogbnVsbCxcbiAgICAgICAgaWZyYW1lOiBudWxsLFxuICAgICAgICBvdmVybGF5OiBudWxsLFxuICAgICAgICBjYW5jZWxCdXR0b246IG51bGwsXG4gICAgICAgIGNsaWVudElkOiBudWxsLFxuICAgICAgICBpc09sZElFOiAoL21zaWUgKDh8N3w2fDUpL2dpLnRlc3QodXNlckFnZW50KSksXG4gICAgICAgIGlzRkY6ICgvZmlyZWZveC9naS50ZXN0KHVzZXJBZ2VudCkpLFxuICAgICAgICBpc09wZXJhOiAoL29wZXJhL2dpLnRlc3QodXNlckFnZW50KSksXG4gICAgICAgIGlzTW9iaWxlOiAoL2FuZHJvaWR8d2Vib3N8aXBob25lfGlwYWR8aXBvZHxibGFja2JlcnJ5fGllbW9iaWxlfG9wZXJhIG1pbmkvaS50ZXN0KHVzZXJBZ2VudCkpLFxuICAgICAgICBiYXNlVXJsOiAnaHR0cHM6Ly93d3cuaGVsbG9zaWduLmNvbScsXG4gICAgICAgIGNkbkJhc2VVcmw6ICdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vY2RuLmhlbGxvZmF4LmNvbScsXG4gICAgICAgIFhXTTogWFdNLFxuXG4gICAgICAgIENVTFRVUkVTOiB7XG4gICAgICAgICAgICBFTl9VUzogJ2VuX1VTJyxcbiAgICAgICAgICAgIEZSX0ZSOiAnZnJfRlInLFxuICAgICAgICAgICAgREVfREU6ICdkZV9ERScsXG4gICAgICAgICAgICBTVl9TRTogJ3N2X1NFJyxcbiAgICAgICAgICAgIFpIX0NOOiAnemhfQ04nLFxuICAgICAgICAgICAgREFfREs6ICdkYV9ESycsXG4gICAgICAgICAgICBOTF9OTDogJ25sX05MJyxcbiAgICAgICAgICAgIEVTX0VTOiAnZXNfRVMnLFxuICAgICAgICAgICAgRVNfTVg6ICdlc19NWCcsXG4gICAgICAgICAgICBQVF9CUjogJ3B0X0JSJyxcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VwcG9ydGVkQ3VsdHVyZXMgPSBbdGhpcy5FTl9VUywgdGhpcy5GUl9GUiwgdGhpcy5ERV9ERSwgdGhpcy5TVl9TRSwgdGhpcy5aSF9DTiwgdGhpcy5EQV9ESywgdGhpcy5OTF9OTCwgdGhpcy5FU19FUywgdGhpcy5FU19NWCwgdGhpcy5QVF9CUl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uaW5pdCgpLFxuXG4gICAgICAgIGlzRGVidWdFbmFibGVkOiB3aW5kb3cuaXNEZWJ1Z0VuYWJsZWQsXG5cbiAgICAgICAgLy8gUFVCTElDIEVWRU5UU1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gLSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgICAgQW4gZXJyb3Igb2NjdXJyZWQgaW4gdGhlIGlGcmFtZVxuICAgICAgICAvLyAtIHNpZ25hdHVyZV9yZXF1ZXN0X3NpZ25lZCAgICAgICBUaGUgc2lnbmF0dXJlIHJlcXVlc3Qgd2FzIHNpZ25lZFxuICAgICAgICAvLyAtIHNpZ25hdHVyZV9yZXF1ZXN0X2NhbmNlbGVkICAgICBUaGUgdXNlciBjbG9zZWQgdGhlIGlGcmFtZSBiZWZvcmUgY29tcGxldGluZ1xuXG5cbiAgICAgICAgLy8gVEhFU0UgRVZFTlQgQ09ERVMgQVJFIEFDVFVBTExZIFVTRUQgSU4gVFdPIFBMQUNFU1xuICAgICAgICAvLyBJRiBZT1UgQ0hBTkdFIFRIRU0gTUFLRSBTVVJFIFRPIENIQU5HRSBUSEUgT1RIRVJTXG4gICAgICAgIC8vIElOIEhGQUNUSU9OUy5QSFAgVE8gU1RBWSBDT05TSVNURU5ULlxuICAgICAgICBFVkVOVF9TSUdORUQ6ICdzaWduYXR1cmVfcmVxdWVzdF9zaWduZWQnLFxuICAgICAgICBFVkVOVF9ERUNMSU5FRDogJ3NpZ25hdHVyZV9yZXF1ZXN0X2RlY2xpbmVkJyxcbiAgICAgICAgRVZFTlRfQ0FOQ0VMRUQ6ICdzaWduYXR1cmVfcmVxdWVzdF9jYW5jZWxlZCcsXG4gICAgICAgIEVWRU5UX1NFTlQ6ICdzaWduYXR1cmVfcmVxdWVzdF9zZW50JyxcbiAgICAgICAgRVZFTlRfVEVNUExBVEVfQ1JFQVRFRDogJ3RlbXBsYXRlX2NyZWF0ZWQnLFxuICAgICAgICBFVkVOVF9FUlJPUjogJ2Vycm9yJyxcblxuXG4gICAgICAgIC8vICAtLS0tICBQVUJMSUMgTUVUSE9EUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBpbml0OiBmdW5jdGlvbihhcHBDbGllbnRJZCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCA9IGFwcENsaWVudElkO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9wZW46IGZ1bmN0aW9uKHBhcmFtcykge1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIFBBUkFNRVRFUlM6XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyAtIHVybCAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcuIFRoZSB1cmwgdG8gb3BlbiBpbiB0aGUgY2hpbGQgZnJhbWVcbiAgICAgICAgICAgIC8vIC0gcmVkaXJlY3RVcmwgICAgICAgICAgICAgIFN0cmluZy4gV2hlcmUgdG8gZ28gYWZ0ZXIgdGhlIHNpZ25hdHVyZSBpcyBjb21wbGV0ZWRcbiAgICAgICAgICAgIC8vIC0gYWxsb3dDYW5jZWwgICAgICAgICAgICAgIEJvb2xlYW4uIFdoZXRoZXIgYSBjYW5jZWwgYnV0dG9uIHNob3VsZCBiZSBkaXNwbGF5ZWQgKGRlZmF1bHQgPSB0cnVlKVxuICAgICAgICAgICAgLy8gLSBtZXNzYWdlTGlzdGVuZXIgICAgICAgICAgRnVuY3Rpb24uIEEgbGlzdGVuZXIgZm9yIFgtd2luZG93IG1lc3NhZ2VzIGNvbWluZyBmcm9tIHRoZSBjaGlsZCBmcmFtZVxuICAgICAgICAgICAgLy8gLSB1c2VyQ3VsdHVyZSAgICAgICAgICAgICAgSGVsbG9TaWduLkNVTFRVUkUuIE9uZSBvZiB0aGUgSGVsbG9TaWduLkNVTFRVUkVTLnN1cHBvcnRlZEN1bHR1cmVzIChkZWZhdWx0ID0gSGVsbG9TaWduLkNVTFRVUkVTLkVOX1VTKVxuICAgICAgICAgICAgLy8gLSBkZWJ1ZyAgICAgICAgICAgICAgICAgICAgQm9vbGVhbi4gV2hlbiB0cnVlLCBkZWJ1Z2dpbmcgc3RhdGVtZW50cyB3aWxsIGJlIHdyaXR0ZW4gdG8gdGhlIGNvbnNvbGUgKGRlZmF1bHQgPSBmYWxzZSlcbiAgICAgICAgICAgIC8vIC0gc2tpcERvbWFpblZlcmlmaWNhdGlvbiAgIEJvb2xlYW4uIFdoZW4gdHJ1ZSwgZG9tYWluIHZlcmlmaWNhdGlvbiBzdGVwIHdpbGwgYmUgc2tpcHBlZCBpZiBhbmQgb25seSBpZiB0aGUgU2lnbmF0dXJlIFJlcXVlc3Qgd2FzIGNyZWF0ZWQgd2l0aCB0ZXN0X21vZGU9MSAoZGVmYXVsdCA9IGZhbHNlKVxuICAgICAgICAgICAgLy8gLSBjb250YWluZXIgICAgICAgICAgICAgICAgRE9NIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGlmcmFtZSBvbiB0aGUgcGFnZSAoZGVmYXVsdCA9IGRvY3VtZW50LmJvZHkpXG4gICAgICAgICAgICAvLyAtIGhlaWdodCAgICAgICAgICAgICAgICAgICBIZWlnaHQgb2YgdGhlIGlGcmFtZSAob25seSBhcHBsaWNhYmxlIHdoZW4gYSBjb250YWluZXIgaXMgc3BlY2lmaWVkKVxuICAgICAgICAgICAgLy8gLSBoaWRlSGVhZGVyICAgICAgICAgICAgICAgQm9vbGVhbi4gV2hlbiB0cnVlLCB0aGUgaGVhZGVyIHdpbGwgYmUgaGlkZGVuIChkZWZhdWx0ID0gZmFsc2UpLiBUaGlzIGlzIG9ubHkgZnVuY3Rpb25hbCBmb3IgY3VzdG9tZXJzIHdpdGggZW1iZWRkZWQgYnJhbmRpbmcgZW5hYmxlZC5cbiAgICAgICAgICAgIC8vIC0gdXhWZXJzaW9uICAgICAgICAgICAgICAgIEludGVnZXIuIFRoZSB2ZXJzaW9uIG9mIHRoZSBlbWJlZGRlZCB1c2VyIGV4cGVyaWVuY2UgdG8gZGlzcGxheSB0byBzaWduZXJzICgxID0gbGVnYWN5LCAyID0gcmVzcG9uc2l2ZSkuIFRoaXMgb3B0aW9uIGlzIG9ubHkgaG9ub3JlZCBpZiB5b3VyIGFjY291bnQgaGFzIGFjY2Vzc2VkIHRoZSBBUEkgcHJpb3IgdG8gTm92IDE0LCAyMDE1LlxuICAgICAgICAgICAgLy8gLSByZXF1ZXN0ZXIgICAgICAgICAgICAgICAgU3RyaW5nLiBUaGUgZW1haWwgb2YgdGhlIHBlcnNvbiBpc3N1aW5nIGEgc2lnbmF0dXJlIHJlcXVlc3QuIFJlcXVpcmVkIGZvciBhbGxvd2luZyAnTWUgKyBPdGhlcnMnIHJlcXVlc3RzXG4gICAgICAgICAgICAvLyAtIHdoaXRlTGFiZWxpbmdPcHRpb25zICAgICBPYmplY3QuIEFuIGFzc29jaWF0aXZlIGFycmF5IHRvIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBhcHAncyBzaWduZXIgcGFnZVxuICAgICAgICAgICAgLy8gLSBoZWFsdGhDaGVja1RpbWVvdXRNcyAgICAgSW50ZWdlci4gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBmb3IgYSByZXNwb25zZSBmcm9tIHRoZSBpZnJhbWUuIElmIG5vIHJlc3BvbnNlIGFmdGVyIHRoYXQgdGltZSB0aGUgaWZyYW1lIHdpbGwgYmUgY2xvc2VkLiAxNTAwMCBtaWxsaXNlY29uZHMgaXMgcmVjb21tZW5kZWQuXG5cbiAgICAgICAgICAgIHZhciByZWRpcmVjdFVybCA9IHRoaXMuc2FmZVVybChwYXJhbXNbJ3JlZGlyZWN0VXJsJ10pO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VMaXN0ZW5lciA9IHBhcmFtc1snbWVzc2FnZUxpc3RlbmVyJ107XG4gICAgICAgICAgICB2YXIgZnJhbWVVcmwgPSB0aGlzLnNhZmVVcmwocGFyYW1zWyd1cmwnXSk7XG4gICAgICAgICAgICB0aGlzLnV4VmVyc2lvbiA9IHBhcmFtc1sndXhWZXJzaW9uJ10gfHwgdGhpcy5ERUZBVUxUX1VYX1ZFUlNJT047XG4gICAgICAgICAgICB0aGlzLmlzRGVmYXVsdFVYID0gKHRoaXMudXhWZXJzaW9uID09PSB0aGlzLkRFRkFVTFRfVVhfVkVSU0lPTik7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aENoZWNrVGltZW91dE1zID0gcGFyYW1zWydoZWFsdGhDaGVja1RpbWVvdXRNcyddO1xuXG4gICAgICAgICAgICBpZiAodGhpcy51eFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBmcmFtZVVybCArPSAoZnJhbWVVcmwuaW5kZXhPZignPycpID4gMCA/ICcmJyA6ICc/JykgKyAndXhfdmVyc2lvbj0nICsgdGhpcy51eFZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1snZGVidWcnXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVidWdFbmFibGVkID0gKHBhcmFtc1snZGVidWcnXSA9PT0gdHJ1ZSB8fCBwYXJhbXNbJ2RlYnVnJ10gPT0gJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zWydza2lwRG9tYWluVmVyaWZpY2F0aW9uJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwRG9tYWluVmVyaWZpY2F0aW9uID0gKHBhcmFtc1snc2tpcERvbWFpblZlcmlmaWNhdGlvbiddID09PSB0cnVlIHx8IHBhcmFtc1snc2tpcERvbWFpblZlcmlmaWNhdGlvbiddID09ICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1snaGlkZUhlYWRlciddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUhlYWRlciA9IChwYXJhbXNbJ2hpZGVIZWFkZXInXSA9PT0gdHJ1ZSB8fCBwYXJhbXNbJ2hpZGVIZWFkZXInXSA9PSAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbJ3doaXRlTGFiZWxpbmdPcHRpb25zJ10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZUxhYmVsaW5nT3B0aW9ucyA9IEpTT04uc3RyaW5naWZ5KHBhcmFtc1snd2hpdGVMYWJlbGluZ09wdGlvbnMnXSk7XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZUxhYmVsaW5nT3B0aW9ucyA9IHRoaXMud2hpdGVMYWJlbGluZ09wdGlvbnMucmVwbGFjZSgvIy9nLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNbJ3doaXRlTGFiZWxpbmdPcHRpb25zJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgbChcIkludmFsaWQgd2hpdGUgbGFiZWxpbmcgb3B0aW9ucyBzdXBwbGllZCwgb3B0aW9uIHdpbGwgYmUgaWdub3JlZDogXCIgKyBwYXJhbXNbJ3doaXRlTGFiZWxpbmdPcHRpb25zJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0luUGFnZSA9IChwYXJhbXNbJ2NvbnRhaW5lciddICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBwYXJhbXNbJ2NvbnRhaW5lciddIHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5QYWdlICYmIHBhcmFtc1snaGVpZ2h0J10gIT09IHVuZGVmaW5lZCAmJiAoaXNOYU4ocGFyc2VJbnQocGFyYW1zWydoZWlnaHQnXSwgMTApKSB8fCBwYXJhbXNbJ2hlaWdodCddIDw9IDApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGlGcmFtZSBoZWlnaHQgKCcgKyBwYXJhbXNbJ2hlaWdodCddICsgJykgaXQgbXVzdCBiZSBhIHZhbGlkIHBvc2l0aXZlIG51bWJlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsKCdPcGVuaW5nIEhlbGxvU2lnbiBlbWJlZGRlZCBpRnJhbWUgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtczonKTtcbiAgICAgICAgICAgIGwocGFyYW1zKTtcblxuICAgICAgICAgICAgaWYgKCFmcmFtZVVybCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXJsIHNwZWNpZmllZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdXNlckN1bHR1cmUgPSB0eXBlb2YgcGFyYW1zWyd1c2VyQ3VsdHVyZSddID09PSAndW5kZWZpbmVkJyA/IHRoaXMuQ1VMVFVSRVMuRU5fVVMgOiBwYXJhbXNbJ3VzZXJDdWx0dXJlJ107XG4gICAgICAgICAgICBpZiAodGhpcy5pbkFycmF5KHVzZXJDdWx0dXJlLCB0aGlzLkNVTFRVUkVTLnN1cHBvcnRlZEN1bHR1cmVzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdXNlckN1bHR1cmUgc3BlY2lmaWVkOiAnICsgdXNlckN1bHR1cmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcmFtZVVybCArPSAoZnJhbWVVcmwuaW5kZXhPZignPycpID4gMCA/ICcmJyA6ICc/Jyk7XG4gICAgICAgICAgICBpZiAocmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVVybCArPSAncmVkaXJlY3RfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RVcmwpICsgJyYnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJhbWVVcmwgKz0gJ3BhcmVudF91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1xcPy4qLywgJycpKSArICcmJztcbiAgICAgICAgICAgIGZyYW1lVXJsICs9ICh0aGlzLnNraXBEb21haW5WZXJpZmljYXRpb24gPT09IHRydWUgPyAnc2tpcF9kb21haW5fdmVyaWZpY2F0aW9uPTEmJyA6ICcnKTtcbiAgICAgICAgICAgIGZyYW1lVXJsICs9ICdjbGllbnRfaWQ9JyArIHRoaXMuY2xpZW50SWQgKyAnJic7XG4gICAgICAgICAgICBmcmFtZVVybCArPSAodHlwZW9mIHBhcmFtc1sncmVxdWVzdGVyJ10gIT09ICd1bmRlZmluZWQnID8gJ3JlcXVlc3Rlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1sncmVxdWVzdGVyJ10pICsgJyYnIDogJycpO1xuICAgICAgICAgICAgZnJhbWVVcmwgKz0gJ3VzZXJfY3VsdHVyZT0nICsgdXNlckN1bHR1cmU7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0RlYnVnRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGZyYW1lVXJsICs9ICcmZGVidWc9dHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5oaWRlSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVVcmwgKz0gJyZoaWRlSGVhZGVyPXRydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMud2hpdGVMYWJlbGluZ09wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVVybCArPSAnJndoaXRlX2xhYmVsaW5nX29wdGlvbnM9JyArIGVuY29kZVVSSSh0aGlzLndoaXRlTGFiZWxpbmdPcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJhbWVVcmwgKz0gJyZqc192ZXJzaW9uPScgKyB0aGlzLlZFUlNJT047XG5cbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSBmcmFtZVVybC5yZXBsYWNlKC8oW146XSs6XFwvXFwvW15cXC9dKykuKi8sICckMScpO1xuICAgICAgICAgICAgdmFyIHdpbmRvd0RpbXMgPSB0aGlzLmdldFdpbmRvd0RpbWVuc2lvbnMocGFyYW1zWydoZWlnaHQnXSk7XG4gICAgICAgICAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgICAgICAgICAgICdvdmVybGF5Jzoge1xuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgICAndG9wJzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICdib3R0b20nOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogOTk5NyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMjIyJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjQsXG4gICAgICAgICAgICAgICAgICAgICcta2h0bWwtb3BhY2l0eSc6IDAuNCxcbiAgICAgICAgICAgICAgICAgICAgJy1tb3otb3BhY2l0eSc6IDAuNCxcbiAgICAgICAgICAgICAgICAgICAgJ2ZpbHRlcic6ICdhbHBoYShvcGFjaXR5PTQwKScsXG4gICAgICAgICAgICAgICAgICAgICctbXMtZmlsdGVyJzogJ3Byb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTQwKSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd3cmFwcGVyJzogdGhpcy5pc0luUGFnZSA/IHt9IDoge1xuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAndG9wJzogd2luZG93RGltcy50b3AsXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0Jzogd2luZG93RGltcy5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6IDk5OThcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdpZnJhbWUnOiB0aGlzLmlzSW5QYWdlID8ge30gOiB7XG4gICAgICAgICAgICAgICAgICAgICdib3JkZXInOiAnMXB4IHNvbGlkICM1MDUwNTAnLFxuICAgICAgICAgICAgICAgICAgICAnYm94LXNoYWRvdyc6ICcwcHggMnB4IDE4cHggMnB4ICM2NjYnLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjRkZGJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiA5OTk4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnY2FuY2VsQnV0dG9uJzoge1xuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAndG9wJzogJy0xM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogJy0xM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIHRoaXMuY2RuQmFzZVVybCArICcvY3NzL2ZhbmN5Ym94L2ZhbmN5Ym94LnBuZyknLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICctNDBweCAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAnY3Vyc29yJzogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6IDk5OTlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgcmVzaXplSUZyYW1lID0gZnVuY3Rpb24gX3Jlc2l6ZUlGcmFtZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pZnJhbWUpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZGltcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaW1zID0gc2VsZi5nZXRNb2JpbGVEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaW1zID0gc2VsZi5nZXRXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLndyYXBwZXIuc3R5bGVbJ3RvcCddID0gZGltcy50b3A7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYud3JhcHBlci5zdHlsZVsnbGVmdCddID0gZGltcy5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICBzZWxmLndyYXBwZXIuc3R5bGVbJ3dpZHRoJ10gPSBkaW1zLndpZHRoU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlmcmFtZS5zdHlsZVsnaGVpZ2h0J10gPSBkaW1zLmhlaWdodFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pZnJhbWUuc3R5bGVbJ3dpZHRoJ10gPSBkaW1zLndpZHRoU3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXhWZXJzaW9uID4gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSW5QYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkanVzdCB0aGUgaUZyYW1lIHN0eWxlIHRvIGZpdCB0aGUgaW4tcGFnZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWyd3cmFwcGVyJ11bJ3dpZHRoJ10gPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snd3JhcHBlciddWydoZWlnaHQnXSA9IHdpbmRvd0RpbXMuaGVpZ2h0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWyd3aWR0aCddID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWydoZWlnaHQnXSA9IHdpbmRvd0RpbXMuaGVpZ2h0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWydib3JkZXInXSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnYm94LXNoYWRvdyddID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2NhbmNlbEJ1dHRvbiddWydkaXNwbGF5J10gPSAnbm9uZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBpT1MgaGFjay4gIEFwcGFyZW50bHkgaU9TIGlnbm9yZXMgd2lkdGhzIHNldFxuICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGEgbm9uLXBpeGVsIHZhbHVlLCB3aGljaCBtZWFucyBpRnJhbWVzIGdldCBleHBhbmRlZFxuICAgICAgICAgICAgICAgICAgICAvLyB0byB0aGUgZnVsbCB3aWR0aCBvZiB0aGVpciBjb250ZW50LiAgU2V0dGluZyBhIHBpeGVsXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlIGFuZCB0aGVuIHVzaW5nIGBtaW4td2lkdGhgIGlzIHRoZSB3b3JrYXJvdW5kIGZvclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLlxuICAgICAgICAgICAgICAgICAgICAvLyBTZWU6ICBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMDgzNDYyL2hvdy10by1nZXQtYW4taWZyYW1lLXRvLWJlLXJlc3BvbnNpdmUtaW4taW9zLXNhZmFyaVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnd2lkdGgnXSA9ICcxcHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnbWluLXdpZHRoJ10gPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9iaWxlRGltcyA9IHRoaXMuZ2V0TW9iaWxlRGltZW5zaW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGp1c3QgdGhlIGlGcmFtZSBzdHlsZSB0byBmaXQgdGhlIHdob2xlIHNjcmVlblxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3dyYXBwZXInXVsncG9zaXRpb24nXSA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snd3JhcHBlciddWyd0b3AnXSA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWyd3cmFwcGVyJ11bJ2xlZnQnXSA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWyd3cmFwcGVyJ11bJ3dpZHRoJ10gPSBtb2JpbGVEaW1zLndpZHRoU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3dyYXBwZXInXVsnaGVpZ2h0J10gPSBtb2JpbGVEaW1zLmhlaWdodFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsncG9zaXRpb24nXSA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snaWZyYW1lJ11bJ3RvcCddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnbGVmdCddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnd2lkdGgnXSA9IG1vYmlsZURpbXMud2lkdGhTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snaWZyYW1lJ11bJ2hlaWdodCddID0gbW9iaWxlRGltcy5oZWlnaHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snaWZyYW1lJ11bJ2JvcmRlciddID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWydib3gtc2hhZG93J10gPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snY2FuY2VsQnV0dG9uJ11bJ2Rpc3BsYXknXSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIG92ZXJsYXlcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0luUGFnZSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcsICdoc0VtYmVkZGVkT3ZlcmxheScpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrOycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBCdWlsZCB0aGUgd3JhcHBlclxuICAgICAgICAgICAgaWYgKCF0aGlzLndyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoc0VtYmVkZGVkV3JhcHBlcicpO1xuXG4gICAgICAgICAgICAgICAgLy8gSGFjay4gIFdlIG5lZWQgdGhpcyBvbiBtb2JpbGUgYmVmb3JlIHdlIGluc2VydCB0aGUgRE9NXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudCwgb3RoZXJ3aXNlIHRoZSBtb2RhbCBhcHBlYXJzIGFib3ZlIHRoZSBmb2xkXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0luUGFnZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUgJiYgdGhpcy5pc0RlZmF1bHRVWCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbW9iaWxlIGRldmljZSwgcG9sbCB0aGUgd2luZG93IGRpbWVuc2lvbnMgdG8gc2VlXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB6b29tIHNjYWxlIGNoYW5nZXMgYW5kIHJlc2l6ZSB0aGUgaUZyYW1lLiBUaGlzIHByZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1c2VyIGZyb20gem9vbWluZyBhbmQgZ2V0dGluZyBpbnRvIGEgc3RhdGUgd2hlcmUgdGhleSBjYW4ndFxuICAgICAgICAgICAgICAgICAgICAvLyBzdWJtaXQgdGhlIGVtYmVkZGVkIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvb21TY2FsZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRldGVjdFpvb20gPSBmdW5jdGlvbiBfZGV0ZWN0Wm9vbSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdab29tU2NhbGUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoem9vbVNjYWxlICE9PSBuZXdab29tU2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tU2NhbGUgPSBuZXdab29tU2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplSUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGRldGVjdFpvb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSB3aW5kb3cgaXMgcmVzaXplZCwgYWxzbyByZXNpemUgdGhlIGlmcmFtZSBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogT25seSBkbyB0aGlzIHdoZW4gdGhlIGlGcmFtZSBpcyBkaXNwbGF5ZWQgYXMgYSBwb3B1cCwgaXQgZG9lcyBub3QgcmVhbGx5IG1ha2Ugc2Vuc2Ugd2hlbiBpdCdzIGluLXBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxzbyB1c2VkIGZvciBuZXcgbW9iaWxlIHV4XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUlGcmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBpRnJhbWVcbiAgICAgICAgICAgIGlmICghdGhpcy5pZnJhbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaHNFbWJlZGRlZEZyYW1lJyk7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuaWZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgZnJhbWVVcmwpO1xuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKCdzY3JvbGxpbmcnLCAnbm8nKTsgLy8gVGhpcyBuZWVkcyB0byBzdGF5IGFzICdubycgb3IgZWxzZSBpUGFkcywgZXRjLiBnZXQgYnJva2VuXG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2ZyYW1lYm9yZGVyJywgJzAnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGVmYXVsdFVYKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuREVGQVVMVF9XSURUSCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgd2luZG93RGltcy5oZWlnaHRSYXcpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBEZXRlY3RpbmcgJ2VtYmVkZGVkU2lnbicgaW4gdGhlIGZyYW1lVXJsIGlzIGEgaGFjay4gQ2xlYW5cbiAgICAgICAgICAgIC8vIHRoaXMgdXAgb25jZSB0aGUgZW1iZWRkZWQgY2xvc2UgYnV0dG9uIGhhcyBiZWVuIGltcGxlbWVudGVkIGZvclxuICAgICAgICAgICAgLy8gZW1iZWRkZWQgcmVxdWVzdGluZyBhbmQgdGVtcGxhdGVzLlxuICAgICAgICAgICAgaWYgKGZyYW1lVXJsLmluZGV4T2YoJ2VtYmVkZGVkU2lnbicpID09PSAtMSB8fCBwYXJhbXNbJ3V4VmVyc2lvbiddICE9IG51bGwgJiYgcGFyYW1zWyd1eFZlcnNpb24nXSA8IDIpIHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5QYWdlICYmIChwYXJhbXNbJ2FsbG93Q2FuY2VsJ10gPT09IHRydWUgfHwgcGFyYW1zWydhbGxvd0NhbmNlbCddID09PSB1bmRlZmluZWQpICYmICF0aGlzLmNhbmNlbEJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hzRW1iZWRkZWRDYW5jZWwnKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaHJlZicsICdqYXZhc2NyaXB0OjsnKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIGlGcmFtZVxuICAgICAgICAgICAgICAgICAgICAgIEhlbGxvU2lnbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgJ2NhbmNlbCcgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbCgnUmVwb3J0aW5nIGNhbmNlbGF0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiBIZWxsb1NpZ24uRVZFTlRfQ0FOQ0VMRURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNhbmNlbEJ1dHRvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZiAoIXBhcmFtc1snYWxsb3dDYW5jZWwnXSAmJiB0aGlzLmNhbmNlbEJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLnJlbW92ZUNoaWxkKHRoaXMuY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgaW5saW5lIHN0eWxpbmdcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gc3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpc1trXTtcbiAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzdHlsZXNba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVbaV0gPSBzdHlsZXNba11baV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIC0gZXhjZXB0aW9ucyBnZXQgdGhyb3duIHdoZW4gdGhlIGdpdmVuIHN0eWxlIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuY2VsQnV0dG9uICYmICh0aGlzLmlzRkYgfHwgdGhpcy5pc09wZXJhKSkge1xuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggaXMgd2VpcmQgd2l0aCBiZyBpbWFnZXNcbiAgICAgICAgICAgICAgICB2YXIgcyA9IHRoaXMuY2FuY2VsQnV0dG9uLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzICs9IChzID8gJzsgJyA6ICcnKTtcbiAgICAgICAgICAgICAgICBzICs9ICdiYWNrZ3JvdW5kLWltYWdlOiAnICsgc3R5bGVzLmNhbmNlbEJ1dHRvblsnYmFja2dyb3VuZC1pbWFnZSddICsgJzsgJztcbiAgICAgICAgICAgICAgICBzICs9ICdiYWNrZ3JvdW5kLXBvc2l0aW9uOiAnICsgc3R5bGVzLmNhbmNlbEJ1dHRvblsnYmFja2dyb3VuZC1wb3NpdGlvbiddICsgJzsnO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5QYWdlICYmICghdGhpcy5pc01vYmlsZSB8fCB0aGlzLmlzRGVmYXVsdFVYKSkge1xuICAgICAgICAgICAgICAgIC8vIFJ1biByZXNpemVJRnJhbWUgdG8gbWFrZSBzdXJlIGl0IGZpdHMgYmVzdCBmcm9tIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgICAgICByZXNpemVJRnJhbWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUgJiYgIXRoaXMuaXNEZWZhdWx0VVggJiYgd2luZG93ID09PSB3aW5kb3cudG9wKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBzZXQgdGhlIG1ldGEgdGFncyBmb3IgdGhlIHRvcCB3aW5kb3dcbiAgICAgICAgICAgICAgICBNZXRhVGFnSGVscGVyLnNldCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSAmJiAhdGhpcy5pc0luUGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZml4SWZyYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuZml4SWZyYW1lKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZml4SWZyYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGlmcmFtZSBpZiBwYWdlIGZhaWxzIHRvIGluaXRpYWxpemUgd2l0aGluIDE1IHNlY29uZHNcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aENoZWNrVGltZW91dE1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGVhbHRoQ2hlY2tUaW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnU2lnbmVyIHBhZ2UgZmFpbGVkIHRvIGluaXRpYWxpemUgd2l0aGluICcgKyBzZWxmLmhlYWx0aENoZWNrVGltZW91dE1zICsgJyBtaWxsaXNlY29uZHMuJ1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlcG9ydEVycm9yKG1lc3NhZ2UsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5oZWFsdGhDaGVja1RpbWVvdXRNcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgbWVzc2FnZXMgZnJvbSB0aGUgaUZyYW1lXG4gICAgICAgICAgICBYV00ucmVjZWl2ZShmdW5jdGlvbiBfcGFyZW50V2luZG93Q2FsbGJhY2soZXZ0KXtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gZXZ0LnNvdXJjZSB8fCAnaHNFbWJlZGRlZEZyYW1lJztcblxuICAgICAgICAgICAgICAgIGlmIChldnQuZGF0YSA9PT0gJ2luaXRpYWxpemUnICYmIHBhcmFtc1sndXhWZXJzaW9uJ10gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmhlYWx0aENoZWNrVGltZW91dE1zKSBjbGVhclRpbWVvdXQoc2VsZi5faGVhbHRoQ2hlY2tUaW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGNvbnRhaW5lciBmcm9tIHBheWxvYWQgdG8gcHJldmVudCBjaXJjdWxhciByZWZlcmVuY2UgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGF5bG9hZC5jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIFhXTS5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2VtYmVkZGVkQ29uZmlnJywgcGF5bG9hZDogcGF5bG9hZCB9KSwgZXZ0Lm9yaWdpbiwgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5kYXRhID09ICdjbG9zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgaUZyYW1lXG4gICAgICAgICAgICAgICAgICAgIEhlbGxvU2lnbi5jbG9zZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlTGlzdGVuZXIgJiYgcGFyYW1zWyd1eFZlcnNpb24nXSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogSGVsbG9TaWduLkVWRU5UX0NBTkNFTEVEXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmRhdGEgPT0gJ2RlY2xpbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIGlGcmFtZVxuICAgICAgICAgICAgICAgICAgICBIZWxsb1NpZ24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6IEhlbGxvU2lnbi5FVkVOVF9ERUNMSU5FRFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5kYXRhID09ICd1c2VyLWRvbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIGlGcmFtZVxuICAgICAgICAgICAgICAgICAgICBIZWxsb1NpZ24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5kYXRhLmluZGV4T2YoJ2hlbGxvOicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlbGxvIG1lc3NhZ2UgLSBFeHRyYWN0IHRva2VuIGFuZCBzZW5kIGl0IGJhY2tcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gZXZ0LmRhdGEuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gcGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgIFhXTS5zZW5kKCdoZWxsb2JhY2s6JyArIHRva2VuLCBmcmFtZVVybCwgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VMaXN0ZW5lciAmJiBldnQuZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvcndhcmQgdG8gbWVzc2FnZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnREYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgIHZhciBwLCBwYWlycyA9IGV2dC5kYXRhLnNwbGl0KCcmJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlIGhlbHBlciBmdW5jdGlvbiB0byBkZXNlcmlhbGl6ZSB0aGUgZXZlbnQgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2VyaWFsaXplRXZlbnREYXRhID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gc3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYWZlbHkgcGFyc2UgdGhlIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBwYXJzZUpzb24ob2JqW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyAvKiBpZ25vcmUgKi8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8cGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRhW3BbMF1dID0gZGVzZXJpYWxpemVFdmVudERhdGEoZGVjb2RlVVJJQ29tcG9uZW50KHBbMV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdGVuZXIoZXZlbnREYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvcmlnaW4pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy8gUmVzZXQgdmlld3BvcnQgc2V0dGluZ3NcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlICYmICF0aGlzLmlzRGVmYXVsdFVYICYmIHdpbmRvdyA9PT0gd2luZG93LnRvcCkge1xuICAgICAgICAgICAgICAgIE1ldGFUYWdIZWxwZXIucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsKCdDbG9zaW5nIEhlbGxvU2lnbiBlbWJlZGRlZCBpRnJhbWUnKTtcbiAgICAgICAgICAgIC8vIENsb3NlIHRoZSBjaGlsZCBpZnJhbWUgZnJvbSB0aGUgcGFyZW50IHdpbmRvd1xuICAgICAgICAgICAgaWYgKHRoaXMuaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbmNlbEJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQ2hpbGQodGhpcy5jYW5jZWxCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZhZGVPdXRJRnJhbWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5maXhJZnJhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cbiAgICAgICAgLy8gIC0tLS0gIFBSSVZBVEUgTUVUSE9EUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIF9mYWRlT3V0SUZyYW1lOiBmdW5jdGlvbiBfZmFkZU91dElGcmFtZShjdXJyZW50T3BhY2l0eSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHNlbGYuaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50T3BhY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BhY2l0eSA9IDEuMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BhY2l0eSAtPSAwLjE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuaWZyYW1lLnN0eWxlLm9wYWNpdHkgPSBjdXJyZW50T3BhY2l0eTtcbiAgICAgICAgICAgICAgICBzZWxmLmlmcmFtZS5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgcGFyc2VJbnQoY3VycmVudE9wYWNpdHkgKiAxMDAsIDEwKSArICcpJztcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wYWNpdHkgPD0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaWZyYW1lLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlmcmFtZS5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0wKSc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25UaW1lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGFpbmVyLnJlbW92ZUNoaWxkKHNlbGYub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIucmVtb3ZlQ2hpbGQoc2VsZi53cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi53cmFwcGVyLnJlbW92ZUNoaWxkKHNlbGYuaWZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vdmVybGF5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pZnJhbWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLndyYXBwZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25UaW1lciA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uKGN1cnJlbnRPcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2ZhZGVPdXRJRnJhbWUoY3VycmVudE9wYWNpdHkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pKGN1cnJlbnRPcGFjaXR5KSwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlcG9ydEVycm9yOiBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIHBhcmVudFVybCkge1xuICAgICAgICAgICAgWFdNLnNlbmQoe1xuICAgICAgICAgICAgICAgICdldmVudCc6IEhlbGxvU2lnbi5FVkVOVF9FUlJPUixcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBlcnJvck1lc3NhZ2VcbiAgICAgICAgICAgIH0sIHBhcmVudFVybCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW5zdXJlUGFyZW50RG9tYWluOiBmdW5jdGlvbihkb21haW5OYW1lLCBwYXJlbnRVcmwsIHRva2VuLCBza2lwRG9tYWluVmVyaWZpY2F0aW9uLCBjYWxsYmFjaykge1xuXG4gICAgICAgICAgICAvLyBkb21haW5OYW1lOiAgRG9tYWluIHRvIG1hdGNoIGFnYWluc3QgdGhlIHBhcmVudCB3aW5kb3cgbG9jYXRpb25cbiAgICAgICAgICAgIC8vIHBhcmVudFVybDogICBVcmwgb2YgdGhlIHBhcmVudCB3aW5kb3cgdG8gY2hlY2sgKHByb3ZpZGVkIHRvIHVzIGJ1dCBub3QgcmVsaWFibGUpXG4gICAgICAgICAgICAvLyBjYWxsYmFjazogICAgTWV0aG9kIHRvIGNhbGwgd2l0aCB0aGUgcmVzdWx0LCBpdCBzaG91bGQgdGFrZSBvbmx5IG9uZSBib29sZWFuIHBhcmFtZXRlci5cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy50b3AgPT0gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgLy8gTm90IGluIGFuIGlGcmFtZSwgbm8gbmVlZCB0byBnbyBmdXJ0aGVyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGVycm9yKCdUb2tlbiBub3Qgc3VwcGxpZWQgYnkgSGVsbG9TaWduLiBQbGVhc2UgY29udGFjdCBzdXBwb3J0LicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGVycm9yKCdDYWxsYmFjayBub3Qgc3VwcGxpZWQgYnkgSGVsbG9TaWduLiBQbGVhc2UgY29udGFjdCBzdXBwb3J0LicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAoc2tpcERvbWFpblZlcmlmaWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciB3YXJuaW5nTXNnID0gJ0RvbWFpbiB2ZXJpZmljYXRpb24gaGFzIGJlZW4gc2tpcHBlZC4gQmVmb3JlIHJlcXVlc3RpbmcgYXBwcm92YWwgZm9yIHlvdXIgYXBwLCBwbGVhc2UgYmUgc3VyZSB0byB0ZXN0IGRvbWFpbiB2ZXJpZmljYXRpb24gYnkgc2V0dGluZyBza2lwRG9tYWluVmVyaWZpY2F0aW9uIHRvIGZhbHNlLic7XG4gICAgICAgICAgICAgICAgbCh3YXJuaW5nTXNnKTtcbiAgICAgICAgICAgICAgICBhbGVydCh3YXJuaW5nTXNnKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0cyB3YWl0aW5nIGZvciB0aGUgaGVsbG8gYmFjayBtZXNzYWdlXG4gICAgICAgICAgICAgICAgWFdNLnJlY2VpdmUoZnVuY3Rpb24gX2Vuc3VyZVBhcmVudERvbWFpbkNhbGxiYWNrKGV2dCl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQuZGF0YS5pbmRleE9mKCdoZWxsb2JhY2s6JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IGV2dC5kYXRhLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQgPSAocGFydHNbMV0gPT0gdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodmFsaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZG9tYWluTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNlbmQgaGVsbG8gbWVzc2FnZVxuICAgICAgICAgICAgWFdNLnNlbmQoJ2hlbGxvOicgKyB0b2tlbiwgcGFyZW50VXJsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRXaW5kb3dEaW1lbnNpb25zOiBmdW5jdGlvbihjdXN0b21IZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxYID0gZ2V0U2Nyb2xsWCgpO1xuICAgICAgICAgICAgdmFyIHNjcm9sbFkgPSBnZXRTY3JvbGxZKCk7XG4gICAgICAgICAgICB2YXIgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPbGRJRSkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoICAgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCAgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGggICA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCAgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5pc0luUGFnZSAmJiBjdXN0b21IZWlnaHQgPyBjdXN0b21IZWlnaHQgOiBNYXRoLm1heCh0aGlzLk1JTl9IRUlHSFQsIHdpbmRvd0hlaWdodCAtIDYwKTtcblxuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy51eFZlcnNpb24gPiAxID8gTWF0aC5taW4odGhpcy5ERUZBVUxUX1dJRFRILCB3aW5kb3dXaWR0aCAqIHRoaXMuSUZSQU1FX1dJRFRIX1JBVElPKSA6IHRoaXMuREVGQVVMVF9XSURUSDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnd2lkdGhTdHJpbmcnOiAgd2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICAgICdoZWlnaHRTdHJpbmcnOiBoZWlnaHQgKyAncHgnLFxuICAgICAgICAgICAgICAgICdoZWlnaHRSYXcnOiAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbFgnOiAgICAgIHNjcm9sbFgsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbFknOiAgICAgIHNjcm9sbFksXG4gICAgICAgICAgICAgICAgJ3RvcCcgOiAgICAgICAgIE1hdGgubWF4KDAsIHNjcm9sbFkgKyBwYXJzZUludCgod2luZG93SGVpZ2h0IC0gaGVpZ2h0KSAvIDIsIDEwKSkgKyAncHgnLFxuICAgICAgICAgICAgICAgICdsZWZ0JzogICAgICAgICBNYXRoLm1heCgwLCBwYXJzZUludCgod2luZG93V2lkdGggLSB0aGlzLkRFRkFVTFRfV0lEVEgpIC8gMiwgMTApKSArICdweCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TW9iaWxlRGltZW5zaW9uczogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBkaW1zO1xuXG4gICAgICAgICAgICB2YXIgc2NyZWVuV2lkdGggPSBzY3JlZW4ud2lkdGg7XG4gICAgICAgICAgICB2YXIgc2NyZWVuSGVpZ2h0ID0gc2NyZWVuLmhlaWdodDtcbiAgICAgICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgdmFyIGlzUG9ydHJhaXQgPSB3aW5kb3dIZWlnaHQgPiB3aW5kb3dXaWR0aDtcblxuICAgICAgICAgICAgaWYgKGlzUG9ydHJhaXQpIHtcbiAgICAgICAgICAgICAgICBkaW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGhTdHJpbmcnOiB0aGlzLmlzRGVmYXVsdFVYID8gJzEwMHZ3JyA6IHNjcmVlbldpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodFN0cmluZyc6IHRoaXMuaXNEZWZhdWx0VVggPyAnMTAwdmgnIDogJzEwMCUnIC8vIDEwMHZoIG5lZWRlZCBmb3Igb2xkIHNpZ25lciBwYWdlLCBidXQgY3V0cyBvZmYgc29tZSBuZXdlciBVWCBlbGVtZW50c1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIExhbmRzY2FwZVxuICAgICAgICAgICAgICAgIGRpbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aFN0cmluZyc6IHdpbmRvd1dpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodFN0cmluZyc6IHRoaXMuaXNEZWZhdWx0VVggPyAnMTAwdmgnIDogJzEwMCUnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFsd2F5cyBmaWxsIHNjcmVlbiBvbiBtb2JpbGVcbiAgICAgICAgICAgIGRpbXMudG9wID0gJzAnO1xuICAgICAgICAgICAgZGltcy5sZWZ0ID0gJzAnO1xuICAgICAgICAgICAgcmV0dXJuIGRpbXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5BcnJheTogZnVuY3Rpb24odiwgYXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0pRdWVyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkLmluQXJyYXkodiwgYXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8YXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldID09IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNhZmVVcmw6IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2VjdXJpdHk6IHJlbW92ZSBzY3JpcHQgdGFncyBmcm9tIFVSTHMgYmVmb3JlIHByb2Nlc3NpbmdcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvPi9nLCBcIiZndDtcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSFRNTC1EZWNvZGUgdGhlIGdpdmVuIHVybCBpZiBuZWNlc3NhcnksIGJ5IHJlbmRlcmluZyB0byB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVjb2RlZFVybCA9IGVsLmlubmVyVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBGYWxsIGJhY2sgdG8ganVzdCByZXBsYWNpbmcgJyZhbXA7JyBpbiBjYXNlIG9mIGZhaWx1cmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWNvZGVkVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwmYW1wXFw7L2csICcmJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBkZWNvZGVkVXJsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGwoJ0NvdWxkIG5vdCBkZWNvZGUgdXJsOiAnICsgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIHRoYXQgd2lsbCBlbnN1cmUgYW4gZXJyb3IgbWVzc2FnZSBpcyBkaXNwbGF5ZWQsIGVpdGhlciBpbiBjb25zb2xlLmxvZ1xuICAgICAqIG9yIGFzIGEgYnJvd3NlciBhbGVydC5cbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBTdHJpbmcgZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gd3JhcHBlciB0aGF0IGNvbmRpdGlvbmFsbHkgbG9ncyBtZXNzYWdlcyB0byBjb25zb2xlLmxvZy5cbiAgICAgKiBAcGFyYW0gbWVzc2FnZU9iaiBTdHJpbmcgb3IgT2JqZWN0IHRvIGxvZ1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGwobWVzc2FnZU9iaikge1xuICAgICAgICBpZiAoSGVsbG9TaWduLmlzRGVidWdFbmFibGVkICYmIHR5cGVvZiBtZXNzYWdlT2JqICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VPYmopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEdldHRlciBmdW5jdGlvbnMgZm9yIGRldGVybWluaW5nIHNjcm9sbCBwb3NpdGlvbiB0aGF0IHdvcmsgb24gYWxsXG4gICAgICogIGJyb3dzZXJzLlxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsWCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBwb3J0UGFnZU9mZnNldCgpID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogX2lzQ1NTMUNvbXBhdCgpID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsWSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBwb3J0UGFnZU9mZnNldCgpID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogX2lzQ1NTMUNvbXBhdCgpID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pc0NTUzFDb21wYXQoKSB7XG4gICAgICAgIHJldHVybiAoKGRvY3VtZW50LmNvbXBhdE1vZGUgfHwgJycpID09PSAnQ1NTMUNvbXBhdCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zdXBwb3J0UGFnZU9mZnNldCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIEV4cG9ydCB0aGUgSFMgb2JqZWN0XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBIZWxsb1NpZ247XG5cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcbiIsImltcG9ydCBIZWxsb1NpZ24gZnJvbSAnaGVsbG9zaWduLWVtYmVkZGVkJztcblxuY29uc3QgY29uZmlndXJhdGlvbkZvcm1FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ3VyYXRpb24tZm9ybScpO1xuY29uc3QgYXBpS2V5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYXBpLWtleVwiXScpO1xuY29uc3QgY2xpZW50SWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJjbGllbnQtaWRcIl0nKTtcbmNvbnN0IHJlZGlyZWN0VXJsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicmVkaXJlY3QtdXJsXCJdJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgdGhlIGRtZW8gYXBwLlxuICpcbiAqIEBzZWUgc2F2ZUNvbmZpZ1xuICogQHNlZSBjcmVhdGVSZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbmZpZ3VyYXRpb25Gb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBDbG9zZSB0aGUgZXhpc3RpbmcgcmVxdWVzdCBpZiB0aGVyZSBpcyBvbmUuXG4gICAgSGVsbG9TaWduLmNsb3NlKCk7XG5cbiAgICBzYXZlQ29uZmlnKCk7XG4gICAgY3JlYXRlUmVxdWVzdCgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTZW5kcyBhIHJlcXVlc3QgdG8gdGhlIGJhY2tlbmQgdG8gY3JlYXRlIGEgbmV3XG4gKiBzaWduYXR1cmUgcmVxdWVzdCB1c2luZyB0aGUgSGVsbG9TaWduIE5vZGVKUyBTREsgd2l0aFxuICogdGhlIGdpdmVuIEFQSSBrZXkgYW5kIENsaWVudCBJRC5cbiAqXG4gKiBAc2VlIGhhbmRsZUNyZWF0ZVJlcXVlc3RcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUmVxdWVzdCgpIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZ0KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG5cbiAgICBpZiAoYm9keS5zdWNjZXNzKSB7XG4gICAgICBvcGVuUmVxdWVzdChib2R5LmRhdGEuc2lnblVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZy4gRGlkIHlvdSByZW1lbWJlciB0byBlbnRlciB5b3VyIEFQSSBLZXkgYW5kIENsaWVudCBJRD8nKTtcbiAgICB9XG4gIH0pO1xuXG4gIHhoci5vcGVuKCdQT1NUJywgJy9jcmVhdGVTaWduYXR1cmVSZXF1ZXN0JywgdHJ1ZSk7XG4gIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04Jyk7XG5cbiAgeGhyLnNlbmQoXG4gICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgY2xpZW50SWQ6IGNsaWVudElkRWxlbWVudC52YWx1ZSxcbiAgICAgIGFwaUtleTogYXBpS2V5RWxlbWVudC52YWx1ZVxuICAgIH0pXG4gICk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW5kIG9wZW5zIHRoZSBlbWJlZGRlZCBzaWduYXR1cmUgcmVxdWVzdFxuICogd2l0aCB0aGUgc2lnbmF0dXJlIFVSTCBwcm92aWRlZCBieSB0aGUgYmFja2VuZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2lnblVybFxuICovXG5mdW5jdGlvbiBvcGVuUmVxdWVzdChzaWduVXJsKSB7XG4gIEhlbGxvU2lnbi5pbml0KGNsaWVudElkRWxlbWVudC52YWx1ZSk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB1cmw6IHNpZ25VcmwsXG4gICAgYWxsb3dDYW5jZWw6IHRydWUsXG4gICAgZGVidWc6IHRydWUsXG4gICAgc2tpcERvbWFpblZlcmlmaWNhdGlvbjogdHJ1ZSxcbiAgICB1eFZlcnNpb246IDIsXG4gICAgbWVzc2FnZUxpc3RlbmVyKGV2dCkge1xuICAgICAgY29uc29sZS5sb2coZXZ0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2V0IHRoZSByZWRpcmVjdCBVUkwsIGlmIGRlZmluZWQgYnkgdGhlIHVzZXIuXG4gIGlmIChyZWRpcmVjdFVybEVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgb3B0aW9ucy5yZWRpcmVjdFVybCA9IHJlZGlyZWN0VXJsRWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIEhlbGxvU2lnbi5vcGVuKG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFNhdmVzIHRoZSB1c2VyJ3MgY3VycmVudCBjb25maWcgZm9yIGVhc2Ugb2YgdXNlLlxuICovXG5mdW5jdGlvbiBzYXZlQ29uZmlnKCkge1xuICB0cnkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29uZmlnJywgKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhcGlLZXk6IGFwaUtleUVsZW1lbnQudmFsdWUsXG4gICAgICAgIGNsaWVudElkOiBjbGllbnRJZEVsZW1lbnQudmFsdWUsXG4gICAgICAgIHJlZGlyZWN0VXJsOiByZWRpcmVjdFVybEVsZW1lbnQudmFsdWVcbiAgICAgIH0pXG4gICAgKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFVzZXIgbWF5IGhhdmUgcHJpdmF0ZSBicm93c2luZyBlbmFibGVkLlxuICAgIC8vIEZhaWwgc2lsZW50bHkuXG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwb3B1bGF0ZXMgY29uZmlndXJhdGlvbiBmaWVsZHMgZnJvbSBsb2NhbCBzdG9yYWdlLlxuICovXG5mdW5jdGlvbiBsb2FkQ29uZmlnKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7XG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBjb25zdCB7IGFwaUtleSwgY2xpZW50SWQsIHJlZGlyZWN0VXJsIH0gPSBKU09OLnBhcnNlKGNvbmZpZyk7XG5cbiAgICAgIGFwaUtleUVsZW1lbnQudmFsdWUgPSBhcGlLZXk7XG4gICAgICBjbGllbnRJZEVsZW1lbnQudmFsdWUgPSBjbGllbnRJZDtcbiAgICAgIHJlZGlyZWN0VXJsRWxlbWVudC52YWx1ZSA9IHJlZGlyZWN0VXJsO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gVXNlciBtYXkgaGF2ZSBwcml2YXRlIGJyb3dzaW5nIGVuYWJsZWQuXG4gICAgLy8gRmFpbCBzaWxlbnRseS5cbiAgfVxufVxuXG5sb2FkQ29uZmlnKCk7XG5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9