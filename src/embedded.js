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

(function(){

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
                function(m, key, value) {
                    vars[key] = value;
                });
        return vars;
    }

    var urlVars = getUrlVars();
    window.isDebugEnabled = (urlVars.debug ? urlVars.debug === 'true' : false);

    var userAgent = navigator.userAgent.toLowerCase();

    var XWM = {

        cacheBust: 0,
        lastHash: 0,
        intervalId: 0,
        rmCallback: null,
        defaultDelay: 500,
        hasPostMessage: (window['postMessage'] !== undefined),

        _serializeMessageValue: function(value) {
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            return encodeURIComponent(value);
        },

        send: function(message, targetUrl, target) {

            l('XWM Send: Sending Message.');
            l('  targetUrl: ' + targetUrl);

            var self = XWM;

            if (!targetUrl) {
                return;
            }

            // Serialize the message into a string
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
                target['postMessage'](message, targetUrl.replace( /([^:]+:\/\/[^\/]+).*/, '$1' ));
            }
            else if (targetUrl) {
                // The browser does not support window.postMessage, so set the location
                // of the target to targetUrl#message. A bit ugly, but it works! A cache
                // bust parameter is added to ensure that repeat messages trigger the
                // callback.
                var t = new Date().getTime();
                var c = ++self.cacheBust;
                var targetFrame = document.getElementById(target); // target is the window id in this case
                // targetWindow.location = targetUrl.replace( /#.*$/, '' ) + '#' + t + c + '&' + message;
                if (targetFrame) {
                    targetFrame.setAttribute('src', targetUrl.replace( /#.*$/, '' ) + '#' + t + c + '&' + message);
                }
                else {
                    parent.location = targetUrl.replace( /#.*$/, '' ) + '#' + t + c + '&' + message;
                }
            }

            l('XWM Send: Message sent.');
        },

        receive: function(callback, sourceOrigin, delay) {
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
                        if (window['addEventListener'] ) {
                            window['removeEventListener']('message', self.rmCallback, false);
                        }
                        else {
                            //IE8 doesn't support removeEventListener
                            window['detachEvent']('onmessage', self.rmCallback);
                        }
                    }

                    // Bind the callback. A reference to the callback is stored for ease of unbinding
                    self.rmCallback = function(evt) {
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
                }
                else {
                    //IE8 doesn't support addEventListener
                    window['attachEvent']('onmessage', self.rmCallback);
                }

            }
            else {

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

                    delay = (delay !== undefined ? delay : 200);

                    self.intervalId = setInterval(function(){
                        var hash = document.location.hash;
                        var re = /^#?\d+&/;
                        if (hash !== self.lastHash && re.test(hash)) {
                            self.lastHash = hash;
                            var data = hash.replace(re, '');
                            l('XWM Receive: Message received!');
                            l('  data: ' + data);
                            l('  sourceOrigin: ' + sourceOrigin);
                            callback({ data: data });
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

        set: function() {
            l('Optimizing viewport meta tag for mobile');

            // Save off the current viewport meta tag content
            this.savedViewportContent = this._getElement().getAttribute('content');

            // Add mobile-optimized settings
            var contentPairs = this._explodePairs(this.savedViewportContent);
            contentPairs['width'] = 'device-width';
            contentPairs['maximum-scale'] = '1.0';
            contentPairs['user-scalable'] = 'no';
            this._getElement().setAttribute('content', this._joinPairs(contentPairs));
        },

        restore: function() {
            l('Restoring viewport meta tag');
            this._getElement().setAttribute('content', this.savedViewportContent);
        },

        _getElement: function() {
            var el = document.querySelector('meta[name=viewport]');
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('name', 'viewport');
                el.setAttribute('content', 'initial-scale=1.0');
                document.head.appendChild(el);
            }
            return el;
        },

        _joinPairs: function(keyed){
            var pairs = [];
            for (var key in keyed) {
                pairs.push(key + '=' + keyed[key]);
            }
            return pairs.join(', ');
        },

        _explodePairs: function(metaString){
            var pairs = metaString.split(',');
            var obj = {};
            pairs.forEach(function(pair) {
                pair = pair.trim();
                var kv = pair.split('=');
                obj[kv[0]] = kv[1];
            })
            return obj;
        }
    };

    var HelloSign = {

        VERSION: require('../package.json').version,
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
        isOldIE: (/msie (8|7|6|5)/gi.test(userAgent)),
        isFF: (/firefox/gi.test(userAgent)),
        isOpera: (/opera/gi.test(userAgent)),
        isMobile: (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)),
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
            PL_PL: 'pl_PL',
            init: function() {
                this.supportedCultures = [this.EN_US, this.FR_FR, this.DE_DE, this.SV_SE, this.ZH_CN, this.DA_DK, this.NL_NL, this.ES_ES, this.ES_MX, this.PT_BR, this.PL_PL];
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

        init: function(appClientId) {
            this.clientId = appClientId;
        },

        open: function(params) {

            var self = this;

            // PARAMETERS:
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
            this.isDefaultUX = (this.uxVersion === this.DEFAULT_UX_VERSION);
            this.healthCheckTimeoutMs = params['healthCheckTimeoutMs'];

            if (this.uxVersion) {
                frameUrl += (frameUrl.indexOf('?') > 0 ? '&' : '?') + 'ux_version=' + this.uxVersion;
            }
            if (typeof params['debug'] !== 'undefined') {
                this.isDebugEnabled = (params['debug'] === true || params['debug'] == 'true');
            }
            if (typeof params['skipDomainVerification'] !== 'undefined') {
                this.skipDomainVerification = (params['skipDomainVerification'] === true || params['skipDomainVerification'] == 'true');
            }
            if (typeof params['hideHeader'] !== 'undefined') {
                this.hideHeader = (params['hideHeader'] === true || params['hideHeader'] == 'true');
            }
            if (typeof params['whiteLabelingOptions'] === 'object') {
                this.whiteLabelingOptions = JSON.stringify(params['whiteLabelingOptions']);
                this.whiteLabelingOptions = this.whiteLabelingOptions.replace(/#/g, '');
            } else if (typeof params['whiteLabelingOptions'] !== 'undefined') {
                l("Invalid white labeling options supplied, option will be ignored: " + params['whiteLabelingOptions']);
            }
            this.isInPage = (params['container'] !== undefined);
            this.container = params['container'] || document.body;

            // Validate parameters
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

            frameUrl += (frameUrl.indexOf('?') > 0 ? '&' : '?');
            if (redirectUrl) {
                frameUrl += 'redirect_url=' + encodeURIComponent(redirectUrl) + '&';
            }
            frameUrl += 'parent_url=' + encodeURIComponent(document.location.href.replace(/\?.*/, '')) + '&';
            frameUrl += (this.skipDomainVerification === true ? 'skip_domain_verification=1&' : '');
            frameUrl += 'client_id=' + this.clientId + '&';
            frameUrl += (typeof params['requester'] !== 'undefined' ? 'requester=' + encodeURIComponent(params['requester']) + '&' : '');
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
                    styles['cancelButton']['display'] = 'none';

                    // This is an iOS hack.  Apparently iOS ignores widths set
                    // with a non-pixel value, which means iFrames get expanded
                    // to the full width of their content.  Setting a pixel
                    // value and then using `min-width` is the workaround for
                    // this.
                    // See:  http://stackoverflow.com/questions/23083462/how-to-get-an-iframe-to-be-responsive-in-ios-safari
                    if (this.isMobile) {
                        styles['iframe']['width'] = '1px';
                        styles['iframe']['min-width'] = '100%';
                    }
                }
                else if (this.isMobile) {
                    var mobileDims = this.getMobileDimensions();
                    // Adjust the iFrame style to fit the whole screen
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
            }

            // Build overlay
            if (!this.isInPage) {
                if (!this.overlay) {
                    this.overlay = document.createElement('div');
                    this.overlay.setAttribute('id', 'hsEmbeddedOverlay');
                    document.body.appendChild(this.overlay);
                }
                this.overlay.setAttribute('style', 'display: block;');
            }

            // Build the wrapper
            if (!this.wrapper) {
                this.wrapper = document.createElement('div');
                this.wrapper.setAttribute('id', 'hsEmbeddedWrapper');

                // Hack.  We need this on mobile before we insert the DOM
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
                }
                else {
                    // When the window is resized, also resize the iframe if necessary
                    // NOTE: Only do this when the iFrame is displayed as a popup, it does not really make sense when it's in-page
                    // Also used for new mobile ux
                    window.onresize = resizeIFrame;
                }
            }

            // Build the iFrame
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

            this.iframe.setAttribute('height', windowDims.heightRaw);

            // TODO: Detecting 'embeddedSign' in the frameUrl is a hack. Clean
            // this up once the embedded close button has been implemented for
            // embedded requesting and templates.
            if (frameUrl.indexOf('embeddedSign') === -1 || params['uxVersion'] != null && params['uxVersion'] < 2) {
              if (!this.isInPage && (params['allowCancel'] === true || params['allowCancel'] === undefined) && !this.cancelButton) {
                  this.cancelButton = document.createElement('a');
                  this.cancelButton.setAttribute('id', 'hsEmbeddedCancel');
                  this.cancelButton.setAttribute('href', 'javascript:;');
                  this.cancelButton.onclick = function(){
                      // Close iFrame
                      HelloSign.close();
                      // Send 'cancel' message
                      if (messageListener) {
                          l('Reporting cancelation');
                          messageListener({
                              'event': HelloSign.EVENT_CANCELED
                          });
                      }
                  };
                  this.wrapper.appendChild(this.cancelButton);
              }
              else if (!params['allowCancel'] && this.cancelButton) {
                  this.wrapper.removeChild(this.cancelButton);
              }
            }

            // Add inline styling
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
                s += (s ? '; ' : '');
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
                this.fixIframe = function() {
                    window.scrollTo(0, 0);
                };
                this.fixIframe();
                window.addEventListener('scroll', this.fixIframe);
            }

            // Close the iframe if page fails to initialize within 15 seconds
            if (this.healthCheckTimeoutMs) {
                this._healthCheckTimeoutHandle = setTimeout(function() {
                    var message = 'Signer page failed to initialize within ' + self.healthCheckTimeoutMs + ' milliseconds.'
                    self.reportError(message, document.location.href);
                    self.close();
                }, this.healthCheckTimeoutMs);
            }

            // Start listening for messages from the iFrame
            XWM.receive(function _parentWindowCallback(evt){
                var source = evt.source || 'hsEmbeddedFrame';

                if (evt.data === 'initialize' && params['uxVersion'] > 1) {
                    if (self.healthCheckTimeoutMs) clearTimeout(self._healthCheckTimeoutHandle);
                    // remove container from payload to prevent circular reference error
                    var payload = Object.assign({}, params);
                    delete payload.container;
                    XWM.send(JSON.stringify({ type: 'embeddedConfig', payload: payload }), evt.origin, source);
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
                    var p, pairs = evt.data.split('&');

                    // Recursive helper function to deserialize the event data.
                    var deserializeEventData = function(str) {
                        var obj = str;
                        try {
                            // Safely parse the string
                            obj = JSON.parse(str);
                            if (typeof obj === 'object') {
                                for (var key in obj) {
                                    obj[key] = parseJson(obj[key]);
                                }
                            }
                        } catch (e) { /* ignore */ }
                        return obj;
                    };

                    for (var i=0; i<pairs.length; i++) {
                        p = pairs[i].split('=');
                        if (p.length === 2) {
                            eventData[p[0]] = deserializeEventData(decodeURIComponent(p[1]));
                        }
                    }
                    messageListener(eventData);
                }
            }, origin);
        },

        close: function() {

            // Reset viewport settings
            if (this.isMobile && !this.isDefaultUX && window === window.top) {
                MetaTagHelper.restore();
            }

            l('Closing HelloSign embedded iFrame');
            // Close the child iframe from the parent window
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
                var animationTimer = setTimeout((function(currentOpacity) {
                    return function() {
                        self._fadeOutIFrame(currentOpacity);
                    };
                })(currentOpacity), 10);
            }
        },

        reportError: function(errorMessage, parentUrl) {
            XWM.send({
                'event': HelloSign.EVENT_ERROR,
                'description': errorMessage
            }, parentUrl);
        },

        ensureParentDomain: function(domainName, parentUrl, token, skipDomainVerification, callback) {

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
            }
            else {
                // Starts waiting for the hello back message
                XWM.receive(function _ensureParentDomainCallback(evt){
                    if (evt.data.indexOf('helloback:') === 0) {
                        var parts = evt.data.split(':');
                        var valid = (parts[1] == token);
                        callback(valid);
                    }
                }, domainName);
            }

            // Send hello message
            XWM.send('hello:' + token, parentUrl);
        },

        getWindowDimensions: function(customHeight) {
            var scrollX = getScrollX();
            var scrollY = getScrollY();
            var windowWidth, windowHeight;

            if (this.isOldIE) {
                windowWidth   = document.body.clientWidth;
                windowHeight  = document.body.clientHeight;
            } else {
                windowWidth   = window.innerWidth;
                windowHeight  = window.innerHeight;
            }
            var height = this.isInPage && customHeight ? customHeight : Math.max(this.MIN_HEIGHT, windowHeight - 60);

            var width = this.uxVersion > 1 ? Math.min(this.DEFAULT_WIDTH, windowWidth * this.IFRAME_WIDTH_RATIO) : this.DEFAULT_WIDTH;

            return {
                'widthString':  width + 'px',
                'heightString': height + 'px',
                'heightRaw':    height,
                'scrollX':      scrollX,
                'scrollY':      scrollY,
                'top' :         Math.max(0, scrollY + parseInt((windowHeight - height) / 2, 10)) + 'px',
                'left':         Math.max(0, parseInt((windowWidth - this.DEFAULT_WIDTH) / 2, 10)) + 'px'
            };
        },

        getMobileDimensions: function(){
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
            }
            // Always fill screen on mobile
            dims.top = '0';
            dims.left = '0';
            return dims;
        },

        inArray: function(v, array) {
            if (this.hasJQuery) {
                return $.inArray(v, array);
            }
            else if (array) {
                for (var i=0; i<array.length; i++) {
                    if (array[i] == v) {
                        return i;
                    }
                }
            }
            return -1;
        },

        safeUrl: function(url) {
            if (url) {
                try {

                    // Security: remove script tags from URLs before processing
                    url = url.replace(/</g, "&lt;");
                    url = url.replace(/>/g, "&gt;");

                    // HTML-Decode the given url if necessary, by rendering to the page
                    var el = document.createElement('div');
                    el.innerHTML = url;
                    var decodedUrl = el.innerText;

                    // Fall back to just replacing '&amp;' in case of failure
                    if (!decodedUrl) {
                        url = url.replace(/\&amp\;/g, '&');
                    }
                    else {
                        url = decodedUrl;
                    }
                }
                catch (e) {
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
        if (HelloSign.isDebugEnabled && typeof messageObj !== 'undefined' &&
            window.console && console.log) {
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
        return ((document.compatMode || '') === 'CSS1Compat');
    }

    function _supportPageOffset() {
        return window.pageXOffset !== undefined;
    }

    // Export the HS object
    module.exports = HelloSign;

})();
