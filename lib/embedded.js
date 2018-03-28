var HelloSign =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/embedded.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, homepage, main, license, scripts, repository, author, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"hellosign-embedded","version":"1.2.11","description":"A library which allows you to embed HelloSign signature requests and templates from within an application.","homepage":"https://github.com/HelloFax/hellosign-embedded","main":"lib/embedded.node.js","license":"ISC","scripts":{"build":"webpack","demo":"(cd demo && npm start)","prepublish":"npm run build","prerelease":"node scripts/pre-release.js","setup":"npm install && (cd demo && npm run setup)","test":"mocha test"},"repository":{"type":"git","url":"git+https://github.com/HelloFax/hellosign-embedded.git"},"author":{"name":"HelloSign","email":"api@hellosign.com","url":"https://hellosign.com"},"devDependencies":{"@babel/core":"^7.0.0-beta.42","@babel/plugin-proposal-object-rest-spread":"^7.0.0-beta.42","@babel/plugin-transform-object-assign":"^7.0.0-beta.42","@babel/preset-env":"^7.0.0-beta.42","babel-loader":"^8.0.0-beta.2","chai":"^4.1.2","jsdom":"^11.6.2","jsdom-global":"^3.0.2","mocha":"^5.0.4","webpack":"^4.2.0","webpack-cli":"^2.0.13"}};

/***/ }),

/***/ "./src/embedded.js":
/*!*************************!*\
  !*** ./src/embedded.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    VERSION: __webpack_require__(/*! ../package.json */ "./package.json").version,
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9IZWxsb1NpZ24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSGVsbG9TaWduLy4vc3JjL2VtYmVkZGVkLmpzIl0sIm5hbWVzIjpbImdldFVybFZhcnMiLCJ2YXJzIiwicGFydHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwibSIsImtleSIsInZhbHVlIiwidXJsVmFycyIsImlzRGVidWdFbmFibGVkIiwiZGVidWciLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJ0b0xvd2VyQ2FzZSIsIlhXTSIsImNhY2hlQnVzdCIsImxhc3RIYXNoIiwiaW50ZXJ2YWxJZCIsInJtQ2FsbGJhY2siLCJkZWZhdWx0RGVsYXkiLCJoYXNQb3N0TWVzc2FnZSIsInVuZGVmaW5lZCIsIl9zZXJpYWxpemVNZXNzYWdlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VuZCIsIm1lc3NhZ2UiLCJ0YXJnZXRVcmwiLCJ0YXJnZXQiLCJsIiwic2VsZiIsImsiLCJwdXNoIiwiam9pbiIsInBhcmVudCIsInQiLCJEYXRlIiwiZ2V0VGltZSIsImMiLCJ0YXJnZXRGcmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJyZWNlaXZlIiwiY2FsbGJhY2siLCJzb3VyY2VPcmlnaW4iLCJkZWxheSIsImVycm9yIiwibmFtZSIsImV2dCIsIm9yaWdpbiIsInN1YmRvbWFpblRlc3QiLCJSZWdFeHAiLCJ0ZXN0IiwiZGF0YSIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImhhc2giLCJyZSIsIk1ldGFUYWdIZWxwZXIiLCJzYXZlZFZpZXdwb3J0Q29udGVudCIsInNldCIsIl9nZXRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiY29udGVudFBhaXJzIiwiX2V4cGxvZGVQYWlycyIsIl9qb2luUGFpcnMiLCJyZXN0b3JlIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImtleWVkIiwicGFpcnMiLCJtZXRhU3RyaW5nIiwic3BsaXQiLCJvYmoiLCJmb3JFYWNoIiwicGFpciIsInRyaW0iLCJrdiIsIkhlbGxvU2lnbiIsIlZFUlNJT04iLCJyZXF1aXJlIiwidmVyc2lvbiIsIkRFRkFVTFRfVVhfVkVSU0lPTiIsIklGUkFNRV9XSURUSF9SQVRJTyIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIk1JTl9IRUlHSFQiLCJ3cmFwcGVyIiwiaWZyYW1lIiwib3ZlcmxheSIsImNhbmNlbEJ1dHRvbiIsImNsaWVudElkIiwiaXNPbGRJRSIsImlzRkYiLCJpc09wZXJhIiwiaXNNb2JpbGUiLCJiYXNlVXJsIiwiY2RuQmFzZVVybCIsIkNVTFRVUkVTIiwiRU5fVVMiLCJGUl9GUiIsIkRFX0RFIiwiU1ZfU0UiLCJaSF9DTiIsIkRBX0RLIiwiTkxfTkwiLCJFU19FUyIsIkVTX01YIiwiUFRfQlIiLCJpbml0Iiwic3VwcG9ydGVkQ3VsdHVyZXMiLCJFVkVOVF9TSUdORUQiLCJFVkVOVF9ERUNMSU5FRCIsIkVWRU5UX0NBTkNFTEVEIiwiRVZFTlRfU0VOVCIsIkVWRU5UX1RFTVBMQVRFX0NSRUFURUQiLCJFVkVOVF9FUlJPUiIsImFwcENsaWVudElkIiwib3BlbiIsInBhcmFtcyIsInJlZGlyZWN0VXJsIiwic2FmZVVybCIsIm1lc3NhZ2VMaXN0ZW5lciIsImZyYW1lVXJsIiwidXhWZXJzaW9uIiwiaXNEZWZhdWx0VVgiLCJoZWFsdGhDaGVja1RpbWVvdXRNcyIsImluZGV4T2YiLCJza2lwRG9tYWluVmVyaWZpY2F0aW9uIiwiaGlkZUhlYWRlciIsIndoaXRlTGFiZWxpbmdPcHRpb25zIiwiaXNJblBhZ2UiLCJjb250YWluZXIiLCJib2R5IiwiaXNOYU4iLCJwYXJzZUludCIsIkVycm9yIiwidXNlckN1bHR1cmUiLCJpbkFycmF5IiwiZW5jb2RlVVJJIiwid2luZG93RGltcyIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJzdHlsZXMiLCJ0b3AiLCJsZWZ0IiwicmVzaXplSUZyYW1lIiwiX3Jlc2l6ZUlGcmFtZSIsImRpbXMiLCJnZXRNb2JpbGVEaW1lbnNpb25zIiwic3R5bGUiLCJ3aWR0aFN0cmluZyIsImhlaWdodFN0cmluZyIsIm1vYmlsZURpbXMiLCJzY3JvbGxUbyIsInpvb21TY2FsZSIsImNsaWVudFdpZHRoIiwiaW5uZXJXaWR0aCIsImRldGVjdFpvb20iLCJfZGV0ZWN0Wm9vbSIsIm5ld1pvb21TY2FsZSIsIm9uc2Nyb2xsIiwib25yZXNpemUiLCJoZWlnaHRSYXciLCJvbmNsaWNrIiwiY2xvc2UiLCJyZW1vdmVDaGlsZCIsImkiLCJlIiwicyIsImZpeElmcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGVhbHRoQ2hlY2tUaW1lb3V0SGFuZGxlIiwic2V0VGltZW91dCIsInJlcG9ydEVycm9yIiwiX3BhcmVudFdpbmRvd0NhbGxiYWNrIiwic291cmNlIiwiY2xlYXJUaW1lb3V0IiwicGF5bG9hZCIsInR5cGUiLCJ0b2tlbiIsImV2ZW50RGF0YSIsInAiLCJkZXNlcmlhbGl6ZUV2ZW50RGF0YSIsInN0ciIsInBhcnNlIiwicGFyc2VKc29uIiwibGVuZ3RoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiX2ZhZGVPdXRJRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudE9wYWNpdHkiLCJvcGFjaXR5IiwiZmlsdGVyIiwiZGlzcGxheSIsImFuaW1hdGlvblRpbWVyIiwiZXJyb3JNZXNzYWdlIiwicGFyZW50VXJsIiwiZW5zdXJlUGFyZW50RG9tYWluIiwiZG9tYWluTmFtZSIsIndhcm5pbmdNc2ciLCJhbGVydCIsIl9lbnN1cmVQYXJlbnREb21haW5DYWxsYmFjayIsInZhbGlkIiwiY3VzdG9tSGVpZ2h0Iiwic2Nyb2xsWCIsImdldFNjcm9sbFgiLCJzY3JvbGxZIiwiZ2V0U2Nyb2xsWSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoZWlnaHQiLCJNYXRoIiwibWF4Iiwid2lkdGgiLCJtaW4iLCJzY3JlZW5XaWR0aCIsInNjcmVlbiIsInNjcmVlbkhlaWdodCIsImlzUG9ydHJhaXQiLCJ2IiwiYXJyYXkiLCJoYXNKUXVlcnkiLCIkIiwidXJsIiwiaW5uZXJIVE1MIiwiZGVjb2RlZFVybCIsImlubmVyVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlT2JqIiwiX3N1cHBvcnRQYWdlT2Zmc2V0IiwicGFnZVhPZmZzZXQiLCJfaXNDU1MxQ29tcGF0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsTGVmdCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiY29tcGF0TW9kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBOzs7Ozs7Ozs7Ozs7QUFhQSxDQUFDLFlBQVU7QUFFUCxXQUFTQSxVQUFULEdBQXNCO0FBQ2xCLFFBQUlDLE9BQU8sRUFBWDtBQUNBLFFBQUlDLFFBQVFDLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxPQUFyQixDQUE2Qix5QkFBN0IsRUFDSixVQUFTQyxDQUFULEVBQVlDLEdBQVosRUFBaUJDLEtBQWpCLEVB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LEkiLCJmaWxlIjoiZW1iZWRkZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW1iZWRkZWQuanNcIik7XG4iLCIvKipcbiAqIEhlbGxvU2lnbiBKUyBsaWJyYXJ5IGZvciBlbWJlZGRhYmxlc1xuICogQ29weXJpZ2h0IChjKSAyMDE2IEhlbGxvU2lnblxuICpcbiAqIFhXTSAtIENyb3NzLXdpbmRvdyBtZXNzYWdpbmcgaW5zcGlyZWQgYnkgQmVuIEFsbWFuJ3NcbiAqIGpRdWVyeSBwb3N0TWVzc2FnZSBwbHVnaW46XG4gKiBodHRwOi8vYmVuYWxtYW4uY29tL3Byb2plY3RzL2pxdWVyeS1wb3N0bWVzc2FnZS1wbHVnaW4vXG4gKlxuICogICAgQ29weXJpZ2h0IChjKSAyMDA5IFwiQ293Ym95XCIgQmVuIEFsbWFuXG4gKiAgICBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgYW5kIEdQTCBsaWNlbnNlcy5cbiAqICAgIGh0dHA6Ly9iZW5hbG1hbi5jb20vYWJvdXQvbGljZW5zZS9cbiAqL1xuXG4oZnVuY3Rpb24oKXtcblxuICAgIGZ1bmN0aW9uIGdldFVybFZhcnMoKSB7XG4gICAgICAgIHZhciB2YXJzID0ge307XG4gICAgICAgIHZhciBwYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihtLCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFycztcbiAgICB9XG5cbiAgICB2YXIgdXJsVmFycyA9IGdldFVybFZhcnMoKTtcbiAgICB3aW5kb3cuaXNEZWJ1Z0VuYWJsZWQgPSAodXJsVmFycy5kZWJ1ZyA/IHVybFZhcnMuZGVidWcgPT09ICd0cnVlJyA6IGZhbHNlKTtcblxuICAgIHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG5cbiAgICB2YXIgWFdNID0ge1xuXG4gICAgICAgIGNhY2hlQnVzdDogMCxcbiAgICAgICAgbGFzdEhhc2g6IDAsXG4gICAgICAgIGludGVydmFsSWQ6IDAsXG4gICAgICAgIHJtQ2FsbGJhY2s6IG51bGwsXG4gICAgICAgIGRlZmF1bHREZWxheTogNTAwLFxuICAgICAgICBoYXNQb3N0TWVzc2FnZTogKHdpbmRvd1sncG9zdE1lc3NhZ2UnXSAhPT0gdW5kZWZpbmVkKSxcblxuICAgICAgICBfc2VyaWFsaXplTWVzc2FnZVZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNlbmQ6IGZ1bmN0aW9uKG1lc3NhZ2UsIHRhcmdldFVybCwgdGFyZ2V0KSB7XG5cbiAgICAgICAgICAgIGwoJ1hXTSBTZW5kOiBTZW5kaW5nIE1lc3NhZ2UuJyk7XG4gICAgICAgICAgICBsKCcgIHRhcmdldFVybDogJyArIHRhcmdldFVybCk7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gWFdNO1xuXG4gICAgICAgICAgICBpZiAoIXRhcmdldFVybCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2VyaWFsaXplIHRoZSBtZXNzYWdlIGludG8gYSBzdHJpbmdcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKGsgKyAnPScgKyB0aGlzLl9zZXJpYWxpemVNZXNzYWdlVmFsdWUobWVzc2FnZVtrXSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gcGFydHMuam9pbignJicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsKCcgIG1lc3NhZ2U6ICcgKyBtZXNzYWdlKTtcblxuICAgICAgICAgICAgaWYgKHNlbGYuaGFzUG9zdE1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgYnJvd3NlciBzdXBwb3J0cyB3aW5kb3cucG9zdE1lc3NhZ2UsIHNvIGNhbGwgaXQgd2l0aCBhIHRhcmdldE9yaWdpblxuICAgICAgICAgICAgICAgIC8vIHNldCBhcHByb3ByaWF0ZWx5LCBiYXNlZCBvbiB0aGUgdGFyZ2V0VXJsIHBhcmFtZXRlci5cbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgcGFyZW50O1xuICAgICAgICAgICAgICAgIHRhcmdldFsncG9zdE1lc3NhZ2UnXShtZXNzYWdlLCB0YXJnZXRVcmwucmVwbGFjZSggLyhbXjpdKzpcXC9cXC9bXlxcL10rKS4qLywgJyQxJyApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRhcmdldFVybCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgd2luZG93LnBvc3RNZXNzYWdlLCBzbyBzZXQgdGhlIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIHRhcmdldCB0byB0YXJnZXRVcmwjbWVzc2FnZS4gQSBiaXQgdWdseSwgYnV0IGl0IHdvcmtzISBBIGNhY2hlXG4gICAgICAgICAgICAgICAgLy8gYnVzdCBwYXJhbWV0ZXIgaXMgYWRkZWQgdG8gZW5zdXJlIHRoYXQgcmVwZWF0IG1lc3NhZ2VzIHRyaWdnZXIgdGhlXG4gICAgICAgICAgICAgICAgLy8gY2FsbGJhY2suXG4gICAgICAgICAgICAgICAgdmFyIHQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB2YXIgYyA9ICsrc2VsZi5jYWNoZUJ1c3Q7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldEZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0KTsgLy8gdGFyZ2V0IGlzIHRoZSB3aW5kb3cgaWQgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICAgICAgLy8gdGFyZ2V0V2luZG93LmxvY2F0aW9uID0gdGFyZ2V0VXJsLnJlcGxhY2UoIC8jLiokLywgJycgKSArICcjJyArIHQgKyBjICsgJyYnICsgbWVzc2FnZTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCB0YXJnZXRVcmwucmVwbGFjZSggLyMuKiQvLCAnJyApICsgJyMnICsgdCArIGMgKyAnJicgKyBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5sb2NhdGlvbiA9IHRhcmdldFVybC5yZXBsYWNlKCAvIy4qJC8sICcnICkgKyAnIycgKyB0ICsgYyArICcmJyArIG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsKCdYV00gU2VuZDogTWVzc2FnZSBzZW50LicpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlY2VpdmU6IGZ1bmN0aW9uKGNhbGxiYWNrLCBzb3VyY2VPcmlnaW4sIGRlbGF5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ2NhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VPcmlnaW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ3NvdXJjZU9yaWdpbiBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGwoJ1hXTSBSZWNlaXZlOiBJbml0aWFsaXplIHJlY2VpdmVyLicpO1xuICAgICAgICAgICAgbCgnICBjYWxsYmFjazogJyArIChjYWxsYmFjay5uYW1lID8gY2FsbGJhY2submFtZSA6ICdBbm9ueW1vdXMgZnVuY3Rpb24nKSk7XG4gICAgICAgICAgICBsKCcgIHNvdXJjZU9yaWdpbjogJyArIHNvdXJjZU9yaWdpbik7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gWFdNO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5oYXNQb3N0TWVzc2FnZSkge1xuXG4gICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIGJyb3dzZXIgc3VwcG9ydHMgd2luZG93LnBvc3RNZXNzYWdlLCB0aGUgY2FsbGJhY2sgd2lsbCBiZVxuICAgICAgICAgICAgICAgIC8vIGJvdW5kIHRvIHRoZSBhY3R1YWwgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHdpbmRvdy5wb3N0TWVzc2FnZS5cblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnJtQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuYmluZCBwcmV2aW91cyBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1snYWRkRXZlbnRMaXN0ZW5lciddICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1sncmVtb3ZlRXZlbnRMaXN0ZW5lciddKCdtZXNzYWdlJywgc2VsZi5ybUNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lFOCBkb2Vzbid0IHN1cHBvcnQgcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snZGV0YWNoRXZlbnQnXSgnb25tZXNzYWdlJywgc2VsZi5ybUNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJpbmQgdGhlIGNhbGxiYWNrLiBBIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgaXMgc3RvcmVkIGZvciBlYXNlIG9mIHVuYmluZGluZ1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJtQ2FsbGJhY2sgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgZXZlbnQgaXMgb3JpZ2luYXRpbmcgZnJvbSB0aGUgc291cmNlIGRvbWFpbiwgYWNjb3VudGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIHN1YmRvbWFpbnMgKGV2dC5vcmlnaW4gbXVzdCBlbmQgd2l0aCBhIGRvdCBhbmQgdGhlIHNvdXJjZU9yaWdpbiBzdHJpbmcpLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5vcmlnaW4gIT09IHNvdXJjZU9yaWdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJkb21haW5UZXN0ID0gbmV3IFJlZ0V4cCgnW1xcL3xcXC5dJyArIHNvdXJjZU9yaWdpbiArICckJywgJ2knKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN1YmRvbWFpblRlc3QudGVzdChldnQub3JpZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsKCdYV00gUmVjZWl2ZTogTWVzc2FnZSByZWNlaXZlZCEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwoJyAgZGF0YTogJyArIGV2dC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGwoJyAgc291cmNlT3JpZ2luOiAnICsgc291cmNlT3JpZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2dCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvd1snYWRkRXZlbnRMaXN0ZW5lciddKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1snYWRkRXZlbnRMaXN0ZW5lciddKCdtZXNzYWdlJywgc2VsZi5ybUNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL0lFOCBkb2Vzbid0IHN1cHBvcnQgYWRkRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ2F0dGFjaEV2ZW50J10oJ29ubWVzc2FnZScsIHNlbGYucm1DYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBicm93c2VyIHN1Y2tzLCBhIHBvbGxpbmcgbG9vcCB3aWxsIGJlIHN0YXJ0ZWQsIGFuZCB0aGVcbiAgICAgICAgICAgICAgICAvLyBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciB0aGUgbG9jYXRpb24uaGFzaCBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIGwoJ1hXTSBSZWNlaXZlOiBTdGFydGluZyBwb2xsLi4uJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pbnRlcnZhbElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2VsZi5pbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnRlcnZhbElkID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlbGF5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBkZWxheSA9IHNlbGYuZGVmYXVsdERlbGF5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5ID0gKGRlbGF5ICE9PSB1bmRlZmluZWQgPyBkZWxheSA6IDIwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNoID0gZG9jdW1lbnQubG9jYXRpb24uaGFzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZSA9IC9eIz9cXGQrJi87XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzaCAhPT0gc2VsZi5sYXN0SGFzaCAmJiByZS50ZXN0KGhhc2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXN0SGFzaCA9IGhhc2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBoYXNoLnJlcGxhY2UocmUsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsKCdYV00gUmVjZWl2ZTogTWVzc2FnZSByZWNlaXZlZCEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsKCcgIGRhdGE6ICcgKyBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsKCcgIHNvdXJjZU9yaWdpbjogJyArIHNvdXJjZU9yaWdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soeyBkYXRhOiBkYXRhIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb25zIHRvIG1hbmFnZSB0aGUgXCJ2aWV3cG9ydFwiIG1ldGEgdGFnLlxuICAgICAqIFRoaXMgYWxsb3dzIHVzIHRvIGR5bmFtaWNhbGx5IGNvbnRyb2wgdGhlIGRpc3BsYXlcbiAgICAgKiBhbmQgcGxhY2VtZW50IG9mIHRoZSBpRnJhbWUgaW4gYSBtb2JpbGUgY29udGV4dC5cbiAgICAgKi9cbiAgICB2YXIgTWV0YVRhZ0hlbHBlciA9IHtcblxuICAgICAgICBzYXZlZFZpZXdwb3J0Q29udGVudDogJycsXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGwoJ09wdGltaXppbmcgdmlld3BvcnQgbWV0YSB0YWcgZm9yIG1vYmlsZScpO1xuXG4gICAgICAgICAgICAvLyBTYXZlIG9mZiB0aGUgY3VycmVudCB2aWV3cG9ydCBtZXRhIHRhZyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnNhdmVkVmlld3BvcnRDb250ZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuXG4gICAgICAgICAgICAvLyBBZGQgbW9iaWxlLW9wdGltaXplZCBzZXR0aW5nc1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRQYWlycyA9IHRoaXMuX2V4cGxvZGVQYWlycyh0aGlzLnNhdmVkVmlld3BvcnRDb250ZW50KTtcbiAgICAgICAgICAgIGNvbnRlbnRQYWlyc1snd2lkdGgnXSA9ICdkZXZpY2Utd2lkdGgnO1xuICAgICAgICAgICAgY29udGVudFBhaXJzWydtYXhpbXVtLXNjYWxlJ10gPSAnMS4wJztcbiAgICAgICAgICAgIGNvbnRlbnRQYWlyc1sndXNlci1zY2FsYWJsZSddID0gJ25vJztcbiAgICAgICAgICAgIHRoaXMuX2dldEVsZW1lbnQoKS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB0aGlzLl9qb2luUGFpcnMoY29udGVudFBhaXJzKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzdG9yZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsKCdSZXN0b3Jpbmcgdmlld3BvcnQgbWV0YSB0YWcnKTtcbiAgICAgICAgICAgIHRoaXMuX2dldEVsZW1lbnQoKS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCB0aGlzLnNhdmVkVmlld3BvcnRDb250ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICBfZ2V0RWxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9dmlld3BvcnRdJyk7XG4gICAgICAgICAgICBpZiAoIWVsKSB7XG4gICAgICAgICAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ZpZXdwb3J0Jyk7XG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ2luaXRpYWwtc2NhbGU9MS4wJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2pvaW5QYWlyczogZnVuY3Rpb24oa2V5ZWQpe1xuICAgICAgICAgICAgdmFyIHBhaXJzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4ga2V5ZWQpIHtcbiAgICAgICAgICAgICAgICBwYWlycy5wdXNoKGtleSArICc9JyArIGtleWVkW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhaXJzLmpvaW4oJywgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2V4cGxvZGVQYWlyczogZnVuY3Rpb24obWV0YVN0cmluZyl7XG4gICAgICAgICAgICB2YXIgcGFpcnMgPSBtZXRhU3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgICAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgICAgICAgICBwYWlyID0gcGFpci50cmltKCk7XG4gICAgICAgICAgICAgICAgdmFyIGt2ID0gcGFpci5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIG9ialtrdlswXV0gPSBrdlsxXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBIZWxsb1NpZ24gPSB7XG4gICAgICAgIFZFUlNJT046IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24sXG4gICAgICAgIERFRkFVTFRfVVhfVkVSU0lPTjogMSxcbiAgICAgICAgSUZSQU1FX1dJRFRIX1JBVElPOiAwLjgsXG4gICAgICAgIERFRkFVTFRfV0lEVEg6IDkwMCxcbiAgICAgICAgREVGQVVMVF9IRUlHSFQ6IDkwMCxcbiAgICAgICAgTUlOX0hFSUdIVDogNDgwLFxuICAgICAgICB3cmFwcGVyOiBudWxsLFxuICAgICAgICBpZnJhbWU6IG51bGwsXG4gICAgICAgIG92ZXJsYXk6IG51bGwsXG4gICAgICAgIGNhbmNlbEJ1dHRvbjogbnVsbCxcbiAgICAgICAgY2xpZW50SWQ6IG51bGwsXG4gICAgICAgIGlzT2xkSUU6ICgvbXNpZSAoOHw3fDZ8NSkvZ2kudGVzdCh1c2VyQWdlbnQpKSxcbiAgICAgICAgaXNGRjogKC9maXJlZm94L2dpLnRlc3QodXNlckFnZW50KSksXG4gICAgICAgIGlzT3BlcmE6ICgvb3BlcmEvZ2kudGVzdCh1c2VyQWdlbnQpKSxcbiAgICAgICAgaXNNb2JpbGU6ICgvYW5kcm9pZHx3ZWJvc3xpcGhvbmV8aXBhZHxpcG9kfGJsYWNrYmVycnl8aWVtb2JpbGV8b3BlcmEgbWluaS9pLnRlc3QodXNlckFnZW50KSksXG4gICAgICAgIGJhc2VVcmw6ICdodHRwczovL3d3dy5oZWxsb3NpZ24uY29tJyxcbiAgICAgICAgY2RuQmFzZVVybDogJ2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9jZG4uaGVsbG9mYXguY29tJyxcbiAgICAgICAgWFdNOiBYV00sXG5cbiAgICAgICAgQ1VMVFVSRVM6IHtcbiAgICAgICAgICAgIEVOX1VTOiAnZW5fVVMnLFxuICAgICAgICAgICAgRlJfRlI6ICdmcl9GUicsXG4gICAgICAgICAgICBERV9ERTogJ2RlX0RFJyxcbiAgICAgICAgICAgIFNWX1NFOiAnc3ZfU0UnLFxuICAgICAgICAgICAgWkhfQ046ICd6aF9DTicsXG4gICAgICAgICAgICBEQV9ESzogJ2RhX0RLJyxcbiAgICAgICAgICAgIE5MX05MOiAnbmxfTkwnLFxuICAgICAgICAgICAgRVNfRVM6ICdlc19FUycsXG4gICAgICAgICAgICBFU19NWDogJ2VzX01YJyxcbiAgICAgICAgICAgIFBUX0JSOiAncHRfQlInLFxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdXBwb3J0ZWRDdWx0dXJlcyA9IFt0aGlzLkVOX1VTLCB0aGlzLkZSX0ZSLCB0aGlzLkRFX0RFLCB0aGlzLlNWX1NFLCB0aGlzLlpIX0NOLCB0aGlzLkRBX0RLLCB0aGlzLk5MX05MLCB0aGlzLkVTX0VTLCB0aGlzLkVTX01YLCB0aGlzLlBUX0JSXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5pbml0KCksXG5cbiAgICAgICAgaXNEZWJ1Z0VuYWJsZWQ6IHdpbmRvdy5pc0RlYnVnRW5hYmxlZCxcblxuICAgICAgICAvLyBQVUJMSUMgRVZFTlRTXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyAtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAgICBBbiBlcnJvciBvY2N1cnJlZCBpbiB0aGUgaUZyYW1lXG4gICAgICAgIC8vIC0gc2lnbmF0dXJlX3JlcXVlc3Rfc2lnbmVkICAgICAgIFRoZSBzaWduYXR1cmUgcmVxdWVzdCB3YXMgc2lnbmVkXG4gICAgICAgIC8vIC0gc2lnbmF0dXJlX3JlcXVlc3RfY2FuY2VsZWQgICAgIFRoZSB1c2VyIGNsb3NlZCB0aGUgaUZyYW1lIGJlZm9yZSBjb21wbGV0aW5nXG5cblxuICAgICAgICAvLyBUSEVTRSBFVkVOVCBDT0RFUyBBUkUgQUNUVUFMTFkgVVNFRCBJTiBUV08gUExBQ0VTXG4gICAgICAgIC8vIElGIFlPVSBDSEFOR0UgVEhFTSBNQUtFIFNVUkUgVE8gQ0hBTkdFIFRIRSBPVEhFUlNcbiAgICAgICAgLy8gSU4gSEZBQ1RJT05TLlBIUCBUTyBTVEFZIENPTlNJU1RFTlQuXG4gICAgICAgIEVWRU5UX1NJR05FRDogJ3NpZ25hdHVyZV9yZXF1ZXN0X3NpZ25lZCcsXG4gICAgICAgIEVWRU5UX0RFQ0xJTkVEOiAnc2lnbmF0dXJlX3JlcXVlc3RfZGVjbGluZWQnLFxuICAgICAgICBFVkVOVF9DQU5DRUxFRDogJ3NpZ25hdHVyZV9yZXF1ZXN0X2NhbmNlbGVkJyxcbiAgICAgICAgRVZFTlRfU0VOVDogJ3NpZ25hdHVyZV9yZXF1ZXN0X3NlbnQnLFxuICAgICAgICBFVkVOVF9URU1QTEFURV9DUkVBVEVEOiAndGVtcGxhdGVfY3JlYXRlZCcsXG4gICAgICAgIEVWRU5UX0VSUk9SOiAnZXJyb3InLFxuXG5cbiAgICAgICAgLy8gIC0tLS0gIFBVQkxJQyBNRVRIT0RTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGFwcENsaWVudElkKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudElkID0gYXBwQ2xpZW50SWQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3BlbjogZnVuY3Rpb24ocGFyYW1zKSB7XG5cbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgLy8gUEFSQU1FVEVSUzpcbiAgICAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIC8vIC0gdXJsICAgICAgICAgICAgICAgICAgICAgIFN0cmluZy4gVGhlIHVybCB0byBvcGVuIGluIHRoZSBjaGlsZCBmcmFtZVxuICAgICAgICAgICAgLy8gLSByZWRpcmVjdFVybCAgICAgICAgICAgICAgU3RyaW5nLiBXaGVyZSB0byBnbyBhZnRlciB0aGUgc2lnbmF0dXJlIGlzIGNvbXBsZXRlZFxuICAgICAgICAgICAgLy8gLSBhbGxvd0NhbmNlbCAgICAgICAgICAgICAgQm9vbGVhbi4gV2hldGhlciBhIGNhbmNlbCBidXR0b24gc2hvdWxkIGJlIGRpc3BsYXllZCAoZGVmYXVsdCA9IHRydWUpXG4gICAgICAgICAgICAvLyAtIG1lc3NhZ2VMaXN0ZW5lciAgICAgICAgICBGdW5jdGlvbi4gQSBsaXN0ZW5lciBmb3IgWC13aW5kb3cgbWVzc2FnZXMgY29taW5nIGZyb20gdGhlIGNoaWxkIGZyYW1lXG4gICAgICAgICAgICAvLyAtIHVzZXJDdWx0dXJlICAgICAgICAgICAgICBIZWxsb1NpZ24uQ1VMVFVSRS4gT25lIG9mIHRoZSBIZWxsb1NpZ24uQ1VMVFVSRVMuc3VwcG9ydGVkQ3VsdHVyZXMgKGRlZmF1bHQgPSBIZWxsb1NpZ24uQ1VMVFVSRVMuRU5fVVMpXG4gICAgICAgICAgICAvLyAtIGRlYnVnICAgICAgICAgICAgICAgICAgICBCb29sZWFuLiBXaGVuIHRydWUsIGRlYnVnZ2luZyBzdGF0ZW1lbnRzIHdpbGwgYmUgd3JpdHRlbiB0byB0aGUgY29uc29sZSAoZGVmYXVsdCA9IGZhbHNlKVxuICAgICAgICAgICAgLy8gLSBza2lwRG9tYWluVmVyaWZpY2F0aW9uICAgQm9vbGVhbi4gV2hlbiB0cnVlLCBkb21haW4gdmVyaWZpY2F0aW9uIHN0ZXAgd2lsbCBiZSBza2lwcGVkIGlmIGFuZCBvbmx5IGlmIHRoZSBTaWduYXR1cmUgUmVxdWVzdCB3YXMgY3JlYXRlZCB3aXRoIHRlc3RfbW9kZT0xIChkZWZhdWx0ID0gZmFsc2UpXG4gICAgICAgICAgICAvLyAtIGNvbnRhaW5lciAgICAgICAgICAgICAgICBET00gZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgaWZyYW1lIG9uIHRoZSBwYWdlIChkZWZhdWx0ID0gZG9jdW1lbnQuYm9keSlcbiAgICAgICAgICAgIC8vIC0gaGVpZ2h0ICAgICAgICAgICAgICAgICAgIEhlaWdodCBvZiB0aGUgaUZyYW1lIChvbmx5IGFwcGxpY2FibGUgd2hlbiBhIGNvbnRhaW5lciBpcyBzcGVjaWZpZWQpXG4gICAgICAgICAgICAvLyAtIGhpZGVIZWFkZXIgICAgICAgICAgICAgICBCb29sZWFuLiBXaGVuIHRydWUsIHRoZSBoZWFkZXIgd2lsbCBiZSBoaWRkZW4gKGRlZmF1bHQgPSBmYWxzZSkuIFRoaXMgaXMgb25seSBmdW5jdGlvbmFsIGZvciBjdXN0b21lcnMgd2l0aCBlbWJlZGRlZCBicmFuZGluZyBlbmFibGVkLlxuICAgICAgICAgICAgLy8gLSB1eFZlcnNpb24gICAgICAgICAgICAgICAgSW50ZWdlci4gVGhlIHZlcnNpb24gb2YgdGhlIGVtYmVkZGVkIHVzZXIgZXhwZXJpZW5jZSB0byBkaXNwbGF5IHRvIHNpZ25lcnMgKDEgPSBsZWdhY3ksIDIgPSByZXNwb25zaXZlKS4gVGhpcyBvcHRpb24gaXMgb25seSBob25vcmVkIGlmIHlvdXIgYWNjb3VudCBoYXMgYWNjZXNzZWQgdGhlIEFQSSBwcmlvciB0byBOb3YgMTQsIDIwMTUuXG4gICAgICAgICAgICAvLyAtIHJlcXVlc3RlciAgICAgICAgICAgICAgICBTdHJpbmcuIFRoZSBlbWFpbCBvZiB0aGUgcGVyc29uIGlzc3VpbmcgYSBzaWduYXR1cmUgcmVxdWVzdC4gUmVxdWlyZWQgZm9yIGFsbG93aW5nICdNZSArIE90aGVycycgcmVxdWVzdHNcbiAgICAgICAgICAgIC8vIC0gd2hpdGVMYWJlbGluZ09wdGlvbnMgICAgIE9iamVjdC4gQW4gYXNzb2NpYXRpdmUgYXJyYXkgdG8gYmUgdXNlZCB0byBjdXN0b21pemUgdGhlIGFwcCdzIHNpZ25lciBwYWdlXG4gICAgICAgICAgICAvLyAtIGhlYWx0aENoZWNrVGltZW91dE1zICAgICBJbnRlZ2VyLiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGZvciBhIHJlc3BvbnNlIGZyb20gdGhlIGlmcmFtZS4gSWYgbm8gcmVzcG9uc2UgYWZ0ZXIgdGhhdCB0aW1lIHRoZSBpZnJhbWUgd2lsbCBiZSBjbG9zZWQuIDE1MDAwIG1pbGxpc2Vjb25kcyBpcyByZWNvbW1lbmRlZC5cblxuICAgICAgICAgICAgdmFyIHJlZGlyZWN0VXJsID0gdGhpcy5zYWZlVXJsKHBhcmFtc1sncmVkaXJlY3RVcmwnXSk7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZUxpc3RlbmVyID0gcGFyYW1zWydtZXNzYWdlTGlzdGVuZXInXTtcbiAgICAgICAgICAgIHZhciBmcmFtZVVybCA9IHRoaXMuc2FmZVVybChwYXJhbXNbJ3VybCddKTtcbiAgICAgICAgICAgIHRoaXMudXhWZXJzaW9uID0gcGFyYW1zWyd1eFZlcnNpb24nXSB8fCB0aGlzLkRFRkFVTFRfVVhfVkVSU0lPTjtcbiAgICAgICAgICAgIHRoaXMuaXNEZWZhdWx0VVggPSAodGhpcy51eFZlcnNpb24gPT09IHRoaXMuREVGQVVMVF9VWF9WRVJTSU9OKTtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQ2hlY2tUaW1lb3V0TXMgPSBwYXJhbXNbJ2hlYWx0aENoZWNrVGltZW91dE1zJ107XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnV4VmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGZyYW1lVXJsICs9IChmcmFtZVVybC5pbmRleE9mKCc/JykgPiAwID8gJyYnIDogJz8nKSArICd1eF92ZXJzaW9uPScgKyB0aGlzLnV4VmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zWydkZWJ1ZyddICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNEZWJ1Z0VuYWJsZWQgPSAocGFyYW1zWydkZWJ1ZyddID09PSB0cnVlIHx8IHBhcmFtc1snZGVidWcnXSA9PSAndHJ1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbJ3NraXBEb21haW5WZXJpZmljYXRpb24nXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNraXBEb21haW5WZXJpZmljYXRpb24gPSAocGFyYW1zWydza2lwRG9tYWluVmVyaWZpY2F0aW9uJ10gPT09IHRydWUgfHwgcGFyYW1zWydza2lwRG9tYWluVmVyaWZpY2F0aW9uJ10gPT0gJ3RydWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zWydoaWRlSGVhZGVyJ10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlSGVhZGVyID0gKHBhcmFtc1snaGlkZUhlYWRlciddID09PSB0cnVlIHx8IHBhcmFtc1snaGlkZUhlYWRlciddID09ICd0cnVlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1snd2hpdGVMYWJlbGluZ09wdGlvbnMnXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlTGFiZWxpbmdPcHRpb25zID0gSlNPTi5zdHJpbmdpZnkocGFyYW1zWyd3aGl0ZUxhYmVsaW5nT3B0aW9ucyddKTtcbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlTGFiZWxpbmdPcHRpb25zID0gdGhpcy53aGl0ZUxhYmVsaW5nT3B0aW9ucy5yZXBsYWNlKC8jL2csICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1snd2hpdGVMYWJlbGluZ09wdGlvbnMnXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBsKFwiSW52YWxpZCB3aGl0ZSBsYWJlbGluZyBvcHRpb25zIHN1cHBsaWVkLCBvcHRpb24gd2lsbCBiZSBpZ25vcmVkOiBcIiArIHBhcmFtc1snd2hpdGVMYWJlbGluZ09wdGlvbnMnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzSW5QYWdlID0gKHBhcmFtc1snY29udGFpbmVyJ10gIT09IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHBhcmFtc1snY29udGFpbmVyJ10gfHwgZG9jdW1lbnQuYm9keTtcblxuICAgICAgICAgICAgLy8gVmFsaWRhdGUgcGFyYW1ldGVyc1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNJblBhZ2UgJiYgcGFyYW1zWydoZWlnaHQnXSAhPT0gdW5kZWZpbmVkICYmIChpc05hTihwYXJzZUludChwYXJhbXNbJ2hlaWdodCddLCAxMCkpIHx8IHBhcmFtc1snaGVpZ2h0J10gPD0gMCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaUZyYW1lIGhlaWdodCAoJyArIHBhcmFtc1snaGVpZ2h0J10gKyAnKSBpdCBtdXN0IGJlIGEgdmFsaWQgcG9zaXRpdmUgbnVtYmVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGwoJ09wZW5pbmcgSGVsbG9TaWduIGVtYmVkZGVkIGlGcmFtZSB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1zOicpO1xuICAgICAgICAgICAgbChwYXJhbXMpO1xuXG4gICAgICAgICAgICBpZiAoIWZyYW1lVXJsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB1cmwgc3BlY2lmaWVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB1c2VyQ3VsdHVyZSA9IHR5cGVvZiBwYXJhbXNbJ3VzZXJDdWx0dXJlJ10gPT09ICd1bmRlZmluZWQnID8gdGhpcy5DVUxUVVJFUy5FTl9VUyA6IHBhcmFtc1sndXNlckN1bHR1cmUnXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmluQXJyYXkodXNlckN1bHR1cmUsIHRoaXMuQ1VMVFVSRVMuc3VwcG9ydGVkQ3VsdHVyZXMpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB1c2VyQ3VsdHVyZSBzcGVjaWZpZWQ6ICcgKyB1c2VyQ3VsdHVyZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZyYW1lVXJsICs9IChmcmFtZVVybC5pbmRleE9mKCc/JykgPiAwID8gJyYnIDogJz8nKTtcbiAgICAgICAgICAgIGlmIChyZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICAgIGZyYW1lVXJsICs9ICdyZWRpcmVjdF91cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdFVybCkgKyAnJic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmcmFtZVVybCArPSAncGFyZW50X3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvXFw/LiovLCAnJykpICsgJyYnO1xuICAgICAgICAgICAgZnJhbWVVcmwgKz0gKHRoaXMuc2tpcERvbWFpblZlcmlmaWNhdGlvbiA9PT0gdHJ1ZSA/ICdza2lwX2RvbWFpbl92ZXJpZmljYXRpb249MSYnIDogJycpO1xuICAgICAgICAgICAgZnJhbWVVcmwgKz0gJ2NsaWVudF9pZD0nICsgdGhpcy5jbGllbnRJZCArICcmJztcbiAgICAgICAgICAgIGZyYW1lVXJsICs9ICh0eXBlb2YgcGFyYW1zWydyZXF1ZXN0ZXInXSAhPT0gJ3VuZGVmaW5lZCcgPyAncmVxdWVzdGVyPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zWydyZXF1ZXN0ZXInXSkgKyAnJicgOiAnJyk7XG4gICAgICAgICAgICBmcmFtZVVybCArPSAndXNlcl9jdWx0dXJlPScgKyB1c2VyQ3VsdHVyZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGVidWdFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVVcmwgKz0gJyZkZWJ1Zz10cnVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGVIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICBmcmFtZVVybCArPSAnJmhpZGVIZWFkZXI9dHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy53aGl0ZUxhYmVsaW5nT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGZyYW1lVXJsICs9ICcmd2hpdGVfbGFiZWxpbmdfb3B0aW9ucz0nICsgZW5jb2RlVVJJKHRoaXMud2hpdGVMYWJlbGluZ09wdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmcmFtZVVybCArPSAnJmpzX3ZlcnNpb249JyArIHRoaXMuVkVSU0lPTjtcblxuICAgICAgICAgICAgdmFyIG9yaWdpbiA9IGZyYW1lVXJsLnJlcGxhY2UoLyhbXjpdKzpcXC9cXC9bXlxcL10rKS4qLywgJyQxJyk7XG4gICAgICAgICAgICB2YXIgd2luZG93RGltcyA9IHRoaXMuZ2V0V2luZG93RGltZW5zaW9ucyhwYXJhbXNbJ2hlaWdodCddKTtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgICAgJ292ZXJsYXknOiB7XG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ2JvdHRvbSc6ICcwcHgnLFxuICAgICAgICAgICAgICAgICAgICAncmlnaHQnOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiA5OTk3LFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyMyMjInLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAuNCxcbiAgICAgICAgICAgICAgICAgICAgJy1raHRtbC1vcGFjaXR5JzogMC40LFxuICAgICAgICAgICAgICAgICAgICAnLW1vei1vcGFjaXR5JzogMC40LFxuICAgICAgICAgICAgICAgICAgICAnZmlsdGVyJzogJ2FscGhhKG9wYWNpdHk9NDApJyxcbiAgICAgICAgICAgICAgICAgICAgJy1tcy1maWx0ZXInOiAncHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9NDApJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3dyYXBwZXInOiB0aGlzLmlzSW5QYWdlID8ge30gOiB7XG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiB3aW5kb3dEaW1zLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiB3aW5kb3dEaW1zLmxlZnQsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogOTk5OFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2lmcmFtZSc6IHRoaXMuaXNJblBhZ2UgPyB7fSA6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlcic6ICcxcHggc29saWQgIzUwNTA1MCcsXG4gICAgICAgICAgICAgICAgICAgICdib3gtc2hhZG93JzogJzBweCAycHggMThweCAycHggIzY2NicsXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGRkYnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6IDk5OThcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdjYW5jZWxCdXR0b24nOiB7XG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiAnLTEzcHgnLFxuICAgICAgICAgICAgICAgICAgICAncmlnaHQnOiAnLTEzcHgnLFxuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMzBweCcsXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgdGhpcy5jZG5CYXNlVXJsICsgJy9jc3MvZmFuY3lib3gvZmFuY3lib3gucG5nKScsXG4gICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJy00MHB4IDBweCcsXG4gICAgICAgICAgICAgICAgICAgICdjdXJzb3InOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogOTk5OVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciByZXNpemVJRnJhbWUgPSBmdW5jdGlvbiBfcmVzaXplSUZyYW1lKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmlmcmFtZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaW1zID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpbXMgPSBzZWxmLmdldE1vYmlsZURpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpbXMgPSBzZWxmLmdldFdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYud3JhcHBlci5zdHlsZVsndG9wJ10gPSBkaW1zLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi53cmFwcGVyLnN0eWxlWydsZWZ0J10gPSBkaW1zLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYud3JhcHBlci5zdHlsZVsnd2lkdGgnXSA9IGRpbXMud2lkdGhTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaWZyYW1lLnN0eWxlWydoZWlnaHQnXSA9IGRpbXMuaGVpZ2h0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlmcmFtZS5zdHlsZVsnd2lkdGgnXSA9IGRpbXMud2lkdGhTdHJpbmc7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy51eFZlcnNpb24gPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJblBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRqdXN0IHRoZSBpRnJhbWUgc3R5bGUgdG8gZml0IHRoZSBpbi1wYWdlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3dyYXBwZXInXVsnd2lkdGgnXSA9ICcxMDAlJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWyd3cmFwcGVyJ11bJ2hlaWdodCddID0gd2luZG93RGltcy5oZWlnaHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snaWZyYW1lJ11bJ3dpZHRoJ10gPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snaWZyYW1lJ11bJ2hlaWdodCddID0gd2luZG93RGltcy5oZWlnaHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snaWZyYW1lJ11bJ2JvcmRlciddID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWydib3gtc2hhZG93J10gPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snY2FuY2VsQnV0dG9uJ11bJ2Rpc3BsYXknXSA9ICdub25lJztcblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGlPUyBoYWNrLiAgQXBwYXJlbnRseSBpT1MgaWdub3JlcyB3aWR0aHMgc2V0XG4gICAgICAgICAgICAgICAgICAgIC8vIHdpdGggYSBub24tcGl4ZWwgdmFsdWUsIHdoaWNoIG1lYW5zIGlGcmFtZXMgZ2V0IGV4cGFuZGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHRoZSBmdWxsIHdpZHRoIG9mIHRoZWlyIGNvbnRlbnQuICBTZXR0aW5nIGEgcGl4ZWxcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWUgYW5kIHRoZW4gdXNpbmcgYG1pbi13aWR0aGAgaXMgdGhlIHdvcmthcm91bmQgZm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZTogIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMwODM0NjIvaG93LXRvLWdldC1hbi1pZnJhbWUtdG8tYmUtcmVzcG9uc2l2ZS1pbi1pb3Mtc2FmYXJpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWyd3aWR0aCddID0gJzFweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWydtaW4td2lkdGgnXSA9ICcxMDAlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2JpbGVEaW1zID0gdGhpcy5nZXRNb2JpbGVEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkanVzdCB0aGUgaUZyYW1lIHN0eWxlIHRvIGZpdCB0aGUgd2hvbGUgc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snd3JhcHBlciddWydwb3NpdGlvbiddID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWyd3cmFwcGVyJ11bJ3RvcCddID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3dyYXBwZXInXVsnbGVmdCddID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3dyYXBwZXInXVsnd2lkdGgnXSA9IG1vYmlsZURpbXMud2lkdGhTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snd3JhcHBlciddWydoZWlnaHQnXSA9IG1vYmlsZURpbXMuaGVpZ2h0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWydwb3NpdGlvbiddID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsndG9wJ10gPSAwO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWydsZWZ0J10gPSAwO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ2lmcmFtZSddWyd3aWR0aCddID0gbW9iaWxlRGltcy53aWR0aFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnaGVpZ2h0J10gPSBtb2JpbGVEaW1zLmhlaWdodFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydpZnJhbWUnXVsnYm9yZGVyJ10gPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snaWZyYW1lJ11bJ2JveC1zaGFkb3cnXSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydjYW5jZWxCdXR0b24nXVsnZGlzcGxheSddID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQnVpbGQgb3ZlcmxheVxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5QYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hzRW1iZWRkZWRPdmVybGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogYmxvY2s7Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSB3cmFwcGVyXG4gICAgICAgICAgICBpZiAoIXRoaXMud3JhcHBlcikge1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hzRW1iZWRkZWRXcmFwcGVyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBIYWNrLiAgV2UgbmVlZCB0aGlzIG9uIG1vYmlsZSBiZWZvcmUgd2UgaW5zZXJ0IHRoZSBET01cbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50LCBvdGhlcndpc2UgdGhlIG1vZGFsIGFwcGVhcnMgYWJvdmUgdGhlIGZvbGRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5QYWdlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSAmJiB0aGlzLmlzRGVmYXVsdFVYKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBtb2JpbGUgZGV2aWNlLCBwb2xsIHRoZSB3aW5kb3cgZGltZW5zaW9ucyB0byBzZWVcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHpvb20gc2NhbGUgY2hhbmdlcyBhbmQgcmVzaXplIHRoZSBpRnJhbWUuIFRoaXMgcHJldmVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHVzZXIgZnJvbSB6b29taW5nIGFuZCBnZXR0aW5nIGludG8gYSBzdGF0ZSB3aGVyZSB0aGV5IGNhbid0XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1Ym1pdCB0aGUgZW1iZWRkZWQgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICB2YXIgem9vbVNjYWxlID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGV0ZWN0Wm9vbSA9IGZ1bmN0aW9uIF9kZXRlY3Rab29tKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1pvb21TY2FsZSA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh6b29tU2NhbGUgIT09IG5ld1pvb21TY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpvb21TY2FsZSA9IG5ld1pvb21TY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemVJRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZGV0ZWN0Wm9vbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkLCBhbHNvIHJlc2l6ZSB0aGUgaWZyYW1lIGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBPbmx5IGRvIHRoaXMgd2hlbiB0aGUgaUZyYW1lIGlzIGRpc3BsYXllZCBhcyBhIHBvcHVwLCBpdCBkb2VzIG5vdCByZWFsbHkgbWFrZSBzZW5zZSB3aGVuIGl0J3MgaW4tcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBBbHNvIHVzZWQgZm9yIG5ldyBtb2JpbGUgdXhcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9ucmVzaXplID0gcmVzaXplSUZyYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQnVpbGQgdGhlIGlGcmFtZVxuICAgICAgICAgICAgaWYgKCF0aGlzLmlmcmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKCdpZCcsICdoc0VtYmVkZGVkRnJhbWUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5pZnJhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBmcmFtZVVybCk7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3Njcm9sbGluZycsICdubycpOyAvLyBUaGlzIG5lZWRzIHRvIHN0YXkgYXMgJ25vJyBvciBlbHNlIGlQYWRzLCBldGMuIGdldCBicm9rZW5cbiAgICAgICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnZnJhbWVib3JkZXInLCAnMCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWZhdWx0VVgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy5ERUZBVUxUX1dJRFRIKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB3aW5kb3dEaW1zLmhlaWdodFJhdyk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IERldGVjdGluZyAnZW1iZWRkZWRTaWduJyBpbiB0aGUgZnJhbWVVcmwgaXMgYSBoYWNrLiBDbGVhblxuICAgICAgICAgICAgLy8gdGhpcyB1cCBvbmNlIHRoZSBlbWJlZGRlZCBjbG9zZSBidXR0b24gaGFzIGJlZW4gaW1wbGVtZW50ZWQgZm9yXG4gICAgICAgICAgICAvLyBlbWJlZGRlZCByZXF1ZXN0aW5nIGFuZCB0ZW1wbGF0ZXMuXG4gICAgICAgICAgICBpZiAoZnJhbWVVcmwuaW5kZXhPZignZW1iZWRkZWRTaWduJykgPT09IC0xIHx8IHBhcmFtc1sndXhWZXJzaW9uJ10gIT0gbnVsbCAmJiBwYXJhbXNbJ3V4VmVyc2lvbiddIDwgMikge1xuICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNJblBhZ2UgJiYgKHBhcmFtc1snYWxsb3dDYW5jZWwnXSA9PT0gdHJ1ZSB8fCBwYXJhbXNbJ2FsbG93Q2FuY2VsJ10gPT09IHVuZGVmaW5lZCkgJiYgIXRoaXMuY2FuY2VsQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaHNFbWJlZGRlZENhbmNlbCcpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdocmVmJywgJ2phdmFzY3JpcHQ6OycpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgaUZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgSGVsbG9TaWduLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gU2VuZCAnY2FuY2VsJyBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsKCdSZXBvcnRpbmcgY2FuY2VsYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdldmVudCc6IEhlbGxvU2lnbi5FVkVOVF9DQU5DRUxFRFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmICghcGFyYW1zWydhbGxvd0NhbmNlbCddICYmIHRoaXMuY2FuY2VsQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQ2hpbGQodGhpcy5jYW5jZWxCdXR0b24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBpbmxpbmUgc3R5bGluZ1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBzdHlsZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzW2tdO1xuICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHN0eWxlc1trXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZVtpXSA9IHN0eWxlc1trXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgLSBleGNlcHRpb25zIGdldCB0aHJvd24gd2hlbiB0aGUgZ2l2ZW4gc3R5bGUgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jYW5jZWxCdXR0b24gJiYgKHRoaXMuaXNGRiB8fCB0aGlzLmlzT3BlcmEpKSB7XG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveCBpcyB3ZWlyZCB3aXRoIGJnIGltYWdlc1xuICAgICAgICAgICAgICAgIHZhciBzID0gdGhpcy5jYW5jZWxCdXR0b24uZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIHMgKz0gKHMgPyAnOyAnIDogJycpO1xuICAgICAgICAgICAgICAgIHMgKz0gJ2JhY2tncm91bmQtaW1hZ2U6ICcgKyBzdHlsZXMuY2FuY2VsQnV0dG9uWydiYWNrZ3JvdW5kLWltYWdlJ10gKyAnOyAnO1xuICAgICAgICAgICAgICAgIHMgKz0gJ2JhY2tncm91bmQtcG9zaXRpb246ICcgKyBzdHlsZXMuY2FuY2VsQnV0dG9uWydiYWNrZ3JvdW5kLXBvc2l0aW9uJ10gKyAnOyc7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsIHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJblBhZ2UgJiYgKCF0aGlzLmlzTW9iaWxlIHx8IHRoaXMuaXNEZWZhdWx0VVgpKSB7XG4gICAgICAgICAgICAgICAgLy8gUnVuIHJlc2l6ZUlGcmFtZSB0byBtYWtlIHN1cmUgaXQgZml0cyBiZXN0IGZyb20gdGhlIGJlZ2lubmluZ1xuICAgICAgICAgICAgICAgIHJlc2l6ZUlGcmFtZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSAmJiAhdGhpcy5pc0RlZmF1bHRVWCAmJiB3aW5kb3cgPT09IHdpbmRvdy50b3ApIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHNldCB0aGUgbWV0YSB0YWdzIGZvciB0aGUgdG9wIHdpbmRvd1xuICAgICAgICAgICAgICAgIE1ldGFUYWdIZWxwZXIuc2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9iaWxlICYmICF0aGlzLmlzSW5QYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXhJZnJhbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5maXhJZnJhbWUoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5maXhJZnJhbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDbG9zZSB0aGUgaWZyYW1lIGlmIHBhZ2UgZmFpbHMgdG8gaW5pdGlhbGl6ZSB3aXRoaW4gMTUgc2Vjb25kc1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhbHRoQ2hlY2tUaW1lb3V0TXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oZWFsdGhDaGVja1RpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICdTaWduZXIgcGFnZSBmYWlsZWQgdG8gaW5pdGlhbGl6ZSB3aXRoaW4gJyArIHNlbGYuaGVhbHRoQ2hlY2tUaW1lb3V0TXMgKyAnIG1pbGxpc2Vjb25kcy4nXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVwb3J0RXJyb3IobWVzc2FnZSwgZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLmhlYWx0aENoZWNrVGltZW91dE1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RhcnQgbGlzdGVuaW5nIGZvciBtZXNzYWdlcyBmcm9tIHRoZSBpRnJhbWVcbiAgICAgICAgICAgIFhXTS5yZWNlaXZlKGZ1bmN0aW9uIF9wYXJlbnRXaW5kb3dDYWxsYmFjayhldnQpe1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldnQuc291cmNlIHx8ICdoc0VtYmVkZGVkRnJhbWUnO1xuXG4gICAgICAgICAgICAgICAgaWYgKGV2dC5kYXRhID09PSAnaW5pdGlhbGl6ZScgJiYgcGFyYW1zWyd1eFZlcnNpb24nXSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaGVhbHRoQ2hlY2tUaW1lb3V0TXMpIGNsZWFyVGltZW91dChzZWxmLl9oZWFsdGhDaGVja1RpbWVvdXRIYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgY29udGFpbmVyIGZyb20gcGF5bG9hZCB0byBwcmV2ZW50IGNpcmN1bGFyIHJlZmVyZW5jZSBlcnJvclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXlsb2FkLmNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgWFdNLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyB0eXBlOiAnZW1iZWRkZWRDb25maWcnLCBwYXlsb2FkOiBwYXlsb2FkIH0pLCBldnQub3JpZ2luLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmRhdGEgPT0gJ2Nsb3NlJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBpRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgSGVsbG9TaWduLmNsb3NlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VMaXN0ZW5lciAmJiBwYXJhbXNbJ3V4VmVyc2lvbiddID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXZlbnQnOiBIZWxsb1NpZ24uRVZFTlRfQ0FOQ0VMRURcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldnQuZGF0YSA9PSAnZGVjbGluZScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgaUZyYW1lXG4gICAgICAgICAgICAgICAgICAgIEhlbGxvU2lnbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JzogSGVsbG9TaWduLkVWRU5UX0RFQ0xJTkVEXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmRhdGEgPT0gJ3VzZXItZG9uZScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgaUZyYW1lXG4gICAgICAgICAgICAgICAgICAgIEhlbGxvU2lnbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmRhdGEuaW5kZXhPZignaGVsbG86JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGVsbG8gbWVzc2FnZSAtIEV4dHJhY3QgdG9rZW4gYW5kIHNlbmQgaXQgYmFja1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBldnQuZGF0YS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBwYXJ0c1sxXTtcbiAgICAgICAgICAgICAgICAgICAgWFdNLnNlbmQoJ2hlbGxvYmFjazonICsgdG9rZW4sIGZyYW1lVXJsLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZUxpc3RlbmVyICYmIGV2dC5kYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yd2FyZCB0byBtZXNzYWdlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudERhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAsIHBhaXJzID0gZXZ0LmRhdGEuc3BsaXQoJyYnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZWN1cnNpdmUgaGVscGVyIGZ1bmN0aW9uIHRvIGRlc2VyaWFsaXplIHRoZSBldmVudCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzZXJpYWxpemVFdmVudERhdGEgPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhZmVseSBwYXJzZSB0aGUgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gSlNPTi5wYXJzZShzdHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHBhcnNlSnNvbihvYmpba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7IC8qIGlnbm9yZSAqLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudERhdGFbcFswXV0gPSBkZXNlcmlhbGl6ZUV2ZW50RGF0YShkZWNvZGVVUklDb21wb25lbnQocFsxXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0ZW5lcihldmVudERhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG9yaWdpbik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAvLyBSZXNldCB2aWV3cG9ydCBzZXR0aW5nc1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb2JpbGUgJiYgIXRoaXMuaXNEZWZhdWx0VVggJiYgd2luZG93ID09PSB3aW5kb3cudG9wKSB7XG4gICAgICAgICAgICAgICAgTWV0YVRhZ0hlbHBlci5yZXN0b3JlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGwoJ0Nsb3NpbmcgSGVsbG9TaWduIGVtYmVkZGVkIGlGcmFtZScpO1xuICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIGNoaWxkIGlmcmFtZSBmcm9tIHRoZSBwYXJlbnQgd2luZG93XG4gICAgICAgICAgICBpZiAodGhpcy5pZnJhbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuY2VsQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlci5yZW1vdmVDaGlsZCh0aGlzLmNhbmNlbEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZmFkZU91dElGcmFtZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmZpeElmcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblxuICAgICAgICAvLyAgLS0tLSAgUFJJVkFURSBNRVRIT0RTICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgX2ZhZGVPdXRJRnJhbWU6IGZ1bmN0aW9uIF9mYWRlT3V0SUZyYW1lKGN1cnJlbnRPcGFjaXR5KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoc2VsZi5pZnJhbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRPcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcGFjaXR5ID0gMS4wO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcGFjaXR5IC09IDAuMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5pZnJhbWUuc3R5bGUub3BhY2l0eSA9IGN1cnJlbnRPcGFjaXR5O1xuICAgICAgICAgICAgICAgIHNlbGYuaWZyYW1lLnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyBwYXJzZUludChjdXJyZW50T3BhY2l0eSAqIDEwMCwgMTApICsgJyknO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50T3BhY2l0eSA8PSAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pZnJhbWUuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaWZyYW1lLnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PTApJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGlvblRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250YWluZXIucmVtb3ZlQ2hpbGQoc2VsZi5vdmVybGF5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRhaW5lci5yZW1vdmVDaGlsZChzZWxmLndyYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLndyYXBwZXIucmVtb3ZlQ2hpbGQoc2VsZi5pZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm92ZXJsYXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlmcmFtZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYud3JhcHBlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvblRpbWVyID0gc2V0VGltZW91dCgoZnVuY3Rpb24oY3VycmVudE9wYWNpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZmFkZU91dElGcmFtZShjdXJyZW50T3BhY2l0eSk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSkoY3VycmVudE9wYWNpdHkpLCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVwb3J0RXJyb3I6IGZ1bmN0aW9uKGVycm9yTWVzc2FnZSwgcGFyZW50VXJsKSB7XG4gICAgICAgICAgICBYV00uc2VuZCh7XG4gICAgICAgICAgICAgICAgJ2V2ZW50JzogSGVsbG9TaWduLkVWRU5UX0VSUk9SLFxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6IGVycm9yTWVzc2FnZVxuICAgICAgICAgICAgfSwgcGFyZW50VXJsKTtcbiAgICAgICAgfSxcblxuICAgICAgICBlbnN1cmVQYXJlbnREb21haW46IGZ1bmN0aW9uKGRvbWFpbk5hbWUsIHBhcmVudFVybCwgdG9rZW4sIHNraXBEb21haW5WZXJpZmljYXRpb24sIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgIC8vIGRvbWFpbk5hbWU6ICBEb21haW4gdG8gbWF0Y2ggYWdhaW5zdCB0aGUgcGFyZW50IHdpbmRvdyBsb2NhdGlvblxuICAgICAgICAgICAgLy8gcGFyZW50VXJsOiAgIFVybCBvZiB0aGUgcGFyZW50IHdpbmRvdyB0byBjaGVjayAocHJvdmlkZWQgdG8gdXMgYnV0IG5vdCByZWxpYWJsZSlcbiAgICAgICAgICAgIC8vIGNhbGxiYWNrOiAgICBNZXRob2QgdG8gY2FsbCB3aXRoIHRoZSByZXN1bHQsIGl0IHNob3VsZCB0YWtlIG9ubHkgb25lIGJvb2xlYW4gcGFyYW1ldGVyLlxuXG4gICAgICAgICAgICBpZiAod2luZG93LnRvcCA9PSB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3QgaW4gYW4gaUZyYW1lLCBubyBuZWVkIHRvIGdvIGZ1cnRoZXJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ1Rva2VuIG5vdCBzdXBwbGllZCBieSBIZWxsb1NpZ24uIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoJ0NhbGxiYWNrIG5vdCBzdXBwbGllZCBieSBIZWxsb1NpZ24uIFBsZWFzZSBjb250YWN0IHN1cHBvcnQuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmIChza2lwRG9tYWluVmVyaWZpY2F0aW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdhcm5pbmdNc2cgPSAnRG9tYWluIHZlcmlmaWNhdGlvbiBoYXMgYmVlbiBza2lwcGVkLiBCZWZvcmUgcmVxdWVzdGluZyBhcHByb3ZhbCBmb3IgeW91ciBhcHAsIHBsZWFzZSBiZSBzdXJlIHRvIHRlc3QgZG9tYWluIHZlcmlmaWNhdGlvbiBieSBzZXR0aW5nIHNraXBEb21haW5WZXJpZmljYXRpb24gdG8gZmFsc2UuJztcbiAgICAgICAgICAgICAgICBsKHdhcm5pbmdNc2cpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KHdhcm5pbmdNc2cpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU3RhcnRzIHdhaXRpbmcgZm9yIHRoZSBoZWxsbyBiYWNrIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBYV00ucmVjZWl2ZShmdW5jdGlvbiBfZW5zdXJlUGFyZW50RG9tYWluQ2FsbGJhY2soZXZ0KXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5kYXRhLmluZGV4T2YoJ2hlbGxvYmFjazonKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gZXZ0LmRhdGEuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZCA9IChwYXJ0c1sxXSA9PSB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh2YWxpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBkb21haW5OYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2VuZCBoZWxsbyBtZXNzYWdlXG4gICAgICAgICAgICBYV00uc2VuZCgnaGVsbG86JyArIHRva2VuLCBwYXJlbnRVcmwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFdpbmRvd0RpbWVuc2lvbnM6IGZ1bmN0aW9uKGN1c3RvbUhlaWdodCkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbFggPSBnZXRTY3JvbGxYKCk7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsWSA9IGdldFNjcm9sbFkoKTtcbiAgICAgICAgICAgIHZhciB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc09sZElFKSB7XG4gICAgICAgICAgICAgICAgd2luZG93V2lkdGggICA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0ICA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aCAgID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgd2luZG93SGVpZ2h0ICA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmlzSW5QYWdlICYmIGN1c3RvbUhlaWdodCA/IGN1c3RvbUhlaWdodCA6IE1hdGgubWF4KHRoaXMuTUlOX0hFSUdIVCwgd2luZG93SGVpZ2h0IC0gNjApO1xuXG4gICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLnV4VmVyc2lvbiA+IDEgPyBNYXRoLm1pbih0aGlzLkRFRkFVTFRfV0lEVEgsIHdpbmRvd1dpZHRoICogdGhpcy5JRlJBTUVfV0lEVEhfUkFUSU8pIDogdGhpcy5ERUZBVUxUX1dJRFRIO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICd3aWR0aFN0cmluZyc6ICB3aWR0aCArICdweCcsXG4gICAgICAgICAgICAgICAgJ2hlaWdodFN0cmluZyc6IGhlaWdodCArICdweCcsXG4gICAgICAgICAgICAgICAgJ2hlaWdodFJhdyc6ICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsWCc6ICAgICAgc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAnc2Nyb2xsWSc6ICAgICAgc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICAndG9wJyA6ICAgICAgICAgTWF0aC5tYXgoMCwgc2Nyb2xsWSArIHBhcnNlSW50KCh3aW5kb3dIZWlnaHQgLSBoZWlnaHQpIC8gMiwgMTApKSArICdweCcsXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiAgICAgICAgIE1hdGgubWF4KDAsIHBhcnNlSW50KCh3aW5kb3dXaWR0aCAtIHRoaXMuREVGQVVMVF9XSURUSCkgLyAyLCAxMCkpICsgJ3B4J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRNb2JpbGVEaW1lbnNpb25zOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGRpbXM7XG5cbiAgICAgICAgICAgIHZhciBzY3JlZW5XaWR0aCA9IHNjcmVlbi53aWR0aDtcbiAgICAgICAgICAgIHZhciBzY3JlZW5IZWlnaHQgPSBzY3JlZW4uaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgICAgICB2YXIgaXNQb3J0cmFpdCA9IHdpbmRvd0hlaWdodCA+IHdpbmRvd1dpZHRoO1xuXG4gICAgICAgICAgICBpZiAoaXNQb3J0cmFpdCkge1xuICAgICAgICAgICAgICAgIGRpbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aFN0cmluZyc6IHRoaXMuaXNEZWZhdWx0VVggPyAnMTAwdncnIDogc2NyZWVuV2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0U3RyaW5nJzogdGhpcy5pc0RlZmF1bHRVWCA/ICcxMDB2aCcgOiAnMTAwJScgLy8gMTAwdmggbmVlZGVkIGZvciBvbGQgc2lnbmVyIHBhZ2UsIGJ1dCBjdXRzIG9mZiBzb21lIG5ld2VyIFVYIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTGFuZHNjYXBlXG4gICAgICAgICAgICAgICAgZGltcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoU3RyaW5nJzogd2luZG93V2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0U3RyaW5nJzogdGhpcy5pc0RlZmF1bHRVWCA/ICcxMDB2aCcgOiAnMTAwJSdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWx3YXlzIGZpbGwgc2NyZWVuIG9uIG1vYmlsZVxuICAgICAgICAgICAgZGltcy50b3AgPSAnMCc7XG4gICAgICAgICAgICBkaW1zLmxlZnQgPSAnMCc7XG4gICAgICAgICAgICByZXR1cm4gZGltcztcbiAgICAgICAgfSxcblxuICAgICAgICBpbkFycmF5OiBmdW5jdGlvbih2LCBhcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzSlF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICQuaW5BcnJheSh2LCBhcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT0gdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2FmZVVybDogZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZWN1cml0eTogcmVtb3ZlIHNjcmlwdCB0YWdzIGZyb20gVVJMcyBiZWZvcmUgcHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvPC9nLCBcIiZsdDtcIik7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBIVE1MLURlY29kZSB0aGUgZ2l2ZW4gdXJsIGlmIG5lY2Vzc2FyeSwgYnkgcmVuZGVyaW5nIHRvIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWNvZGVkVXJsID0gZWwuaW5uZXJUZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZhbGwgYmFjayB0byBqdXN0IHJlcGxhY2luZyAnJmFtcDsnIGluIGNhc2Ugb2YgZmFpbHVyZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlY29kZWRVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXCZhbXBcXDsvZywgJyYnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IGRlY29kZWRVcmw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbCgnQ291bGQgbm90IGRlY29kZSB1cmw6ICcgKyBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBwZXIgdGhhdCB3aWxsIGVuc3VyZSBhbiBlcnJvciBtZXNzYWdlIGlzIGRpc3BsYXllZCwgZWl0aGVyIGluIGNvbnNvbGUubG9nXG4gICAgICogb3IgYXMgYSBicm93c2VyIGFsZXJ0LlxuICAgICAqIEBwYXJhbSBtZXNzYWdlIFN0cmluZyBlcnJvciBtZXNzYWdlXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLmxvZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSB3cmFwcGVyIHRoYXQgY29uZGl0aW9uYWxseSBsb2dzIG1lc3NhZ2VzIHRvIGNvbnNvbGUubG9nLlxuICAgICAqIEBwYXJhbSBtZXNzYWdlT2JqIFN0cmluZyBvciBPYmplY3QgdG8gbG9nXG4gICAgICovXG4gICAgZnVuY3Rpb24gbChtZXNzYWdlT2JqKSB7XG4gICAgICAgIGlmIChIZWxsb1NpZ24uaXNEZWJ1Z0VuYWJsZWQgJiYgdHlwZW9mIG1lc3NhZ2VPYmogIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZSAmJiBjb25zb2xlLmxvZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZU9iaik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgR2V0dGVyIGZ1bmN0aW9ucyBmb3IgZGV0ZXJtaW5pbmcgc2Nyb2xsIHBvc2l0aW9uIHRoYXQgd29yayBvbiBhbGxcbiAgICAgKiAgYnJvd3NlcnMuXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxYKCkge1xuICAgICAgICByZXR1cm4gX3N1cHBvcnRQYWdlT2Zmc2V0KCkgPyB3aW5kb3cucGFnZVhPZmZzZXQgOiBfaXNDU1MxQ29tcGF0KCkgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxZKCkge1xuICAgICAgICByZXR1cm4gX3N1cHBvcnRQYWdlT2Zmc2V0KCkgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBfaXNDU1MxQ29tcGF0KCkgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2lzQ1NTMUNvbXBhdCgpIHtcbiAgICAgICAgcmV0dXJuICgoZG9jdW1lbnQuY29tcGF0TW9kZSB8fCAnJykgPT09ICdDU1MxQ29tcGF0Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3N1cHBvcnRQYWdlT2Zmc2V0KCkge1xuICAgICAgICByZXR1cm4gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gRXhwb3J0IHRoZSBIUyBvYmplY3RcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEhlbGxvU2lnbjtcblxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=