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

/***/ "../lib/embedded.node.js":
/*!*******************************!*\
  !*** ../lib/embedded.node.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(global, function () {
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
      // object to store loaded and loading wasm modules

      /******/

      var installedWasmModules = {};
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
      // object with all compiled WebAssembly.Modules

      /******/

      __webpack_require__.w = {};
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
          "main": "lib/embedded.node.js",
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../demo/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../demo/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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


var _hellosignEmbedded = _interopRequireDefault(__webpack_require__(/*! hellosign-embedded */ "../lib/embedded.node.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configurationFormElement = document.getElementById('configuration-form');
var apiKeyElement = document.querySelector('[name="api-key"]');
var clientIdElement = document.querySelector('[name="client-id"]');
var redirectUrlElement = document.querySelector('[name="redirect-url"]');
var iframeCheckboxElement = document.querySelector('[name="iframe"]');
var embeddedRequestCardElement = document.getElementById('embedded-request-card');
var embeddedRequestLoadingElement = document.getElementById('embedded-request-loading');
var embeddedRequestElement = document.getElementById('embedded-request');
/**
 * Initializes the dmeo app.
 *
 * @see saveConfig
 * @see createRequest
 */

function init() {
  configurationFormElement.addEventListener('submit', function (evt) {
    evt.preventDefault(); // Close the existing request if there is one.

    _hellosignEmbedded.default.close(); // Show or hide the embedded request card and loading
    // element.


    if (iframeCheckboxElement.checked) {
      embeddedRequestCardElement.style.display = 'none';
    } else {
      embeddedRequestCardElement.style.display = 'block';
      embeddedRequestLoadingElement.style.display = 'block';
    }

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

  console.log(signUrl);
  var options = {
    url: signUrl,
    allowCancel: true,
    debug: true,
    skipDomainVerification: true,
    uxVersion: 2,
    messageListener: function messageListener(evt) {
      console.log('Event!', evt);
    }
  }; // Set the redirect URL, if defined by the user.

  if (redirectUrlElement.value.length) {
    options.redirectUrl = redirectUrlElement.value;
  } // Define the container if the "Open in iFrame" checkbox
  // was unchecked by the user.


  if (!iframeCheckboxElement.checked) {
    options.container = embeddedRequestElement;
  } // Hide the loading indicator.


  embeddedRequestLoadingElement.style.display = 'none';

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
      redirectUrl: redirectUrlElement.value,
      iframe: iframeCheckboxElement.checked
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
          redirectUrl = _JSON$parse.redirectUrl,
          iframe = _JSON$parse.iframe;

      apiKeyElement.value = apiKey;
      clientIdElement.value = clientId;
      redirectUrlElement.value = redirectUrl;
      iframeCheckboxElement.checked = iframe;
    }
  } catch (err) {// User may have private browsing enabled.
    // Fail silently.
  }
}

loadConfig();
init();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9IZWxsb1NpZ24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrOi8vSGVsbG9TaWduL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrOi8vSGVsbG9TaWduL3NyYy9lbWJlZGRlZC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldFVybFZhcnMiLCJ2YXJzIiwicGFydHMiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwibSIsImtleSIsInZhbHVlIiwid2luZG93IiwidXJsVmFycyIsImlzRGVidWdFbmFibGVkIiwiZGVidWciLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJYV00iLCJsYXN0SGFzaCIsImludGVydmFsSWQiLCJybUNhbGxiYWNrIiwiZGVmYXVsdERlbGF5IiwiaGFzUG9zdE1lc3NhZ2UiLCJfc2VyaWFsaXplTWVzc2FnZVZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlbmQiLCJtZXNzYWdlIiwidGFyZ2V0VXJsIiwidGFyZ2V0IiwibCIsInNlbGYiLCJrIiwicHVzaCIsImpvaW4iLCJ0IiwiRGF0ZSIsImMiLCJ0YXJnZXRGcmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJwYXJlbnQiLCJyZWNlaXZlIiwiY2FsbGJhY2siLCJzb3VyY2VPcmlnaW4iLCJkZWxheSIsImVycm9yIiwibmFtZSIsImV2dCIsIm9yaWdpbiIsInN1YmRvbWFpblRlc3QiLCJSZWdFeHAiLCJ0ZXN0IiwiY2xlYXJJbnRlcnZhbCIsInVuZGVmaW5lZCIsImhhc2giLCJyZSIsImRhdGEiLCJzZXRJbnRlcnZhbCIsImNhY2hlQnVzdCIsIk1ldGFUYWdIZWxwZXIiLCJzZXQiLCJzYXZlZFZpZXdwb3J0Q29udGVudCIsIl9nZXRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiY29udGVudFBhaXJzIiwiX2V4cGxvZGVQYWlycyIsIl9qb2luUGFpcnMiLCJyZXN0b3JlIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImtleWVkIiwicGFpcnMiLCJtZXRhU3RyaW5nIiwic3BsaXQiLCJvYmoiLCJmb3JFYWNoIiwicGFpciIsImt2IiwiSGVsbG9TaWduIiwiREVGQVVMVF9VWF9WRVJTSU9OIiwiSUZSQU1FX1dJRFRIX1JBVElPIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiTUlOX0hFSUdIVCIsIndyYXBwZXIiLCJpZnJhbWUiLCJvdmVybGF5IiwiY2FuY2VsQnV0dG9uIiwiY2xpZW50SWQiLCJpc09sZElFIiwiaXNGRiIsImlzT3BlcmEiLCJpc01vYmlsZSIsImJhc2VVcmwiLCJjZG5CYXNlVXJsIiwiQ1VMVFVSRVMiLCJGUl9GUiIsIkRFX0RFIiwiU1ZfU0UiLCJaSF9DTiIsIkRBX0RLIiwiTkxfTkwiLCJFU19FUyIsIkVTX01YIiwiUFRfQlIiLCJpbml0Iiwic3VwcG9ydGVkQ3VsdHVyZXMiLCJFTl9VUyIsIkVWRU5UX1NJR05FRCIsIkVWRU5UX0RFQ0xJTkVEIiwiRVZFTlRfQ0FOQ0VMRUQiLCJFVkVOVF9TRU5UIiwiRVZFTlRfVEVNUExBVEVfQ1JFQVRFRCIsIkVWRU5UX0VSUk9SIiwiYXBwQ2xpZW50SWQiLCJvcGVuIiwicGFyYW1zIiwicmVkaXJlY3RVcmwiLCJzYWZlVXJsIiwibWVzc2FnZUxpc3RlbmVyIiwiZnJhbWVVcmwiLCJ1eFZlcnNpb24iLCJpc0RlZmF1bHRVWCIsImhlYWx0aENoZWNrVGltZW91dE1zIiwiaW5kZXhPZiIsInNraXBEb21haW5WZXJpZmljYXRpb24iLCJoaWRlSGVhZGVyIiwid2hpdGVMYWJlbGluZ09wdGlvbnMiLCJpc0luUGFnZSIsImNvbnRhaW5lciIsImJvZHkiLCJpc05hTiIsInBhcnNlSW50IiwiRXJyb3IiLCJ1c2VyQ3VsdHVyZSIsImluQXJyYXkiLCJlbmNvZGVVUkkiLCJ3aW5kb3dEaW1zIiwiZ2V0V2luZG93RGltZW5zaW9ucyIsInN0eWxlcyIsInJlc2l6ZUlGcmFtZSIsIl9yZXNpemVJRnJhbWUiLCJkaW1zIiwic3R5bGUiLCJtb2JpbGVEaW1zIiwiZ2V0TW9iaWxlRGltZW5zaW9ucyIsInNjcm9sbFRvIiwiem9vbVNjYWxlIiwiY2xpZW50V2lkdGgiLCJkZXRlY3Rab29tIiwiX2RldGVjdFpvb20iLCJuZXdab29tU2NhbGUiLCJvbnNjcm9sbCIsIm9ucmVzaXplIiwiaGVpZ2h0UmF3Iiwib25jbGljayIsImNsb3NlIiwicmVtb3ZlQ2hpbGQiLCJpIiwiZSIsInMiLCJ0b3AiLCJmaXhJZnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hlYWx0aENoZWNrVGltZW91dEhhbmRsZSIsInJlcG9ydEVycm9yIiwic2V0VGltZW91dCIsIl9wYXJlbnRXaW5kb3dDYWxsYmFjayIsInNvdXJjZSIsImNsZWFyVGltZW91dCIsInBheWxvYWQiLCJ0eXBlIiwidG9rZW4iLCJldmVudERhdGEiLCJwIiwiZGVzZXJpYWxpemVFdmVudERhdGEiLCJzdHIiLCJwYXJzZSIsInBhcnNlSnNvbiIsImxlbmd0aCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfZmFkZU91dElGcmFtZSIsImN1cnJlbnRPcGFjaXR5Iiwib3BhY2l0eSIsImZpbHRlciIsImRpc3BsYXkiLCJhbmltYXRpb25UaW1lciIsImVycm9yTWVzc2FnZSIsInBhcmVudFVybCIsImVuc3VyZVBhcmVudERvbWFpbiIsImRvbWFpbk5hbWUiLCJ3YXJuaW5nTXNnIiwiYWxlcnQiLCJfZW5zdXJlUGFyZW50RG9tYWluQ2FsbGJhY2siLCJ2YWxpZCIsImN1c3RvbUhlaWdodCIsInNjcm9sbFgiLCJzY3JvbGxZIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJoZWlnaHQiLCJNYXRoIiwibWF4Iiwid2lkdGgiLCJtaW4iLCJzY3JlZW5XaWR0aCIsInNjcmVlbiIsInNjcmVlbkhlaWdodCIsImlzUG9ydHJhaXQiLCJsZWZ0IiwidiIsImFycmF5IiwiaGFzSlF1ZXJ5IiwiJCIsInVybCIsImlubmVySFRNTCIsImRlY29kZWRVcmwiLCJpbm5lclRleHQiLCJWRVJTSU9OIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VPYmoiLCJnZXRTY3JvbGxYIiwiX3N1cHBvcnRQYWdlT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJfaXNDU1MxQ29tcGF0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbFkiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsImNvbXBhdE1vZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29uZmlndXJhdGlvbkZvcm1FbGVtZW50IiwiYXBpS2V5RWxlbWVudCIsImNsaWVudElkRWxlbWVudCIsInJlZGlyZWN0VXJsRWxlbWVudCIsImlmcmFtZUNoZWNrYm94RWxlbWVudCIsImVtYmVkZGVkUmVxdWVzdENhcmRFbGVtZW50IiwiZW1iZWRkZWRSZXF1ZXN0TG9hZGluZ0VsZW1lbnQiLCJlbWJlZGRlZFJlcXVlc3RFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJjaGVja2VkIiwic2F2ZUNvbmZpZyIsImNyZWF0ZVJlcXVlc3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInJlc3BvbnNlVGV4dCIsInN1Y2Nlc3MiLCJvcGVuUmVxdWVzdCIsInNpZ25VcmwiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiYXBpS2V5Iiwib3B0aW9ucyIsImFsbG93Q2FuY2VsIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImVyciIsImxvYWRDb25maWciLCJjb25maWciLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNB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QUE1QixFQUNFaFAsS0FBS0MsU0FBTCxDQUFlO0FBQ2IyTyxjQUFRbEIsY0FBY3hPLEtBRFQ7QUFFYm9GLGdCQUFVcUosZ0JBQWdCek8sS0FGYjtBQUdiaUgsbUJBQWF5SCxtQkFBbUIxTyxLQUhuQjtBQUliaUYsY0FBUTBKLHNCQUFzQks7QUFKakIsS0FBZixDQURGO0FBUUQsR0FURCxDQVNFLE9BQU9lLEdBQVAsRUFBWSxDQUNaO0FBQ0E7QUFDRDtBQUNGO0FBRUQ7Ozs7O0FBR0EsU0FBU0MsVUFBVCxHQUFzQjtBQUNwQixNQUFJO0FBQ0YsUUFBTUMsU0FBU2hRLE9BQU80UCxZQUFQLENBQW9CSyxPQUFwQixDQUE0QixRQUE1QixDQUFmOztBQUVBLFFBQUlELE1BQUosRUFBWTtBQUFBLHdCQUN3Q25QLEtBQUsrSixLQUFMLENBQVdvRixNQUFYLENBRHhDO0FBQUEsVUFDRlAsTUFERSxlQUNGQSxNQURFO0FBQUEsVUFDTXRLLFFBRE4sZUFDTUEsUUFETjtBQUFBLFVBQ2dCNkIsV0FEaEIsZUFDZ0JBLFdBRGhCO0FBQUEsVUFDNkJoQyxNQUQ3QixlQUM2QkEsTUFEN0I7O0FBR1Z1SixvQkFBY3hPLEtBQWQsR0FBc0IwUCxNQUF0QjtBQUNBakIsc0JBQWdCek8sS0FBaEIsR0FBd0JvRixRQUF4QjtBQUNBc0oseUJBQW1CMU8sS0FBbkIsR0FBMkJpSCxXQUEzQjtBQUNBMEgsNEJBQXNCSyxPQUF0QixHQUFnQy9KLE1BQWhDO0FBQ0Q7QUFDRixHQVhELENBV0UsT0FBTzhLLEdBQVAsRUFBWSxDQUNaO0FBQ0E7QUFDRDtBQUNGOztBQUVEQztBQUNBM0osTyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJIZWxsb1NpZ25cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiSGVsbG9TaWduXCJdID0gZmFjdG9yeSgpO1xufSkoZ2xvYmFsLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIHdhc20gbW9kdWxlc1xuIFx0dmFyIGluc3RhbGxlZFdhc21Nb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvYmplY3Qgd2l0aCBhbGwgY29tcGlsZWQgV2ViQXNzZW1ibHkuTW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy53ID0ge307XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VtYmVkZGVkLmpzXCIpO1xuIiwiLyoqXG4gKiBIZWxsb1NpZ24gSlMgbGlicmFyeSBmb3IgZW1iZWRkYWJsZXNcbiAqIENvcHlyaWdodCAoYykgMjAxNiBIZWxsb1NpZ25cbiAqXG4gKiBYV00gLSBDcm9zcy13aW5kb3cgbWVzc2FnaW5nIGluc3BpcmVkIGJ5IEJlbiBBbG1hbidzXG4gKiBqUXVlcnkgcG9zdE1lc3NhZ2UgcGx1Z2luOlxuICogaHR0cDovL2JlbmFsbWFuLmNvbS9wcm9qZWN0cy9qcXVlcnktcG9zdG1lc3NhZ2UtcGx1Z2luL1xuICpcbiAqICAgIENvcHlyaWdodCAoYykgMjAwOSBcIkNvd2JveVwiIEJlbiBBbG1hblxuICogICAgRHVhbCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGFuZCBHUEwgbGljZW5zZXMuXG4gKiAgICBodHRwOi8vYmVuYWxtYW4uY29tL2Fib3V0L2xpY2Vuc2UvXG4gKi9cblxuKGZ1bmN0aW9uKCl7XG5cbiAgICBmdW5jdGlvbiBnZXRVcmxWYXJzKCkge1xuICAgICAgICB2YXIgdmFycyA9IHt9O1xuICAgICAgICB2YXIgcGFydHMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC9bPyZdKyhbXj0mXSspPShbXiZdKikvZ2ksXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24obSwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhcnM7XG4gICAgfVxuXG4gICAgdmFyIHVybFZhcnMgPSBnZXRVcmxWYXJzKCk7XG4gICAgd2luZG93LmlzRGVidWdFbmFibGVkID0gKHVybFZhcnMuZGVidWcgPyB1cmxWYXJzLmRlYnVnID09PSAndHJ1ZScgOiBmYWxzZSk7XG5cbiAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdmFyIFhXTSA9IHtcblxuICAgICAgICBjYWNoZUJ1c3Q6IDAsXG4gICAgICAgIGxhc3RIYXNoOiAwLFxuICAgICAgICBpbnRlcnZhbElkOiAwLFxuICAgICAgICBybUNhbGxiYWNrOiBudWxsLFxuICAgICAgICBkZWZhdWx0RGVsYXk6IDUwMCxcbiAgICAgICAgaGFzUG9zdE1lc3NhZ2U6ICh3aW5kb3dbJ3Bvc3RNZXNzYWdlJ10gIT09IHVuZGVmaW5lZCksXG5cbiAgICAgICAgX3NlcmlhbGl6ZU1lc3NhZ2VWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZW5kOiBmdW5jdGlvbihtZXNzYWdlLCB0YXJnZXRVcmwsIHRhcmdldCkge1xuXG4gICAgICAgICAgICBsKCdYV00gU2VuZDogU2VuZGluZyBNZXNzYWdlLicpO1xuICAgICAgICAgICAgbCgnICB0YXJnZXRVcmw6ICcgKyB0YXJnZXRVcmwpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IFhXTTtcblxuICAgICAgICAgICAgaWYgKCF0YXJnZXRVcmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSB0aGUgbWVzc2FnZSBpbnRvIGEgc3RyaW5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaChrICsgJz0nICsgdGhpcy5fc2VyaWFsaXplTWVzc2FnZVZhbHVlKG1lc3NhZ2Vba10pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbCgnICBtZXNzYWdlOiAnICsgbWVzc2FnZSk7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmhhc1Bvc3RNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGJyb3dzZXIgc3VwcG9ydHMgd2luZG93LnBvc3RNZXNzYWdlLCBzbyBjYWxsIGl0IHdpdGggYSB0YXJnZXRPcmlnaW5cbiAgICAgICAgICAgICAgICAvLyBzZXQgYXBwcm9wcmlhdGVseSwgYmFzZWQgb24gdGhlIHRhcmdldFVybCBwYXJhbWV0ZXIuXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHBhcmVudDtcbiAgICAgICAgICAgICAgICB0YXJnZXRbJ3Bvc3RNZXNzYWdlJ10obWVzc2FnZSwgdGFyZ2V0VXJsLnJlcGxhY2UoIC8oW146XSs6XFwvXFwvW15cXC9dKykuKi8sICckMScgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0YXJnZXRVcmwpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHdpbmRvdy5wb3N0TWVzc2FnZSwgc28gc2V0IHRoZSBsb2NhdGlvblxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSB0YXJnZXQgdG8gdGFyZ2V0VXJsI21lc3NhZ2UuIEEgYml0IHVnbHksIGJ1dCBpdCB3b3JrcyEgQSBjYWNoZVxuICAgICAgICAgICAgICAgIC8vIGJ1c3QgcGFyYW1ldGVyIGlzIGFkZGVkIHRvIGVuc3VyZSB0aGF0IHJlcGVhdCBtZXNzYWdlcyB0cmlnZ2VyIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrLlxuICAgICAgICAgICAgICAgIHZhciB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSArK3NlbGYuY2FjaGVCdXN0O1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXRGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7IC8vIHRhcmdldCBpcyB0aGUgd2luZG93IGlkIGluIHRoaXMgY2FzZVxuICAgICAgICAgICAgICAgIC8vIHRhcmdldFdpbmRvdy5sb2NhdGlvbiA9IHRhcmdldFVybC5yZXBsYWNlKCAvIy4qJC8sICcnICkgKyAnIycgKyB0ICsgYyArICcmJyArIG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgdGFyZ2V0VXJsLnJlcGxhY2UoIC8jLiokLywgJycgKSArICcjJyArIHQgKyBjICsgJyYnICsgbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQubG9jYXRpb24gPSB0YXJnZXRVcmwucmVwbGFjZSggLyMuKiQvLCAnJyApICsgJyMnICsgdCArIGMgKyAnJicgKyBtZXNzYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbCgnWFdNIFNlbmQ6IE1lc3NhZ2Ugc2VudC4nKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWNlaXZlOiBmdW5jdGlvbihjYWxsYmFjaywgc291cmNlT3JpZ2luLCBkZWxheSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGVycm9yKCdjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc291cmNlT3JpZ2luICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGVycm9yKCdzb3VyY2VPcmlnaW4gbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsKCdYV00gUmVjZWl2ZTogSW5pdGlhbGl6ZSByZWNlaXZlci4nKTtcbiAgICAgICAgICAgIGwoJyAgY2FsbGJhY2s6ICcgKyAoY2FsbGJhY2submFtZSA/IGNhbGxiYWNrLm5hbWUgOiAnQW5vbnltb3VzIGZ1bmN0aW9uJykpO1xuICAgICAgICAgICAgbCgnICBzb3VyY2VPcmlnaW46ICcgKyBzb3VyY2VPcmlnaW4pO1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IFhXTTtcblxuICAgICAgICAgICAgaWYgKHNlbGYuaGFzUG9zdE1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBicm93c2VyIHN1cHBvcnRzIHdpbmRvdy5wb3N0TWVzc2FnZSwgdGhlIGNhbGxiYWNrIHdpbGwgYmVcbiAgICAgICAgICAgICAgICAvLyBib3VuZCB0byB0aGUgYWN0dWFsIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB3aW5kb3cucG9zdE1lc3NhZ2UuXG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5ybUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmJpbmQgcHJldmlvdXMgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbJ2FkZEV2ZW50TGlzdGVuZXInXSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ3JlbW92ZUV2ZW50TGlzdGVuZXInXSgnbWVzc2FnZScsIHNlbGYucm1DYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JRTggZG9lc24ndCBzdXBwb3J0IHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ2RldGFjaEV2ZW50J10oJ29ubWVzc2FnZScsIHNlbGYucm1DYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBCaW5kIHRoZSBjYWxsYmFjay4gQSByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIGlzIHN0b3JlZCBmb3IgZWFzZSBvZiB1bmJpbmRpbmdcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ybUNhbGxiYWNrID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbnN1cmUgdGhlIGV2ZW50IGlzIG9yaWdpbmF0aW5nIGZyb20gdGhlIHNvdXJjZSBkb21haW4sIGFjY291bnRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBzdWJkb21haW5zIChldnQub3JpZ2luIG11c3QgZW5kIHdpdGggYSBkb3QgYW5kIHRoZSBzb3VyY2VPcmlnaW4gc3RyaW5nKS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQub3JpZ2luICE9PSBzb3VyY2VPcmlnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ViZG9tYWluVGVzdCA9IG5ldyBSZWdFeHAoJ1tcXC98XFwuXScgKyBzb3VyY2VPcmlnaW4gKyAnJCcsICdpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWJkb21haW5UZXN0LnRlc3QoZXZ0Lm9yaWdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbCgnWFdNIFJlY2VpdmU6IE1lc3NhZ2UgcmVjZWl2ZWQhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsKCcgIGRhdGE6ICcgKyBldnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsKCcgIHNvdXJjZU9yaWdpbjogJyArIHNvdXJjZU9yaWdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhldnQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbJ2FkZEV2ZW50TGlzdGVuZXInXSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ2FkZEV2ZW50TGlzdGVuZXInXSgnbWVzc2FnZScsIHNlbGYucm1DYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9JRTggZG9lc24ndCBzdXBwb3J0IGFkZEV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93WydhdHRhY2hFdmVudCddKCdvbm1lc3NhZ2UnLCBzZWxmLnJtQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgYnJvd3NlciBzdWNrcywgYSBwb2xsaW5nIGxvb3Agd2lsbCBiZSBzdGFydGVkLCBhbmQgdGhlXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgdGhlIGxvY2F0aW9uLmhhc2ggY2hhbmdlcy5cbiAgICAgICAgICAgICAgICBsKCdYV00gUmVjZWl2ZTogU3RhcnRpbmcgcG9sbC4uLicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHNlbGYuaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWxheSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsYXkgPSBzZWxmLmRlZmF1bHREZWxheTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcblxuICAgICAgICAgICAgICAgICAgICBkZWxheSA9IChkZWxheSAhPT0gdW5kZWZpbmVkID8gZGVsYXkgOiAyMDApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmUgPSAvXiM/XFxkKyYvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc2ggIT09IHNlbGYubGFzdEhhc2ggJiYgcmUudGVzdChoYXNoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdEhhc2ggPSBoYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gaGFzaC5yZXBsYWNlKHJlLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCgnWFdNIFJlY2VpdmU6IE1lc3NhZ2UgcmVjZWl2ZWQhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCgnICBkYXRhOiAnICsgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbCgnICBzb3VyY2VPcmlnaW46ICcgKyBzb3VyY2VPcmlnaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHsgZGF0YTogZGF0YSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5hZ2UgdGhlIFwidmlld3BvcnRcIiBtZXRhIHRhZy5cbiAgICAgKiBUaGlzIGFsbG93cyB1cyB0byBkeW5hbWljYWxseSBjb250cm9sIHRoZSBkaXNwbGF5XG4gICAgICogYW5kIHBsYWNlbWVudCBvZiB0aGUgaUZyYW1lIGluIGEgbW9iaWxlIGNvbnRleHQuXG4gICAgICovXG4gICAgdmFyIE1ldGFUYWdIZWxwZXIgPSB7XG5cbiAgICAgICAgc2F2ZWRWaWV3cG9ydENvbnRlbnQ6ICcnLFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsKCdPcHRpbWl6aW5nIHZpZXdwb3J0IG1ldGEgdGFnIGZvciBtb2JpbGUnKTtcblxuICAgICAgICAgICAgLy8gU2F2ZSBvZmYgdGhlIGN1cnJlbnQgdmlld3BvcnQgbWV0YSB0YWcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5zYXZlZFZpZXdwb3J0Q29udGVudCA9IHRoaXMuX2dldEVsZW1lbnQoKS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcblxuICAgICAgICAgICAgLy8gQWRkIG1vYmlsZS1vcHRpbWl6ZWQgc2V0dGluZ3NcbiAgICAgICAgICAgIHZhciBjb250ZW50UGFpcnMgPSB0aGlzLl9leHBsb2RlUGFpcnModGhpcy5zYXZlZFZpZXdwb3J0Q29udGVudCk7XG4gICAgICAgICAgICBjb250ZW50UGFpcnNbJ3dpZHRoJ10gPSAnZGV2aWNlLXdpZHRoJztcbiAgICAgICAgICAgIGNvbnRlbnRQYWlyc1snbWF4aW11bS1zY2FsZSddID0gJzEuMCc7XG4gICAgICAgICAgICBjb250ZW50UGFpcnNbJ3VzZXItc2NhbGFibGUnXSA9ICdubyc7XG4gICAgICAgICAgICB0aGlzLl9nZXRFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdjb250ZW50JywgdGhpcy5fam9pblBhaXJzKGNvbnRlbnRQYWlycykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc3RvcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbCgnUmVzdG9yaW5nIHZpZXdwb3J0IG1ldGEgdGFnJyk7XG4gICAgICAgICAgICB0aGlzLl9nZXRFbGVtZW50KCkuc2V0QXR0cmlidXRlKCdjb250ZW50JywgdGhpcy5zYXZlZFZpZXdwb3J0Q29udGVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2dldEVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXZpZXdwb3J0XScpO1xuICAgICAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnbmFtZScsICd2aWV3cG9ydCcpO1xuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICdpbml0aWFsLXNjYWxlPTEuMCcpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9qb2luUGFpcnM6IGZ1bmN0aW9uKGtleWVkKXtcbiAgICAgICAgICAgIHZhciBwYWlycyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGtleWVkKSB7XG4gICAgICAgICAgICAgICAgcGFpcnMucHVzaChrZXkgKyAnPScgKyBrZXllZFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYWlycy5qb2luKCcsICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9leHBsb2RlUGFpcnM6IGZ1bmN0aW9uKG1ldGFTdHJpbmcpe1xuICAgICAgICAgICAgdmFyIHBhaXJzID0gbWV0YVN0cmluZy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICAgICAgcGFpcnMuZm9yRWFjaChmdW5jdGlvbihwYWlyKSB7XG4gICAgICAgICAgICAgICAgcGFpciA9IHBhaXIudHJpbSgpO1xuICAgICAgICAgICAgICAgIHZhciBrdiA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBvYmpba3ZbMF1dID0ga3ZbMV07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgSGVsbG9TaWduID0ge1xuICAgICAgICBWRVJTSU9OOiByZXF1aXJlKCcuLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uLFxuICAgICAgICBERUZBVUxUX1VYX1ZFUlNJT046IDEsXG4gICAgICAgIElGUkFNRV9XSURUSF9SQVRJTzogMC44LFxuICAgICAgICBERUZBVUxUX1dJRFRIOiA5MDAsXG4gICAgICAgIERFRkFVTFRfSEVJR0hUOiA5MDAsXG4gICAgICAgIE1JTl9IRUlHSFQ6IDQ4MCxcbiAgICAgICAgd3JhcHBlcjogbnVsbCxcbiAgICAgICAgaWZyYW1lOiBudWxsLFxuICAgICAgICBvdmVybGF5OiBudWxsLFxuICAgICAgICBjYW5jZWxCdXR0b246IG51bGwsXG4gICAgICAgIGNsaWVudElkOiBudWxsLFxuICAgICAgICBpc09sZElFOiAoL21zaWUgKDh8N3w2fDUpL2dpLnRlc3QodXNlckFnZW50KSksXG4gICAgICAgIGlzRkY6ICgvZmlyZWZveC9naS50ZXN0KHVzZXJBZ2VudCkpLFxuICAgICAgICBpc09wZXJhOiAoL29wZXJhL2dpLnRlc3QodXNlckFnZW50KSksXG4gICAgICAgIGlzTW9iaWxlOiAoL2FuZHJvaWR8d2Vib3N8aXBob25lfGlwYWR8aXBvZHxibGFja2JlcnJ5fGllbW9iaWxlfG9wZXJhIG1pbmkvaS50ZXN0KHVzZXJBZ2VudCkpLFxuICAgICAgICBiYXNlVXJsOiAnaHR0cHM6Ly93d3cuaGVsbG9zaWduLmNvbScsXG4gICAgICAgIGNkbkJhc2VVcmw6ICdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vY2RuLmhlbGxvZmF4LmNvbScsXG4gICAgICAgIFhXTTogWFdNLFxuXG4gICAgICAgIENVTFRVUkVTOiB7XG4gICAgICAgICAgICBFTl9VUzogJ2VuX1VTJyxcbiAgICAgICAgICAgIEZSX0ZSOiAnZnJfRlInLFxuICAgICAgICAgICAgREVfREU6ICdkZV9ERScsXG4gICAgICAgICAgICBTVl9TRTogJ3N2X1NFJyxcbiAgICAgICAgICAgIFpIX0NOOiAnemhfQ04nLFxuICAgICAgICAgICAgREFfREs6ICdkYV9ESycsXG4gICAgICAgICAgICBOTF9OTDogJ25sX05MJyxcbiAgICAgICAgICAgIEVTX0VTOiAnZXNfRVMnLFxuICAgICAgICAgICAgRVNfTVg6ICdlc19NWCcsXG4gICAgICAgICAgICBQVF9CUjogJ3B0X0JSJyxcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VwcG9ydGVkQ3VsdHVyZXMgPSBbdGhpcy5FTl9VUywgdGhpcy5GUl9GUiwgdGhpcy5ERV9ERSwgdGhpcy5TVl9TRSwgdGhpcy5aSF9DTiwgdGhpcy5EQV9ESywgdGhpcy5OTF9OTCwgdGhpcy5FU19FUywgdGhpcy5FU19NWCwgdGhpcy5QVF9CUl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uaW5pdCgpLFxuXG4gICAgICAgIGlzRGVidWdFbmFibGVkOiB3aW5kb3cuaXNEZWJ1Z0VuYWJsZWQsXG5cbiAgICAgICAgLy8gUFVCTElDIEVWRU5UU1xuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gLSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgICAgQW4gZXJyb3Igb2NjdXJyZWQgaW4gdGhlIGlGcmFtZVxuICAgICAgICAvLyAtIHNpZ25hdHVyZV9yZXF1ZXN0X3NpZ25lZCAgICAgICBUaGUgc2lnbmF0dXJlIHJlcXVlc3Qgd2FzIHNpZ25lZFxuICAgICAgICAvLyAtIHNpZ25hdHVyZV9yZXF1ZXN0X2NhbmNlbGVkICAgICBUaGUgdXNlciBjbG9zZWQgdGhlIGlGcmFtZSBiZWZvcmUgY29tcGxldGluZ1xuXG5cbiAgICAgICAgLy8gVEhFU0UgRVZFTlQgQ09ERVMgQVJFIEFDVFVBTExZIFVTRUQgSU4gVFdPIFBMQUNFU1xuICAgICAgICAvLyBJRiBZT1UgQ0hBTkdFIFRIRU0gTUFLRSBTVVJFIFRPIENIQU5HRSBUSEUgT1RIRVJTXG4gICAgICAgIC8vIElOIEhGQUNUSU9OUy5QSFAgVE8gU1RBWSBDT05TSVNURU5ULlxuICAgICAgICBFVkVOVF9TSUdORUQ6ICdzaWduYXR1cmVfcmVxdWVzdF9zaWduZWQnLFxuICAgICAgICBFVkVOVF9ERUNMSU5FRDogJ3NpZ25hdHVyZV9yZXF1ZXN0X2RlY2xpbmVkJyxcbiAgICAgICAgRVZFTlRfQ0FOQ0VMRUQ6ICdzaWduYXR1cmVfcmVxdWVzdF9jYW5jZWxlZCcsXG4gICAgICAgIEVWRU5UX1NFTlQ6ICdzaWduYXR1cmVfcmVxdWVzdF9zZW50JyxcbiAgICAgICAgRVZFTlRfVEVNUExBVEVfQ1JFQVRFRDogJ3RlbXBsYXRlX2NyZWF0ZWQnLFxuICAgICAgICBFVkVOVF9FUlJPUjogJ2Vycm9yJyxcblxuXG4gICAgICAgIC8vICAtLS0tICBQVUJMSUMgTUVUSE9EUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICBpbml0OiBmdW5jdGlvbihhcHBDbGllbnRJZCkge1xuICAgICAgICAgICAgdGhpcy5jbGllbnRJZCA9IGFwcENsaWVudElkO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9wZW46IGZ1bmN0aW9uKHBhcmFtcykge1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIFBBUkFNRVRFUlM6XG4gICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyAtIHVybCAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcuIFRoZSB1cmwgdG8gb3BlbiBpbiB0aGUgY2hpbGQgZnJhbWVcbiAgICAgICAgICAgIC8vIC0gcmVkaXJlY3RVcmwgICAgICAgICAgICAgIFN0cmluZy4gV2hlcmUgdG8gZ28gYWZ0ZXIgdGhlIHNpZ25hdHVyZSBpcyBjb21wbGV0ZWRcbiAgICAgICAgICAgIC8vIC0gYWxsb3dDYW5jZWwgICAgICAgICAgICAgIEJvb2xlYW4uIFdoZXRoZXIgYSBjYW5jZWwgYnV0dG9uIHNob3VsZCBiZSBkaXNwbGF5ZWQgKGRlZmF1bHQgPSB0cnVlKVxuICAgICAgICAgICAgLy8gLSBtZXNzYWdlTGlzdGVuZXIgICAgICAgICAgRnVuY3Rpb24uIEEgbGlzdGVuZXIgZm9yIFgtd2luZG93IG1lc3NhZ2VzIGNvbWluZyBmcm9tIHRoZSBjaGlsZCBmcmFtZVxuICAgICAgICAgICAgLy8gLSB1c2VyQ3VsdHVyZSAgICAgICAgICAgICAgSGVsbG9TaWduLkNVTFRVUkUuIE9uZSBvZiB0aGUgSGVsbG9TaWduLkNVTFRVUkVTLnN1cHBvcnRlZEN1bHR1cmVzIChkZWZhdWx0ID0gSGVsbG9TaWduLkNVTFRVUkVTLkVOX1VTKVxuICAgICAgICAgICAgLy8gLSBkZWJ1ZyAgICAgICAgICAgICAgICAgICAgQm9vbGVhbi4gV2hlbiB0cnVlLCBkZWJ1Z2dpbmcgc3RhdGVtZW50cyB3aWxsIGJlIHdyaXR0ZW4gdG8gdGhlIGNvbnNvbGUgKGRlZmF1bHQgPSBmYWxzZSlcbiAgICAgICAgICAgIC8vIC0gc2tpcERvbWFpblZlcmlmaWNhdGlvbiAgIEJvb2xlYW4uIFdoZW4gdHJ1ZSwgZG9tYWluIHZlcmlmaWNhdGlvbiBzdGVwIHdpbGwgYmUgc2tpcHBlZCBpZiBhbmQgb25seSBpZiB0aGUgU2lnbmF0dXJlIFJlcXVlc3Qgd2FzIGNyZWF0ZWQgd2l0aCB0ZXN0X21vZGU9MSAoZGVmYXVsdCA9IGZhbHNlKVxuICAgICAgICAgICAgLy8gLSBjb250YWluZXIgICAgICAgICAgICAgICAgRE9NIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGlmcmFtZSBvbiB0aGUgcGFnZSAoZGVmYXVsdCA9IGRvY3VtZW50LmJvZHkpXG4gICAgICAgICAgICAvLyAtIGhlaWdodCAgICAgICAgICAgICAgICAgICBIZWlnaHQgb2YgdGhlIGlGcmFtZSAob25seSBhcHBsaWNhYmxlIHdoZW4gYSBjb250YWluZXIgaXMgc3BlY2lmaWVkKVxuICAgICAgICAgICAgLy8gLSBoaWRlSGVhZGVyICAgICAgICAgICAgICAgQm9vbGVhbi4gV2hlbiB0cnVlLCB0aGUgaGVhZGVyIHdpbGwgYmUgaGlkZGVuIChkZWZhdWx0ID0gZmFsc2UpLiBUaGlzIGlzIG9ubHkgZnVuY3Rpb25hbCBmb3IgY3VzdG9tZXJzIHdpdGggZW1iZWRkZWQgYnJhbmRpbmcgZW5hYmxlZC5cbiAgICAgICAgICAgIC8vIC0gdXhWZXJzaW9uICAgICAgICAgICAgICAgIEludGVnZXIuIFRoZSB2ZXJzaW9uIG9mIHRoZSBlbWJlZGRlZCB1c2VyIGV4cGVyaWVuY2UgdG8gZGlzcGxheSB0byBzaWduZXJzICgxID0gbGVnYWN5LCAyID0gcmVzcG9uc2l2ZSkuIFRoaXMgb3B0aW9uIGlzIG9ubHkgaG9ub3JlZCBpZiB5b3VyIGFjY291bnQgaGFzIGFjY2Vzc2VkIHRoZSBBUEkgcHJpb3IgdG8gTm92IDE0LCAyMDE1LlxuICAgICAgICAgICAgLy8gLSByZXF1ZXN0ZXIgICAgICAgICAgICAgICAgU3RyaW5nLiBUaGUgZW1haWwgb2YgdGhlIHBlcnNvbiBpc3N1aW5nIGEgc2lnbmF0dXJlIHJlcXVlc3QuIFJlcXVpcmVkIGZvciBhbGxvd2luZyAnTWUgKyBPdGhlcnMnIHJlcXVlc3RzXG4gICAgICAgICAgICAvLyAtIHdoaXRlTGFiZWxpbmdPcHRpb25zICAgICBPYmplY3QuIEFuIGFzc29jaWF0aXZlIGFycmF5IHRvIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZSBhcHAncyBzaWduZXIgcGFnZVxuICAgICAgICAgICAgLy8gLSBoZWFsdGhDaGVja1RpbWVvdXRNcyAgICAgSW50ZWdlci4gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBmb3IgYSByZXNwb25zZSBmcm9tIHRoZSBpZnJhbWUuIElmIG5vIHJlc3BvbnNlIGFmdGVyIHRoYXQgdGltZSB0aGUgaWZyYW1lIHdpbGwgYmUgY2xvc2VkLiAxNTAwMCBtaWxsaXNlY29uZHMgaXMgcmVjb21tZW5kZWQuXG5cbiAgICAgICAgICAgIHZhciByZWRpcmVjdFVybCA9IHRoaXMuc2FmZVVybChwYXJhbXNbJ3JlZGlyZWN0VXJsJ10pO1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VMaXN0ZW5lciA9IHBhcmFtc1snbWVzc2FnZUxpc3RlbmVyJ107XG4gICAgICAgICAgICB2YXIgZnJhbWVVcmwgPSB0aGlzLnNhZmVVcmwocGFyYW1zWyd1cmwnXSk7XG4gICAgICAgICAgICB0aGlzLnV4VmVyc2lvbiA9IHBhcmFtc1sndXhWZXJzaW9uJ10gfHwgdGhpcy5ERUZBVUxUX1VYX1ZFUlNJT047XG4gICAgICAgICAgICB0aGlzLmlzRGVmYXVsdFVYID0gKHRoaXMudXhWZXJzaW9uID09PSB0aGlzLkRFRkFVTFRfVVhfVkVSU0lPTik7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aENoZWNrVGltZW91dE1zID0gcGFyYW1zWydoZWFsdGhDaGVja1RpbWVvdXRNcyddO1xuXG4gICAgICAgICAgICBpZiAodGhpcy51eFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICBmcmFtZVVybCArPSAoZnJhbWVVcmwuaW5kZXhPZignPycpID4gMCA/ICcmJyA6ICc/JykgKyAndXhfdmVyc2lvbj0nICsgdGhpcy51eFZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1snZGVidWcnXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVidWdFbmFibGVkID0gKHBhcmFtc1snZGVidWcnXSA9PT0gdHJ1ZSB8fCBwYXJhbXNbJ2RlYnVnJ10gPT0gJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zWydza2lwRG9tYWluVmVyaWZpY2F0aW9uJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwRG9tYWluVmVyaWZpY2F0aW9uID0gKHBhcmFtc1snc2tpcERvbWFpblZlcmlmaWNhdGlvbiddID09PSB0cnVlIHx8IHBhcmFtc1snc2tpcERvbWFpblZlcmlmaWNhdGlvbiddID09ICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1snaGlkZUhlYWRlciddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUhlYWRlciA9IChwYXJhbXNbJ2hpZGVIZWFkZXInXSA9PT0gdHJ1ZSB8fCBwYXJhbXNbJ2hpZGVIZWFkZXInXSA9PSAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbJ3doaXRlTGFiZWxpbmdPcHRpb25zJ10gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZUxhYmVsaW5nT3B0aW9ucyA9IEpTT04uc3RyaW5naWZ5KHBhcmFtc1snd2hpdGVMYWJlbGluZ09wdGlvbnMnXSk7XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZUxhYmVsaW5nT3B0aW9ucyA9IHRoaXMud2hpdGVMYWJlbGluZ09wdGlvbnMucmVwbGFjZSgvIy9nLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNbJ3doaXRlTGFiZWxpbmdPcHRpb25zJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgbChcIkludmFsaWQgd2hpdGUgbGFiZWxpbmcgb3B0aW9ucyBzdXBwbGllZCwgb3B0aW9uIHdpbGwgYmUgaWdub3JlZDogXCIgKyBwYXJhbXNbJ3doaXRlTGFiZWxpbmdPcHRpb25zJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0luUGFnZSA9IChwYXJhbXNbJ2NvbnRhaW5lciddICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBwYXJhbXNbJ2NvbnRhaW5lciddIHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5QYWdlICYmIHBhcmFtc1snaGVpZ2h0J10gIT09IHVuZGVmaW5lZCAmJiAoaXNOYU4ocGFyc2VJbnQocGFyYW1zWydoZWlnaHQnXSwgMTApKSB8fCBwYXJhbXNbJ2hlaWdodCddIDw9IDApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGlGcmFtZSBoZWlnaHQgKCcgKyBwYXJhbXNbJ2hlaWdodCddICsgJykgaXQgbXVzdCBiZSBhIHZhbGlkIHBvc2l0aXZlIG51bWJlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsKCdPcGVuaW5nIEhlbGxvU2lnbiBlbWJlZGRlZCBpRnJhbWUgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtczonKTtcbiAgICAgICAgICAgIGwocGFyYW1zKTtcblxuICAgICAgICAgICAgaWYgKCFmcmFtZVVybCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXJsIHNwZWNpZmllZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdXNlckN1bHR1cmUgPSB0eXBlb2YgcGFyYW1zWyd1c2VyQ3VsdHVyZSddID09PSAndW5kZWZpbmVkJyA/IHRoaXMuQ1VMVFVSRVMuRU5fVVMgOiBwYXJhbXNbJ3VzZXJDdWx0dXJlJ107XG4gICAgICAgICAgICBpZiAodGhpcy5pbkFycmF5KHVzZXJDdWx0dXJlLCB0aGlzLkNVTFRVUkVTLnN1cHBvcnRlZEN1bHR1cmVzKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdXNlckN1bHR1cmUgc3BlY2lmaWVkOiAnICsgdXNlckN1bHR1cmUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcmFtZVVybCArPSAoZnJhbWVVcmwuaW5kZXhPZignPycpID4gMCA/ICcmJyA6ICc/Jyk7XG4gICAgICAgICAgICBpZiAocmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVVybCArPSAncmVkaXJlY3RfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RVcmwpICsgJyYnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnJhbWVVcmwgKz0gJ3BhcmVudF91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1xcPy4qLywgJycpKSArICcmJztcbiAgICAgICAgICAgIGZyYW1lVXJsICs9ICh0aGlzLnNraXBEb21haW5WZXJpZmljYXRpb24gPT09IHRydWUgPyAnc2tpcF9kb21haW5fdmVyaWZpY2F0aW9uPTEmJyA6ICcnKTtcbiAgICAgICAgICAgIGZyYW1lVXJsICs9ICdjbGllbnRfaWQ9JyArIHRoaXMuY2xpZW50SWQgKyAnJic7XG4gICAgICAgICAgICBmcmFtZVVybCArPSAodHlwZW9mIHBhcmFtc1sncmVxdWVzdGVyJ10gIT09ICd1bmRlZmluZWQnID8gJ3JlcXVlc3Rlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1sncmVxdWVzdGVyJ10pICsgJyYnIDogJycpO1xuICAgICAgICAgICAgZnJhbWVVcmwgKz0gJ3VzZXJfY3VsdHVyZT0nICsgdXNlckN1bHR1cmU7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0RlYnVnRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGZyYW1lVXJsICs9ICcmZGVidWc9dHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5oaWRlSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVVcmwgKz0gJyZoaWRlSGVhZGVyPXRydWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMud2hpdGVMYWJlbGluZ09wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVVybCArPSAnJndoaXRlX2xhYmVsaW5nX29wdGlvbnM9JyArIGVuY29kZVVSSSh0aGlzLndoaXRlTGFiZWxpbmdPcHRpb25zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnJhbWVVcmwgKz0gJyZqc192ZXJzaW9uPScgKyB0aGlzLlZFUlNJT047XG5cbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSBmcmFtZVVybC5yZXBsYWNlKC8oW146XSs6XFwvXFwvW15cXC9dKykuKi8sICckMScpO1xuICAgICAgICAgICAgdmFyIHdpbmRvd0RpbXMgPSB0aGlzLmdldFdpbmRvd0RpbWVuc2lvbnMocGFyYW1zWydoZWlnaHQnXSk7XG4gICAgICAgICAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgICAgICAgICAgICdvdmVybGF5Jzoge1xuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgICAgICAndG9wJzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICdib3R0b20nOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogJzBweCcsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogOTk5NyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMjIyJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjQsXG4gICAgICAgICAgICAgICAgICAgICcta2h0bWwtb3BhY2l0eSc6IDAuNCxcbiAgICAgICAgICAgICAgICAgICAgJy1tb3otb3BhY2l0eSc6IDAuNCxcbiAgICAgICAgICAgICAgICAgICAgJ2ZpbHRlcic6ICdhbHBoYShvcGFjaXR5PTQwKScsXG4gICAgICAgICAgICAgICAgICAgICctbXMtZmlsdGVyJzogJ3Byb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTQwKSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICd3cmFwcGVyJzogdGhpcy5pc0luUGFnZSA/IHt9IDoge1xuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAndG9wJzogd2luZG93RGltcy50b3AsXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0Jzogd2luZG93RGltcy5sZWZ0LFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6IDk5OThcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdpZnJhbWUnOiB0aGlzLmlzSW5QYWdlID8ge30gOiB7XG4gICAgICAgICAgICAgICAgICAgICdib3JkZXInOiAnMXB4IHNvbGlkICM1MDUwNTAnLFxuICAgICAgICAgICAgICAgICAgICAnYm94LXNoYWRvdyc6ICcwcHggMnB4IDE4cHggMnB4ICM2NjYnLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjRkZGJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiA5OTk4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnY2FuY2VsQnV0dG9uJzoge1xuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAndG9wJzogJy0xM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3JpZ2h0JzogJy0xM3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzMwcHgnLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIHRoaXMuY2RuQmFzZVVybCArICcvY3NzL2ZhbmN5Ym94L2ZhbmN5Ym94LnBuZyknLFxuICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICctNDBweCAwcHgnLFxuICAgICAgICAgICAgICAgICAgICAnY3Vyc29yJzogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6IDk5OTlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgcmVzaXplSUZyYW1lID0gZnVuY3Rpb24gX3Jlc2l6ZUlGcmFtZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pZnJhbWUpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZGltcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaW1zID0gc2VsZi5nZXRNb2JpbGVEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaW1zID0gc2VsZi5nZXRXaW5kb3dEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLndyYXBwZXIuc3R5bGVbJ3RvcCddID0gZGltcy50b3A7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYud3JhcHBlci5zdHlsZVsnbGVmdCddID0gZGltcy5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICBzZWxmLndyYXBwZXIuc3R5bGVbJ3dpZHRoJ10gPSBkaW1zLndpZHRoU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlmcmFtZS5zdHlsZVsnaGVpZ2h0J10gPSBkaW1zLmhlaWdodFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pZnJhbWUuc3R5bGVbJ3dpZHRoJ10gPSBkaW1zLndpZHRoU3RyaW5nO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudXhWZXJzaW9uID4gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSW5QYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkanVzdCB0aGUgaUZyYW1lIHN0eWxlIHRvIGZpdCB0aGUgaW4tcGFnZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWyd3cmFwcGVyJ11bJ3dpZHRoJ10gPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snd3JhcHBlciddWydoZWlnaHQnXSA9IHdpbmRvd0RpbXMuaGVpZ2h0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWyd3aWR0aCddID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWydoZWlnaHQnXSA9IHdpbmRvd0RpbXMuaGVpZ2h0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWydib3JkZXInXSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnYm94LXNoYWRvdyddID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2NhbmNlbEJ1dHRvbiddWydkaXNwbGF5J10gPSAnbm9uZSc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBpT1MgaGFjay4gIEFwcGFyZW50bHkgaU9TIGlnbm9yZXMgd2lkdGhzIHNldFxuICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIGEgbm9uLXBpeGVsIHZhbHVlLCB3aGljaCBtZWFucyBpRnJhbWVzIGdldCBleHBhbmRlZFxuICAgICAgICAgICAgICAgICAgICAvLyB0byB0aGUgZnVsbCB3aWR0aCBvZiB0aGVpciBjb250ZW50LiAgU2V0dGluZyBhIHBpeGVsXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlIGFuZCB0aGVuIHVzaW5nIGBtaW4td2lkdGhgIGlzIHRoZSB3b3JrYXJvdW5kIGZvclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLlxuICAgICAgICAgICAgICAgICAgICAvLyBTZWU6ICBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMDgzNDYyL2hvdy10by1nZXQtYW4taWZyYW1lLXRvLWJlLXJlc3BvbnNpdmUtaW4taW9zLXNhZmFyaVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnd2lkdGgnXSA9ICcxcHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnbWluLXdpZHRoJ10gPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9iaWxlRGltcyA9IHRoaXMuZ2V0TW9iaWxlRGltZW5zaW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGp1c3QgdGhlIGlGcmFtZSBzdHlsZSB0byBmaXQgdGhlIHdob2xlIHNjcmVlblxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3dyYXBwZXInXVsncG9zaXRpb24nXSA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snd3JhcHBlciddWyd0b3AnXSA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWyd3cmFwcGVyJ11bJ2xlZnQnXSA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWyd3cmFwcGVyJ11bJ3dpZHRoJ10gPSBtb2JpbGVEaW1zLndpZHRoU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3dyYXBwZXInXVsnaGVpZ2h0J10gPSBtb2JpbGVEaW1zLmhlaWdodFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsncG9zaXRpb24nXSA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snaWZyYW1lJ11bJ3RvcCddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnbGVmdCddID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnd2lkdGgnXSA9IG1vYmlsZURpbXMud2lkdGhTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snaWZyYW1lJ11bJ2hlaWdodCddID0gbW9iaWxlRGltcy5oZWlnaHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snaWZyYW1lJ11bJ2JvcmRlciddID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWydib3gtc2hhZG93J10gPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snY2FuY2VsQnV0dG9uJ11bJ2Rpc3BsYXknXSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIG92ZXJsYXlcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0luUGFnZSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcsICdoc0VtYmVkZGVkT3ZlcmxheScpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IGJsb2NrOycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBCdWlsZCB0aGUgd3JhcHBlclxuICAgICAgICAgICAgaWYgKCF0aGlzLndyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoc0VtYmVkZGVkV3JhcHBlcicpO1xuXG4gICAgICAgICAgICAgICAgLy8gSGFjay4gIFdlIG5lZWQgdGhpcyBvbiBtb2JpbGUgYmVmb3JlIHdlIGluc2VydCB0aGUgRE9NXG4gICAgICAgICAgICAgICAgLy8gZWxlbWVudCwgb3RoZXJ3aXNlIHRoZSBtb2RhbCBhcHBlYXJzIGFib3ZlIHRoZSBmb2xkXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0luUGFnZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUgJiYgdGhpcy5pc0RlZmF1bHRVWCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbW9iaWxlIGRldmljZSwgcG9sbCB0aGUgd2luZG93IGRpbWVuc2lvbnMgdG8gc2VlXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB6b29tIHNjYWxlIGNoYW5nZXMgYW5kIHJlc2l6ZSB0aGUgaUZyYW1lLiBUaGlzIHByZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB1c2VyIGZyb20gem9vbWluZyBhbmQgZ2V0dGluZyBpbnRvIGEgc3RhdGUgd2hlcmUgdGhleSBjYW4ndFxuICAgICAgICAgICAgICAgICAgICAvLyBzdWJtaXQgdGhlIGVtYmVkZGVkIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvb21TY2FsZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRldGVjdFpvb20gPSBmdW5jdGlvbiBfZGV0ZWN0Wm9vbSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdab29tU2NhbGUgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoem9vbVNjYWxlICE9PSBuZXdab29tU2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6b29tU2NhbGUgPSBuZXdab29tU2NhbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplSUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IGRldGVjdFpvb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSB3aW5kb3cgaXMgcmVzaXplZCwgYWxzbyByZXNpemUgdGhlIGlmcmFtZSBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogT25seSBkbyB0aGlzIHdoZW4gdGhlIGlGcmFtZSBpcyBkaXNwbGF5ZWQgYXMgYSBwb3B1cCwgaXQgZG9lcyBub3QgcmVhbGx5IG1ha2Ugc2Vuc2Ugd2hlbiBpdCdzIGluLXBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gQWxzbyB1c2VkIGZvciBuZXcgbW9iaWxlIHV4XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUlGcmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBpRnJhbWVcbiAgICAgICAgICAgIGlmICghdGhpcy5pZnJhbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaHNFbWJlZGRlZEZyYW1lJyk7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuaWZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgZnJhbWVVcmwpO1xuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKCdzY3JvbGxpbmcnLCAnbm8nKTsgLy8gVGhpcyBuZWVkcyB0byBzdGF5IGFzICdubycgb3IgZWxzZSBpUGFkcywgZXRjLiBnZXQgYnJva2VuXG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2ZyYW1lYm9yZGVyJywgJzAnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGVmYXVsdFVYKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuREVGQVVMVF9XSURUSCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgd2luZG93RGltcy5oZWlnaHRSYXcpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBEZXRlY3RpbmcgJ2VtYmVkZGVkU2lnbicgaW4gdGhlIGZyYW1lVXJsIGlzIGEgaGFjay4gQ2xlYW5cbiAgICAgICAgICAgIC8vIHRoaXMgdXAgb25jZSB0aGUgZW1iZWRkZWQgY2xvc2UgYnV0dG9uIGhhcyBiZWVuIGltcGxlbWVudGVkIGZvclxuICAgICAgICAgICAgLy8gZW1iZWRkZWQgcmVxdWVzdGluZyBhbmQgdGVtcGxhdGVzLlxuICAgICAgICAgICAgaWYgKGZyYW1lVXJsLmluZGV4T2YoJ2VtYmVkZGVkU2lnbicpID09PSAtMSB8fCBwYXJhbXNbJ3V4VmVyc2lvbiddICE9IG51bGwgJiYgcGFyYW1zWyd1eFZlcnNpb24nXSA8IDIpIHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5QYWdlICYmIChwYXJhbXNbJ2FsbG93Q2FuY2VsJ10gPT09IHRydWUgfHwgcGFyYW1zWydhbGxvd0NhbmNlbCddID09PSB1bmRlZmluZWQpICYmICF0aGlzLmNhbmNlbEJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hzRW1iZWRkZWRDYW5jZWwnKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaHJlZicsICdqYXZhc2NyaXB0OjsnKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIGlGcmFtZVxuICAgICAgICAgICAgICAgICAgICAgIEhlbGxvU2lnbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbmQgJ2NhbmNlbCcgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbCgnUmVwb3J0aW5nIGNhbmNlbGF0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiBIZWxsb1NpZ24uRVZFTlRfQ0FOQ0VMRURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNhbmNlbEJ1dHRvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSBpZiAoIXBhcmFtc1snYWxsb3dDYW5jZWwnXSAmJiB0aGlzLmNhbmNlbEJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLnJlbW92ZUNoaWxkKHRoaXMuY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgaW5saW5lIHN0eWxpbmdcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gc3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gdGhpc1trXTtcbiAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBzdHlsZXNba10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVbaV0gPSBzdHlsZXNba11baV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIC0gZXhjZXB0aW9ucyBnZXQgdGhyb3duIHdoZW4gdGhlIGdpdmVuIHN0eWxlIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2FuY2VsQnV0dG9uICYmICh0aGlzLmlzRkYgfHwgdGhpcy5pc09wZXJhKSkge1xuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggaXMgd2VpcmQgd2l0aCBiZyBpbWFnZXNcbiAgICAgICAgICAgICAgICB2YXIgcyA9IHRoaXMuY2FuY2VsQnV0dG9uLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBzICs9IChzID8gJzsgJyA6ICcnKTtcbiAgICAgICAgICAgICAgICBzICs9ICdiYWNrZ3JvdW5kLWltYWdlOiAnICsgc3R5bGVzLmNhbmNlbEJ1dHRvblsnYmFja2dyb3VuZC1pbWFnZSddICsgJzsgJztcbiAgICAgICAgICAgICAgICBzICs9ICdiYWNrZ3JvdW5kLXBvc2l0aW9uOiAnICsgc3R5bGVzLmNhbmNlbEJ1dHRvblsnYmFja2dyb3VuZC1wb3NpdGlvbiddICsgJzsnO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5QYWdlICYmICghdGhpcy5pc01vYmlsZSB8fCB0aGlzLmlzRGVmYXVsdFVYKSkge1xuICAgICAgICAgICAgICAgIC8vIFJ1biByZXNpemVJRnJhbWUgdG8gbWFrZSBzdXJlIGl0IGZpdHMgYmVzdCBmcm9tIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICAgICAgICByZXNpemVJRnJhbWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUgJiYgIXRoaXMuaXNEZWZhdWx0VVggJiYgd2luZG93ID09PSB3aW5kb3cudG9wKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBzZXQgdGhlIG1ldGEgdGFncyBmb3IgdGhlIHRvcCB3aW5kb3dcbiAgICAgICAgICAgICAgICBNZXRhVGFnSGVscGVyLnNldCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSAmJiAhdGhpcy5pc0luUGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZml4SWZyYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuZml4SWZyYW1lKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZml4SWZyYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGlmcmFtZSBpZiBwYWdlIGZhaWxzIHRvIGluaXRpYWxpemUgd2l0aGluIDE1IHNlY29uZHNcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWx0aENoZWNrVGltZW91dE1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGVhbHRoQ2hlY2tUaW1lb3V0SGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnU2lnbmVyIHBhZ2UgZmFpbGVkIHRvIGluaXRpYWxpemUgd2l0aGluICcgKyBzZWxmLmhlYWx0aENoZWNrVGltZW91dE1zICsgJyBtaWxsaXNlY29uZHMuJ1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlcG9ydEVycm9yKG1lc3NhZ2UsIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5oZWFsdGhDaGVja1RpbWVvdXRNcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgbWVzc2FnZXMgZnJvbSB0aGUgaUZyYW1lXG4gICAgICAgICAgICBYV00ucmVjZWl2ZShmdW5jdGlvbiBfcGFyZW50V2luZG93Q2FsbGJhY2soZXZ0KXtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gZXZ0LnNvdXJjZSB8fCAnaHNFbWJlZGRlZEZyYW1lJztcblxuICAgICAgICAgICAgICAgIGlmIChldnQuZGF0YSA9PT0gJ2luaXRpYWxpemUnICYmIHBhcmFtc1sndXhWZXJzaW9uJ10gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmhlYWx0aENoZWNrVGltZW91dE1zKSBjbGVhclRpbWVvdXQoc2VsZi5faGVhbHRoQ2hlY2tUaW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGNvbnRhaW5lciBmcm9tIHBheWxvYWQgdG8gcHJldmVudCBjaXJjdWxhciByZWZlcmVuY2UgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGF5bG9hZC5jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIFhXTS5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogJ2VtYmVkZGVkQ29uZmlnJywgcGF5bG9hZDogcGF5bG9hZCB9KSwgZXZ0Lm9yaWdpbiwgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5kYXRhID09ICdjbG9zZScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgaUZyYW1lXG4gICAgICAgICAgICAgICAgICAgIEhlbGxvU2lnbi5jbG9zZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlTGlzdGVuZXIgJiYgcGFyYW1zWyd1eFZlcnNpb24nXSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogSGVsbG9TaWduLkVWRU5UX0NBTkNFTEVEXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmRhdGEgPT0gJ2RlY2xpbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIGlGcmFtZVxuICAgICAgICAgICAgICAgICAgICBIZWxsb1NpZ24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6IEhlbGxvU2lnbi5FVkVOVF9ERUNMSU5FRFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5kYXRhID09ICd1c2VyLWRvbmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIGlGcmFtZVxuICAgICAgICAgICAgICAgICAgICBIZWxsb1NpZ24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5kYXRhLmluZGV4T2YoJ2hlbGxvOicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlbGxvIG1lc3NhZ2UgLSBFeHRyYWN0IHRva2VuIGFuZCBzZW5kIGl0IGJhY2tcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gZXZ0LmRhdGEuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gcGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgIFhXTS5zZW5kKCdoZWxsb2JhY2s6JyArIHRva2VuLCBmcmFtZVVybCwgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VMaXN0ZW5lciAmJiBldnQuZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvcndhcmQgdG8gbWVzc2FnZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnREYXRhID0ge307XG4gICAgICAgICAgICAgICAgICAgIHZhciBwLCBwYWlycyA9IGV2dC5kYXRhLnNwbGl0KCcmJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVjdXJzaXZlIGhlbHBlciBmdW5jdGlvbiB0byBkZXNlcmlhbGl6ZSB0aGUgZXZlbnQgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2VyaWFsaXplRXZlbnREYXRhID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gc3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYWZlbHkgcGFyc2UgdGhlIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBwYXJzZUpzb24ob2JqW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyAvKiBpZ25vcmUgKi8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8cGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRhW3BbMF1dID0gZGVzZXJpYWxpemVFdmVudERhdGEoZGVjb2RlVVJJQ29tcG9uZW50KHBbMV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdGVuZXIoZXZlbnREYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvcmlnaW4pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy8gUmVzZXQgdmlld3BvcnQgc2V0dGluZ3NcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlICYmICF0aGlzLmlzRGVmYXVsdFVYICYmIHdpbmRvdyA9PT0gd2luZG93LnRvcCkge1xuICAgICAgICAgICAgICAgIE1ldGFUYWdIZWxwZXIucmVzdG9yZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsKCdDbG9zaW5nIEhlbGxvU2lnbiBlbWJlZGRlZCBpRnJhbWUnKTtcbiAgICAgICAgICAgIC8vIENsb3NlIHRoZSBjaGlsZCBpZnJhbWUgZnJvbSB0aGUgcGFyZW50IHdpbmRvd1xuICAgICAgICAgICAgaWYgKHRoaXMuaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhbmNlbEJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQ2hpbGQodGhpcy5jYW5jZWxCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZhZGVPdXRJRnJhbWUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5maXhJZnJhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cbiAgICAgICAgLy8gIC0tLS0gIFBSSVZBVEUgTUVUSE9EUyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIF9mYWRlT3V0SUZyYW1lOiBmdW5jdGlvbiBfZmFkZU91dElGcmFtZShjdXJyZW50T3BhY2l0eSkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHNlbGYuaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50T3BhY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BhY2l0eSA9IDEuMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3BhY2l0eSAtPSAwLjE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuaWZyYW1lLnN0eWxlLm9wYWNpdHkgPSBjdXJyZW50T3BhY2l0eTtcbiAgICAgICAgICAgICAgICBzZWxmLmlmcmFtZS5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgcGFyc2VJbnQoY3VycmVudE9wYWNpdHkgKiAxMDAsIDEwKSArICcpJztcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wYWNpdHkgPD0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaWZyYW1lLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlmcmFtZS5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0wKSc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25UaW1lcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY29udGFpbmVyLnJlbW92ZUNoaWxkKHNlbGYub3ZlcmxheSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIucmVtb3ZlQ2hpbGQoc2VsZi53cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi53cmFwcGVyLnJlbW92ZUNoaWxkKHNlbGYuaWZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vdmVybGF5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pZnJhbWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLndyYXBwZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBhbmltYXRpb25UaW1lciA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uKGN1cnJlbnRPcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2ZhZGVPdXRJRnJhbWUoY3VycmVudE9wYWNpdHkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pKGN1cnJlbnRPcGFjaXR5KSwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlcG9ydEVycm9yOiBmdW5jdGlvbihlcnJvck1lc3NhZ2UsIHBhcmVudFVybCkge1xuICAgICAgICAgICAgWFdNLnNlbmQoe1xuICAgICAgICAgICAgICAgICdldmVudCc6IEhlbGxvU2lnbi5FVkVOVF9FUlJPUixcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBlcnJvck1lc3NhZ2VcbiAgICAgICAgICAgIH0sIHBhcmVudFVybCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW5zdXJlUGFyZW50RG9tYWluOiBmdW5jdGlvbihkb21haW5OYW1lLCBwYXJlbnRVcmwsIHRva2VuLCBza2lwRG9tYWluVmVyaWZpY2F0aW9uLCBjYWxsYmFjaykge1xuXG4gICAgICAgICAgICAvLyBkb21haW5OYW1lOiAgRG9tYWluIHRvIG1hdGNoIGFnYWluc3QgdGhlIHBhcmVudCB3aW5kb3cgbG9jYXRpb25cbiAgICAgICAgICAgIC8vIHBhcmVudFVybDogICBVcmwgb2YgdGhlIHBhcmVudCB3aW5kb3cgdG8gY2hlY2sgKHByb3ZpZGVkIHRvIHVzIGJ1dCBub3QgcmVsaWFibGUpXG4gICAgICAgICAgICAvLyBjYWxsYmFjazogICAgTWV0aG9kIHRvIGNhbGwgd2l0aCB0aGUgcmVzdWx0LCBpdCBzaG91bGQgdGFrZSBvbmx5IG9uZSBib29sZWFuIHBhcmFtZXRlci5cblxuICAgICAgICAgICAgaWYgKHdpbmRvdy50b3AgPT0gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgLy8gTm90IGluIGFuIGlGcmFtZSwgbm8gbmVlZCB0byBnbyBmdXJ0aGVyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGVycm9yKCdUb2tlbiBub3Qgc3VwcGxpZWQgYnkgSGVsbG9TaWduLiBQbGVhc2UgY29udGFjdCBzdXBwb3J0LicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGVycm9yKCdDYWxsYmFjayBub3Qgc3VwcGxpZWQgYnkgSGVsbG9TaWduLiBQbGVhc2UgY29udGFjdCBzdXBwb3J0LicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZiAoc2tpcERvbWFpblZlcmlmaWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciB3YXJuaW5nTXNnID0gJ0RvbWFpbiB2ZXJpZmljYXRpb24gaGFzIGJlZW4gc2tpcHBlZC4gQmVmb3JlIHJlcXVlc3RpbmcgYXBwcm92YWwgZm9yIHlvdXIgYXBwLCBwbGVhc2UgYmUgc3VyZSB0byB0ZXN0IGRvbWFpbiB2ZXJpZmljYXRpb24gYnkgc2V0dGluZyBza2lwRG9tYWluVmVyaWZpY2F0aW9uIHRvIGZhbHNlLic7XG4gICAgICAgICAgICAgICAgbCh3YXJuaW5nTXNnKTtcbiAgICAgICAgICAgICAgICBhbGVydCh3YXJuaW5nTXNnKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0cyB3YWl0aW5nIGZvciB0aGUgaGVsbG8gYmFjayBtZXNzYWdlXG4gICAgICAgICAgICAgICAgWFdNLnJlY2VpdmUoZnVuY3Rpb24gX2Vuc3VyZVBhcmVudERvbWFpbkNhbGxiYWNrKGV2dCl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQuZGF0YS5pbmRleE9mKCdoZWxsb2JhY2s6JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IGV2dC5kYXRhLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQgPSAocGFydHNbMV0gPT0gdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodmFsaWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgZG9tYWluTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNlbmQgaGVsbG8gbWVzc2FnZVxuICAgICAgICAgICAgWFdNLnNlbmQoJ2hlbGxvOicgKyB0b2tlbiwgcGFyZW50VXJsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRXaW5kb3dEaW1lbnNpb25zOiBmdW5jdGlvbihjdXN0b21IZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxYID0gZ2V0U2Nyb2xsWCgpO1xuICAgICAgICAgICAgdmFyIHNjcm9sbFkgPSBnZXRTY3JvbGxZKCk7XG4gICAgICAgICAgICB2YXIgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPbGRJRSkge1xuICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoICAgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCAgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGggICA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIHdpbmRvd0hlaWdodCAgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5pc0luUGFnZSAmJiBjdXN0b21IZWlnaHQgPyBjdXN0b21IZWlnaHQgOiBNYXRoLm1heCh0aGlzLk1JTl9IRUlHSFQsIHdpbmRvd0hlaWdodCAtIDYwKTtcblxuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy51eFZlcnNpb24gPiAxID8gTWF0aC5taW4odGhpcy5ERUZBVUxUX1dJRFRILCB3aW5kb3dXaWR0aCAqIHRoaXMuSUZSQU1FX1dJRFRIX1JBVElPKSA6IHRoaXMuREVGQVVMVF9XSURUSDtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnd2lkdGhTdHJpbmcnOiAgd2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICAgICdoZWlnaHRTdHJpbmcnOiBoZWlnaHQgKyAncHgnLFxuICAgICAgICAgICAgICAgICdoZWlnaHRSYXcnOiAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbFgnOiAgICAgIHNjcm9sbFgsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbFknOiAgICAgIHNjcm9sbFksXG4gICAgICAgICAgICAgICAgJ3RvcCcgOiAgICAgICAgIE1hdGgubWF4KDAsIHNjcm9sbFkgKyBwYXJzZUludCgod2luZG93SGVpZ2h0IC0gaGVpZ2h0KSAvIDIsIDEwKSkgKyAncHgnLFxuICAgICAgICAgICAgICAgICdsZWZ0JzogICAgICAgICBNYXRoLm1heCgwLCBwYXJzZUludCgod2luZG93V2lkdGggLSB0aGlzLkRFRkFVTFRfV0lEVEgpIC8gMiwgMTApKSArICdweCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TW9iaWxlRGltZW5zaW9uczogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBkaW1zO1xuXG4gICAgICAgICAgICB2YXIgc2NyZWVuV2lkdGggPSBzY3JlZW4ud2lkdGg7XG4gICAgICAgICAgICB2YXIgc2NyZWVuSGVpZ2h0ID0gc2NyZWVuLmhlaWdodDtcbiAgICAgICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICAgICAgdmFyIGlzUG9ydHJhaXQgPSB3aW5kb3dIZWlnaHQgPiB3aW5kb3dXaWR0aDtcblxuICAgICAgICAgICAgaWYgKGlzUG9ydHJhaXQpIHtcbiAgICAgICAgICAgICAgICBkaW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGhTdHJpbmcnOiB0aGlzLmlzRGVmYXVsdFVYID8gJzEwMHZ3JyA6IHNjcmVlbldpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodFN0cmluZyc6IHRoaXMuaXNEZWZhdWx0VVggPyAnMTAwdmgnIDogJzEwMCUnIC8vIDEwMHZoIG5lZWRlZCBmb3Igb2xkIHNpZ25lciBwYWdlLCBidXQgY3V0cyBvZmYgc29tZSBuZXdlciBVWCBlbGVtZW50c1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIExhbmRzY2FwZVxuICAgICAgICAgICAgICAgIGRpbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aFN0cmluZyc6IHdpbmRvd1dpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2hlaWdodFN0cmluZyc6IHRoaXMuaXNEZWZhdWx0VVggPyAnMTAwdmgnIDogJzEwMCUnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFsd2F5cyBmaWxsIHNjcmVlbiBvbiBtb2JpbGVcbiAgICAgICAgICAgIGRpbXMudG9wID0gJzAnO1xuICAgICAgICAgICAgZGltcy5sZWZ0ID0gJzAnO1xuICAgICAgICAgICAgcmV0dXJuIGRpbXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5BcnJheTogZnVuY3Rpb24odiwgYXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0pRdWVyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAkLmluQXJyYXkodiwgYXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8YXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldID09IHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNhZmVVcmw6IGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2VjdXJpdHk6IHJlbW92ZSBzY3JpcHQgdGFncyBmcm9tIFVSTHMgYmVmb3JlIHByb2Nlc3NpbmdcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvPi9nLCBcIiZndDtcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSFRNTC1EZWNvZGUgdGhlIGdpdmVuIHVybCBpZiBuZWNlc3NhcnksIGJ5IHJlbmRlcmluZyB0byB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVjb2RlZFVybCA9IGVsLmlubmVyVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBGYWxsIGJhY2sgdG8ganVzdCByZXBsYWNpbmcgJyZhbXA7JyBpbiBjYXNlIG9mIGZhaWx1cmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWNvZGVkVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwmYW1wXFw7L2csICcmJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBkZWNvZGVkVXJsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGwoJ0NvdWxkIG5vdCBkZWNvZGUgdXJsOiAnICsgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIHRoYXQgd2lsbCBlbnN1cmUgYW4gZXJyb3IgbWVzc2FnZSBpcyBkaXNwbGF5ZWQsIGVpdGhlciBpbiBjb25zb2xlLmxvZ1xuICAgICAqIG9yIGFzIGEgYnJvd3NlciBhbGVydC5cbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBTdHJpbmcgZXJyb3IgbWVzc2FnZVxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gd3JhcHBlciB0aGF0IGNvbmRpdGlvbmFsbHkgbG9ncyBtZXNzYWdlcyB0byBjb25zb2xlLmxvZy5cbiAgICAgKiBAcGFyYW0gbWVzc2FnZU9iaiBTdHJpbmcgb3IgT2JqZWN0IHRvIGxvZ1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGwobWVzc2FnZU9iaikge1xuICAgICAgICBpZiAoSGVsbG9TaWduLmlzRGVidWdFbmFibGVkICYmIHR5cGVvZiBtZXNzYWdlT2JqICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUgJiYgY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VPYmopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIEdldHRlciBmdW5jdGlvbnMgZm9yIGRldGVybWluaW5nIHNjcm9sbCBwb3NpdGlvbiB0aGF0IHdvcmsgb24gYWxsXG4gICAgICogIGJyb3dzZXJzLlxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsWCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBwb3J0UGFnZU9mZnNldCgpID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogX2lzQ1NTMUNvbXBhdCgpID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgOiBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsWSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBwb3J0UGFnZU9mZnNldCgpID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogX2lzQ1NTMUNvbXBhdCgpID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pc0NTUzFDb21wYXQoKSB7XG4gICAgICAgIHJldHVybiAoKGRvY3VtZW50LmNvbXBhdE1vZGUgfHwgJycpID09PSAnQ1NTMUNvbXBhdCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9zdXBwb3J0UGFnZU9mZnNldCgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIEV4cG9ydCB0aGUgSFMgb2JqZWN0XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBIZWxsb1NpZ247XG5cbn0pKCk7XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuIiwiaW1wb3J0IEhlbGxvU2lnbiBmcm9tICdoZWxsb3NpZ24tZW1iZWRkZWQnO1xuXG5jb25zdCBjb25maWd1cmF0aW9uRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlndXJhdGlvbi1mb3JtJyk7XG5jb25zdCBhcGlLZXlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJhcGkta2V5XCJdJyk7XG5jb25zdCBjbGllbnRJZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNsaWVudC1pZFwiXScpO1xuY29uc3QgcmVkaXJlY3RVcmxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJyZWRpcmVjdC11cmxcIl0nKTtcbmNvbnN0IGlmcmFtZUNoZWNrYm94RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWZyYW1lXCJdJyk7XG5jb25zdCBlbWJlZGRlZFJlcXVlc3RDYXJkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWJlZGRlZC1yZXF1ZXN0LWNhcmQnKTtcbmNvbnN0IGVtYmVkZGVkUmVxdWVzdExvYWRpbmdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYmVkZGVkLXJlcXVlc3QtbG9hZGluZycpO1xuY29uc3QgZW1iZWRkZWRSZXF1ZXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWJlZGRlZC1yZXF1ZXN0Jyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgdGhlIGRtZW8gYXBwLlxuICpcbiAqIEBzZWUgc2F2ZUNvbmZpZ1xuICogQHNlZSBjcmVhdGVSZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbmZpZ3VyYXRpb25Gb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBDbG9zZSB0aGUgZXhpc3RpbmcgcmVxdWVzdCBpZiB0aGVyZSBpcyBvbmUuXG4gICAgSGVsbG9TaWduLmNsb3NlKCk7XG5cbiAgICAvLyBTaG93IG9yIGhpZGUgdGhlIGVtYmVkZGVkIHJlcXVlc3QgY2FyZCBhbmQgbG9hZGluZ1xuICAgIC8vIGVsZW1lbnQuXG4gICAgaWYgKGlmcmFtZUNoZWNrYm94RWxlbWVudC5jaGVja2VkKSB7XG4gICAgICBlbWJlZGRlZFJlcXVlc3RDYXJkRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWJlZGRlZFJlcXVlc3RDYXJkRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGVtYmVkZGVkUmVxdWVzdExvYWRpbmdFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHNhdmVDb25maWcoKTtcbiAgICBjcmVhdGVSZXF1ZXN0KCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNlbmRzIGEgcmVxdWVzdCB0byB0aGUgYmFja2VuZCB0byBjcmVhdGUgYSBuZXdcbiAqIHNpZ25hdHVyZSByZXF1ZXN0IHVzaW5nIHRoZSBIZWxsb1NpZ24gTm9kZUpTIFNESyB3aXRoXG4gKiB0aGUgZ2l2ZW4gQVBJIGtleSBhbmQgQ2xpZW50IElELlxuICpcbiAqIEBzZWUgaGFuZGxlQ3JlYXRlUmVxdWVzdFxuICovXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0KCkge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldnQpID0+IHtcbiAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcblxuICAgIGlmIChib2R5LnN1Y2Nlc3MpIHtcbiAgICAgIG9wZW5SZXF1ZXN0KGJvZHkuZGF0YS5zaWduVXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nLiBEaWQgeW91IHJlbWVtYmVyIHRvIGVudGVyIHlvdXIgQVBJIEtleSBhbmQgQ2xpZW50IElEPycpO1xuICAgIH1cbiAgfSk7XG5cbiAgeGhyLm9wZW4oJ1BPU1QnLCAnL2NyZWF0ZVNpZ25hdHVyZVJlcXVlc3QnLCB0cnVlKTtcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnKTtcblxuICB4aHIuc2VuZChcbiAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBjbGllbnRJZDogY2xpZW50SWRFbGVtZW50LnZhbHVlLFxuICAgICAgYXBpS2V5OiBhcGlLZXlFbGVtZW50LnZhbHVlXG4gICAgfSlcbiAgKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbmQgb3BlbnMgdGhlIGVtYmVkZGVkIHNpZ25hdHVyZSByZXF1ZXN0XG4gKiB3aXRoIHRoZSBzaWduYXR1cmUgVVJMIHByb3ZpZGVkIGJ5IHRoZSBiYWNrZW5kLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzaWduVXJsXG4gKi9cbmZ1bmN0aW9uIG9wZW5SZXF1ZXN0KHNpZ25VcmwpIHtcbiAgSGVsbG9TaWduLmluaXQoY2xpZW50SWRFbGVtZW50LnZhbHVlKTtcbmNvbnNvbGUubG9nKHNpZ25VcmwpO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHVybDogc2lnblVybCxcbiAgICBhbGxvd0NhbmNlbDogdHJ1ZSxcbiAgICBkZWJ1ZzogdHJ1ZSxcbiAgICBza2lwRG9tYWluVmVyaWZpY2F0aW9uOiB0cnVlLFxuICAgIHV4VmVyc2lvbjogMixcbiAgICBtZXNzYWdlTGlzdGVuZXIoZXZ0KSB7XG4gICAgICBjb25zb2xlLmxvZygnRXZlbnQhJywgZXZ0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gU2V0IHRoZSByZWRpcmVjdCBVUkwsIGlmIGRlZmluZWQgYnkgdGhlIHVzZXIuXG4gIGlmIChyZWRpcmVjdFVybEVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgb3B0aW9ucy5yZWRpcmVjdFVybCA9IHJlZGlyZWN0VXJsRWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgY29udGFpbmVyIGlmIHRoZSBcIk9wZW4gaW4gaUZyYW1lXCIgY2hlY2tib3hcbiAgLy8gd2FzIHVuY2hlY2tlZCBieSB0aGUgdXNlci5cbiAgaWYgKCFpZnJhbWVDaGVja2JveEVsZW1lbnQuY2hlY2tlZCkge1xuICAgIG9wdGlvbnMuY29udGFpbmVyID0gZW1iZWRkZWRSZXF1ZXN0RWxlbWVudDtcbiAgfVxuXG4gIC8vIEhpZGUgdGhlIGxvYWRpbmcgaW5kaWNhdG9yLlxuICBlbWJlZGRlZFJlcXVlc3RMb2FkaW5nRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIEhlbGxvU2lnbi5vcGVuKG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFNhdmVzIHRoZSB1c2VyJ3MgY3VycmVudCBjb25maWcgZm9yIGVhc2Ugb2YgdXNlLlxuICovXG5mdW5jdGlvbiBzYXZlQ29uZmlnKCkge1xuICB0cnkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29uZmlnJywgKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhcGlLZXk6IGFwaUtleUVsZW1lbnQudmFsdWUsXG4gICAgICAgIGNsaWVudElkOiBjbGllbnRJZEVsZW1lbnQudmFsdWUsXG4gICAgICAgIHJlZGlyZWN0VXJsOiByZWRpcmVjdFVybEVsZW1lbnQudmFsdWUsXG4gICAgICAgIGlmcmFtZTogaWZyYW1lQ2hlY2tib3hFbGVtZW50LmNoZWNrZWRcbiAgICAgIH0pXG4gICAgKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFVzZXIgbWF5IGhhdmUgcHJpdmF0ZSBicm93c2luZyBlbmFibGVkLlxuICAgIC8vIEZhaWwgc2lsZW50bHkuXG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwb3B1bGF0ZXMgY29uZmlndXJhdGlvbiBmaWVsZHMgZnJvbSBsb2NhbCBzdG9yYWdlLlxuICovXG5mdW5jdGlvbiBsb2FkQ29uZmlnKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7XG5cbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICBjb25zdCB7IGFwaUtleSwgY2xpZW50SWQsIHJlZGlyZWN0VXJsLCBpZnJhbWUgfSA9IEpTT04ucGFyc2UoY29uZmlnKTtcblxuICAgICAgYXBpS2V5RWxlbWVudC52YWx1ZSA9IGFwaUtleTtcbiAgICAgIGNsaWVudElkRWxlbWVudC52YWx1ZSA9IGNsaWVudElkO1xuICAgICAgcmVkaXJlY3RVcmxFbGVtZW50LnZhbHVlID0gcmVkaXJlY3RVcmw7XG4gICAgICBpZnJhbWVDaGVja2JveEVsZW1lbnQuY2hlY2tlZCA9IGlmcmFtZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFVzZXIgbWF5IGhhdmUgcHJpdmF0ZSBicm93c2luZyBlbmFibGVkLlxuICAgIC8vIEZhaWwgc2lsZW50bHkuXG4gIH1cbn1cblxubG9hZENvbmZpZygpO1xuaW5pdCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==