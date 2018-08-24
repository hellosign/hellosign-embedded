import Emitter from 'tiny-emitter';
import { safeHtml } from 'common-tags';

import debug from './debug';
import defaults from './defaults';
import settings from './settings';

class HelloSign extends Emitter {

  /**
   * HelloSign Embedded class names.
   *
   * @enum {string}
   * @static
   * @readonly
   */
  static classNames = settings.classNames;

  /**
   * HelloSign Embedded events.
   *
   * @enum {string}
   * @static
   * @readonly
   */
  static events = settings.events;

  /**
   * HelloSign Embedded supported locales.
   *
   * @enum {string}
   * @static
   * @readonly
   */
  static locales = settings.locales;

  /**
   * A reference to the base HelloSign Embedded container
   * element.
   *
   * @type {?HTMLElement}
   * @private
   */
  _baseEl;

  /**
   * A reference to the close button element.
   *
   * @type {?HTMLElement}
   * @private
   */
  _closeBtnEl;

  /**
   * The base config object which "open" will extend.
   *
   * @type {?Object}
   * @private
   */
  _config;

  /**
   * The iFrame URL object.
   *
   * @type {?URL}
   * @private
   */
  _iFrameURL;

  /**
   * A reference to the iFrame element.
   *
   * @type {?HTMLElement}
   * @private
   */
  _iFrameEl;

  /**
   * The initialization tmieout timer.
   *
   * @type {?number}
   * @private
   */
  _initTimeout;

  /**
   * Whether the client is open or not.
   *
   * @type {?boolean}
   * @private
   */
  _isOpen;

  /**
   * @type {Function}
   * @private
   */
  _onCloseButtonClick = this._onCloseButtonClick.bind(this);

  /**
   * @type {Function}
   * @private
   */
  _onInitTimeout = this._onInitTimeout.bind(this);

  /**
   * @type {Function}
   * @private
   */
  _onMessage = this._onMessage.bind(this);

  /**
   * Creates a new HelloSign Embedded instance.
   *
   * @param {Object} [obj]
   * @constructor
   */
  constructor(obj = {}) {
    super();

    debug.info('create new HelloSign instance with options', obj);

    if (obj && typeof obj === 'object') {
      this._config = { ...obj };
    } else {
      throw new TypeError('Configuration must be an object');
    }
  }

  /**
   * Validates and appends the clientId parameter to the
   * iFrame params object.
   *
   * @throws {TypeError} if clientId is invalid
   * @param {URLSearchParams} params
   * @param {Object} config
   * @private
   */
  _applyClientId(params, config) {
    const val = config.clientId;

    if (!val) {
      throw new TypeError('"clientId" is required');
    }

    if (typeof val !== 'string') {
      throw new TypeError('"clientId" must be a string');
    }

    params.append('client_id', val);
  }

  /**
   * Validates and appends the debug parameter to the
   * iFrame params object.
   *
   * @throws {TypeError} if debug is invalid
   * @param {URLSearchParams} params
   * @param {Object} config
   * @private
   */
  _applyDebug(params, config) {
    const val = config.debug;

    if (typeof val !== 'boolean') {
      throw new TypeError('"debug" must be a boolean');
    }

    params.append('debug', val ? 1 : 0);
  }

  /**
   * Validates and appends the finalButtonText parameter to
   * the iFrame params object.
   *
   * @throws {TypeError} if finalButtonText is invalid
   * @param {URLSearchParams} params
   * @param {Object} config
   * @private
   */
  _applyFinalButtonText(params, config) {
    if ('finalButtonText' in config) {
      const val = config.finalButtonText;

      if (typeof val !== 'string') {
        throw new TypeError('"finalButtonText" must be a string');
      }

      if (['Send', 'Continue'].includes(val)) {
        throw new TypeError('"finalButtonText" must be either "Send" or "Continue"');
      }

      params.append('final_button_text', val);
    }
  }

  /**
   * Validates and appends the hideHeader parameter to the
   * iFrame params object.
   *
   * @throws {TypeError} if hideHeader is invalid
   * @param {URLSearchParams} params
   * @param {Object} config
   * @private
   */
  _applyHideHeader(params, config) {
    if ('hideHeader' in config) {
      const val = config.hideHeader;

      if (typeof val !== 'boolean') {
        throw new TypeError('"hideHeader" must be a boolean');
      }

      params.append('hideHeader', val);
    }
  }

  /**
   * Validates and appends the locale parameter to the
   * iFrame params object.
   *
   * @throws {TypeError} if locale is invalid
   * @param {URLSearchParams} params
   * @param {Object} config
   * @private
   */
  _applyLocale(params, config) {
    const val = config.locale;

    if (typeof val !== 'string') {
      throw new TypeError('"locale" must be a string');
    }

    if (!Object.values(settings.locales).includes(val)) {
      throw new TypeError(`"${val}" is not a supported locale`);
    }

    params.append('user_culture', val);
  }

  /**
   * Appends the parentUrl parameter to the iFrame params
   * object.
   *
   * @param {URLSearchParams} params
   * @private
   */
  _applyParentURL(params) {
    params.append('parent_url', document.location.href);
  }

  /**
   * Validates and appends the redirectTo parameter to the
   * iFrame params object.
   *
   * @throws {TypeError} if redirectTo is invalid
   * @param {URLSearchParams} params
   * @param {Object} config
   * @private
   */
  _applyRedirectTo(params, config) {
    if ('redirectTo' in config) {
      const val = config.redirectTo;

      if (typeof val !== 'string') {
        throw new TypeError('"redirectTo" must be a string');
      }

      params.append('redirectTo', val);
    }
  }

  /**
   * Validates and appends the requestingEmail parameter to
   * the iFrame params object.
   *
   * @throws {TypeError} if requestingEmail is invalid
   * @param {URLSearchParams} params
   * @param {Object} config
   * @private
   */
  _applyRequestingEmail(params, config) {
    if ('requestingEmail' in config) {
      const val = config.requestingEmail;

      if (typeof val !== 'string') {
        throw new TypeError('"requestingEmail" must be a string');
      }

      params.append('requester', val);
    }
  }

  /**
   * Validates and appends the verifyDomain parameter to
   * the iFrame params object.
   *
   * @throws {TypeError} if verifyDomain is invalid
   * @param {URLSearchParams} params
   * @param {Object} config
   * @private
   */
  _applyVerifyDomain(params, config) {
    const val = config.verifyDomain;

    if (typeof val !== 'boolean') {
      throw new TypeError('"verifyDomain" must be a boolean');
    }

    params.append('skip_domain_verification', val ? 0 : 1);
  }

  /**
   * Validates and appends the whiteLabeling parameter to
   * the iFrame params object.
   *
   * @throws {TypeError} if whiteLabeling is invalid
   * @param {URLSearchParams} params
   * @param {Object} config
   * @private
   */
  _applyWhiteLabeling(params, config) {
    if ('whiteLabeling' in config) {
      const val = config.whiteLabeling;

      if (typeof val !== 'object') {
        throw new TypeError('"whiteLabeling" must be a object');
      }

      params.append('white_labeling_options', JSON.stringify(val));
    }
  }

  /**
   * Appends the version parameter to the iFrame params
   * object.
   *
   * @param {URLSearchParams} params
   * @private
   */
  _applyVersion(params) {
    params.append('js_version', '2.0.0'); // XXX
  }

  /**
   * Validates and crates the iFrame params object.
   *
   * @param {URL} frameURL
   * @param {Object} cfg
   * @returns {URLSearchParams}
   * @private
   */
  _getFrameParams(frameURL, cfg) {
    const params = new URLSearchParams(frameURL.search);

    this._applyClientId(params, cfg);
    this._applyDebug(params, cfg);
    this._applyFinalButtonText(params, cfg);
    this._applyHideHeader(params, cfg);
    this._applyLocale(params, cfg);
    this._applyParentURL(params);
    this._applyRedirectTo(params, cfg);
    this._applyRequestingEmail(params, cfg);
    this._applyVerifyDomain(params, cfg);
    this._applyVersion(params);
    this._applyWhiteLabeling(params, cfg);

    return params;
  }

  /**
   * Calculates and sets the iFrame frame src.
   *
   * @param {string} url
   * @param {Object} cfg
   * @private
   */
  _setFrameURL(url, cfg) {
    const frameURL = new URL(url);
    const frameParams = this._getFrameParams(frameURL, cfg);

    frameURL.search = frameParams.toString();

    this._iFrameURL = frameURL;
  }

  /**
   * Renders HelloSign Embedded into the DOM.
   *
   * @param {HTMLElement} container
   * @param {Object} cfg
   * @private
   */
  _renderMarkup(container, cfg) {
    const { classNames, iframe } = settings;

    if (cfg.container) {
      container.insertAdjacentHTML('beforeend', safeHtml`
        <div class="${classNames.BASE}">
          <iframe class="${classNames.IFRAME}" name="${iframe.NAME}" src="${this._iFrameURL.href}" />
        </div>
      `);
    } else {
      container.insertAdjacentHTML('beforeend', safeHtml`
        <div class="${classNames.BASE} ${classNames.IN_MODAL}">
          <div class="${classNames.MODAL_SCREEN}"></div>
          <div class="${classNames.MODAL_CONTENT}">
            <iframe class="${classNames.IFRAME}" name="${iframe.NAME}" src="${this._iFrameURL.href}" />
          </div>
        </div>
      `);
    }

    this._baseEl = document.getElementsByClassName(classNames.BASE).item(0);
    this._iFrameEl = document.getElementsByClassName(classNames.IFRAME).item(0);

    if (!cfg.container && cfg.allowCancel) {
      this._renderCloseButton();
    }
  }

  /**
   * Renders the modal close button.
   *
   * @private
   */
  _renderCloseButton() {
    const { classNames } = settings;

    this._baseEl.insertAdjacentHTML('beforeend', safeHtml`
      <button class="${classNames.MODAL_CLOSE_BTN}" type="button" title="Close" disabled></div>
    `);

    this._closeBtnEl = this._baseEl.getElementsByClassName(classNames.MODAL_CLOSE_BTN).item(0);
    this._closeBtnEl.addEventListener('click', this._onCloseButtonClick);
  }

  /**
   * Posts a cross-origin window message to the HelloSign
   * Embedded iFrame content window.
   *
   * @param {Object} data
   * @param {string} data.type
   * @private
   */
  _sendMessage(data) {
    debug.info('posting message', data);

    const targetOrigin = this._iFrameURL.href;
    const targetWindow = this._iFrameEl.contentWindow;

    targetWindow.postMessage(data, targetOrigin);
  }

  /**
   * Starts the initialization timeout timer.
   *
   * @param {number} waitMs
   * @private
   */
  _startInitTimeout(waitMs) {
    this._clearInitTimeout();

    this._initTimeout = setTimeout(this._onInitTimeout, waitMs);
  }

  /**
   * Clears the initialization timeout timer.
   *
   * @private
   */
  _clearInitTimeout() {
    if (this._initTimeout) {
      clearTimeout(this._initTimeout);

      this._initTimeout = null;
    }
  }

  /**
   * Removes the HelloSign Embedded markup from the DOM.
   *
   *
   * @private
   */
  _clearMarkup() {
    this._baseEl.parentElement.removeChild(this._baseEl);
    this._baseEl = null;

    if (this._closeBtnEl) {
      this._closeBtnEl.addEventListener('click', this._onCloseButtonClick);
      this._closeBtnEl = null;
    }
  }

  /**
   * @event HelloSign#error
   * @type {Object}
   * @property {string} signatureId
   * @property {number} code
   */

  /**
   * Called when the app encountered an error.
   *
   * @emits HelloSign#error
   * @param {Object} payload
   */
  _appDidError(payload) {
    debug.error('app encountered an error with code:', payload.code);

    this.emit(settings.events.ERROR, payload);
  }

  /**
   * @event HelloSign#initialize
   * @type {Object}
   * @property {string} signatureId
   */

  /**
   * Called when the app was initialized.
   *
   * @emits HelloSign#initialize
   * @param {Object} payload
   */
  _appDidInitialize(payload) {
    debug.info('app was initialized');

    if (this._closeBtnEl) {
      this._closeBtnEl.removeAttribute('disabled');
    }

    this.emit(settings.events.INITIALIZE, payload);
  }

  /**
   * Called when the user closed the request.
   *
   * @param {Object} payload
   * @private
   */
  _userDidCloseRequest() {
    debug.info('user closed the signature request window');

    this.close();
  }

  /**
   * @event HelloSign#createTemplate
   * @type {Object}
   * @property {string} title
   * @property {string} message
   * @property {string[]} signerRoles
   * @property {Object} signatureRequestInfo
   */

  /**
   * Called when the user created the template.
   *
   * @emits HelloSign#createTemplate
   * @param {Object} payload
   */
  _userDidCreateTemplate(payload) {
    debug.info('user created the signature request template');

    this.emit(settings.events.CREATE_TEMPLATE, payload);
  }

  /**
   * @event HelloSign#decline
   * @type {Object}
   * @property {string} signatureId
   * @property {string} reason
   */

  /**
   * Called when the user declined the request.
   *
   * @emits HelloSign#decline
   * @param {Object} payload
   */
  _userDidDeclineRequest(payload) {
    debug.info('user declined the signature request');

    this.emit(settings.events.DECLINE, payload);
  }

  /**
   * @event HelloSign#reassign
   * @type {Object}
   * @property {string} signatureId
   * @property {string} name
   * @property {string} email
   * @property {string} reason
   */

  /**
   * Called when the user reassigned the request.
   *
   * @emits HelloSign#reassign
   * @param {Object} payload
   */
  _userDidReassignRequest(payload) {
    debug.info('user reassigned the signature request with reason:', payload.reason);

    this.emit(settings.events.REASSIGN, payload);
  }

  /**
   * @event HelloSign#send
   * @type {Object}
   * @property {string} signatureRequestId
   * @property {string} signatureId
   */

  /**
   * Called when the user sent the request.
   *
   * @emits HelloSign#send
   * @param {Object} payload
   */
  _userDidSendRequest(payload) {
    debug.info('user sent the signature request');

    this.emit(settings.events.SEND, payload);
  }

  /**
   * @event HelloSign#sign
   * @type {Object}
   * @property {string} signatureId
   */

  /**
   * Called when the user signed the request.
   *
   * @emits HelloSign#sign
   * @param {Object} payload
   */
  _userDidSignRequest(payload) {
    debug.info('user signed the signature request');

    this.emit(settings.events.SIGN, payload);
  }

  /**
   * Called when the user clicks the close button. Closes
   * HelloSign Embedded.
   *
   * @param {Event} evt
   * @private
   */
  _onCloseButtonClick(evt) {
    evt.preventDefault();

    this.close();
  }

  /**
   * Called when the initialization timeout timer completes.
   * Sends an error message to the app and closes HelloSign
   * Embedded.
   *
   * @private
   */
  _onInitTimeout() {
    debug.error('failed to initialized app before timeout');

    this._sendMessage({
      type: settings.messages.APP_ERROR,
      payload: {
        message: 'App failed to initialize before timeout',
      },
    });

    this._clearInitTimeout();
    this.close();
  }

  /**
   * Called when a message is received by the window.
   * Validates the message origin and delegates to the
   * appropriate method based on the message type.
   *
   * @param {MessageEvent} evt
   * @private
   */
  _onMessage({ data, origin }) {
    if (/^https:\/\/app\.((dev|qa|staging)-)?hellosign\.com$/.test(origin)) {
      if (typeof data === 'object') {
        const { type, payload } = data;

        debug.info('received message', data);

        switch (type) {
          case settings.messages.APP_ERROR: {
            this._appDidError(payload);
            break;
          }
          case settings.messages.APP_INITIALIZE: {
            this._appDidInitialize(payload);
            break;
          }
          case settings.messages.USER_CLOSE_REQUEST: {
            this._userDidCloseRequest(payload);
            break;
          }
          case settings.messages.USER_CREATE_TEMPLATE: {
            this._userDidCreateTemplate(payload);
            break;
          }
          case settings.messages.USER_DECLINE_REQUEST: {
            this._userDidDeclineRequest(payload);
            break;
          }
          case settings.messages.USER_REASSIGN_REQUEST: {
            this._userDidReassignRequest(payload);
            break;
          }
          case settings.messages.USER_SEND_REQUEST: {
            this._userDidSendRequest(payload);
            break;
          }
          case settings.messages.USER_SIGN_REQUEST: {
            this._userDidSignRequest(payload);
            break;
          }
          default: {
            // Unhandled message.
            debug.warn('unhandled cross-origin window message');
          }
        }
      }
    }
  }

  /**
   * @event HelloSign#open
   * @type {Object}
   * @property {string} url
   * @property {string} iFrameUrl
   */

  /**
   * @typedef {Object} HelloSignOptions
   * @property {boolean} [allowCancel=true]
   * @property {string} [clientId]
   * @property {HTMLElement} [container]
   * @property {boolean} [debug=false]
   * @property {boolean} [hideHeader=false]
   * @property {string} [locale="en_us"]
   * @property {string} [redirectTo]
   * @property {number} [timeout=15000]
   * @property {boolean} [verifyDomain=true]
   * @property {Object} [whiteLabeling]
   */

  /**
   * Opens the url in HelloSign Embedded.
   *
   * @emits HelloSign#open
   * @param {string} url
   * @param {HelloSignOptions} [opts={}]
   * @public
   */
  open(url, opts = {}) {
    debug.info('open()', url, opts);

    if (this._isOpen) {
      this.close();
    }

    const cfg = { ...defaults, ...this._config, ...opts };
    const container = cfg.container || document.body;

    this._setFrameURL(url, cfg);

    this.emit(settings.events.OPEN, { url, iFrameUrl: this._iFrameURL });

    this._renderMarkup(container, cfg);

    this._isOpen = true;

    window.addEventListener('message', this._onMessage);
  }

  /**
   * @event HelloSign#close
   */

  /**
   * Closes the HelloSign Embeded window.
   *
   * @emits HelloSign#close
   * @public
   */
  close() {
    debug.info('close()');

    // It's already closed!
    if (!this._isOpen) {
      return;
    }

    this.emit(settings.events.CLOSE);

    this._iFrameEl = false;
    this._iFrameURL = null;
    this._isOpen = false;

    this._clearMarkup();
    this._clearInitTimeout();

    if (this._closeBtnEl) {
      this._closeBtnEl.removeEventListener('click', this._onCloseButtonClick);
      this._closeBtnEl = null;
    }

    window.removeEventListener('message', this._onMessage);
  }

  /**
   * Overrides tiny-emitter's "emit" method.
   *
   * @see https://www.npmjs.com/package/tiny-emitter
   * @param {string} name
   * @param {any} [data]
   * @override
   */
  emit(...args) {
    debug.info('emit()', ...args);

    return super.emit(...args);
  }

  /**
   * @returns {?HTMLElement}
   * @public
   */
  get element() {
    return this._baseEl;
  }

  /**
   * @returns {boolean}
   * @public
   */
  get isOpen() {
    return this._isOpen;
  }
}

export default HelloSign;
