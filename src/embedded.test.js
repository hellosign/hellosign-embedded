import HelloSign from './embedded';
import pkg from '../package.json';
import settings from './settings';

const mockGuid = 'abcdef0123456789abcdef0123456789';
const mockSignURL = `https://app.hellosign.com/editor/embeddedSign?signature_id=${mockGuid}`;
const mockTemplatetURL = `https://app.hellosign.com/editor/embeddedTemplatet?signature_id=${mockGuid}`;
const mockRequestURL = `https://app.hellosign.com/editor/embeddedRequest?signature_id=${mockGuid}`;

const mockPostMessage = (data) => {
  const evt = new window.MessageEvent('message', {
    data,
    origin: window.location.href,
  });

  evt.initEvent('message', false, false);

  setTimeout(() => {
    window.dispatchEvent(evt);
  }, 0);
};

let client;

describe('HelloSign', () => {

  afterEach(() => {
    if (client && client.isOpen) client.close();

    document.getElementsByTagName('html')[0].innerHTML = '';
  });

  test('is defined', () => {
    expect(HelloSign).toBeDefined();
  });

  test('instantiates without errors', () => {
    expect(() => new HelloSign()).not.toThrow();
  });

  test('throws when instantiated without an object', () => {
    expect(() => new HelloSign(false)).toThrow(/must be an object/);
  });

  describe('accessors', () => {

    describe('#element()', () => {
      test('returns the base element', () => {
        client = new HelloSign({ clientId: mockGuid });

        client.open(mockSignURL);

        expect(client.element).toBeInstanceOf(HTMLElement);
      });
    });

    describe('#iFrame()', () => {
      test('returns the base element', () => {
        client = new HelloSign({ clientId: mockGuid });

        client.open(mockSignURL);

        expect(client.iFrame).toBeInstanceOf(HTMLIFrameElement);
      });
    });

    describe('#isOpen()', () => {
      test('returns the open state', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(client.isOpen).toEqual(false);

        client.open(mockSignURL);

        expect(client.isOpen).toEqual(true);

        client.close();

        expect(client.isOpen).toEqual(false);
      });
    });

    describe('#isReady()', () => {
      test('returns the ready state', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        expect(client.isReady).toEqual(false);

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.APP_INITIALIZE,
          });
        });

        client.once('ready', () => {
          expect(client.isReady).toEqual(true);

          client.close();
        });

        client.once('close', () => {
          expect(client.isReady).toEqual(false);
          done();
        });

        client.open(mockSignURL);
      });
    });
  });

  describe('methods', () => {

    describe('#open()', () => {

      test('closes the old window if embedded is already open', () => {
        client = new HelloSign({ clientId: mockGuid });

        client.open(mockSignURL);
        client.open(mockSignURL);

        expect(document.getElementsByClassName(HelloSign.classNames.BASE).length).toBe(1);
      });

      test('appends markup into document body if no container is specified', () => {
        client = new HelloSign({ clientId: mockGuid });

        const expected = expect.stringContaining(settings.classNames.BASE);

        client.open(mockSignURL);

        expect(document.body.children.length).toBeGreaterThan(0);
        expect(document.body.lastChild.className).toEqual(expected);
      });

      test('appends markup into container if one is specified', () => {
        client = new HelloSign({ clientId: mockGuid });

        const container = document.createElement('div');
        const expected = expect.stringContaining(settings.classNames.BASE);

        client.open(mockSignURL, {
          container,
        });

        expect(container.children.length).toBeGreaterThan(0);
        expect(container.firstChild.className).toEqual(expected);
      });

      test('emits the "open" event', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.OPEN, () => {
          done();
        });

        client.open(mockSignURL);
      });

      test('throws if "clientId" is not defined', () => {
        client = new HelloSign();

        expect(() => {
          client.open(mockSignURL);
        }).toThrow(/"clientId" is required/);
      });

      test('throws if "clientId" is not a string', () => {
        client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: 42,
          });
        }).toThrow(/"clientId" must be a string/);
      });

      test('appends "client_id" to the iFrame URL if "clientId" is valid', (done) => {
        client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('client_id')).toBe(true);
          expect(url.searchParams.get('client_id')).toBe(mockGuid);
          done();
        });

        client.open(mockSignURL, {
          clientId: mockGuid,
        });
      });

      test('throws if "container" is not an element', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(() => {
          client.open(mockSignURL, {
            container: 42,
          });
        }).toThrow(/"container" must be an element/);
      });

      test('throws if "debug" is not a boolean', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(() => {
          client.open(mockSignURL, {
            debug: 'false',
          });
        }).toThrow(/"debug" must be a boolean/);
      });

      test('appends "debug" to the iFrame URL if "debug"" is valid', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('debug')).toBe(true);
          expect(url.searchParams.get('debug')).toBe('1');
          done();
        });

        client.open(mockSignURL, {
          debug: true,
        });
      });

      test('throws if "finalButtonText" is not a string', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(() => {
          client.open(mockSignURL, {
            finalButtonText: 42,
          });
        }).toThrow(/"finalButtonText" must be a string/);
      });

      test('throws if "finalButtonText" is neither "Send" nor "Continue"', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(() => {
          client.open(mockSignURL, {
            finalButtonText: 'foobar',
          });
        }).toThrow(/"finalButtonText" must be one of/);
      });

      test('appends "final_button_text" to the iFrame URL if "finalButtonText" is valid', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('final_button_text')).toBe(true);
          expect(url.searchParams.get('final_button_text')).toBe('Send');
          done();
        });

        client.open(mockSignURL, {
          finalButtonText: 'Send',
        });
      });

      test('throws if "hideHeader" is not a boolean', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(() => {
          client.open(mockSignURL, {
            hideHeader: 42,
          });
        }).toThrow(/"hideHeader" must be a boolean/);
      });

      test('appends "hide_header" to the iFrame URL if "hideHeader" is valid', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('hide_header')).toBe(true);
          expect(url.searchParams.get('hide_header')).toBe('true');
          done();
        });

        client.open(mockSignURL, {
          hideHeader: true,
        });
      });

      test('appends "js_version" to the iFrame URL', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('js_version')).toBe(true);
          expect(url.searchParams.get('js_version')).toBe(pkg.version);
          done();
        });

        client.open(mockSignURL);
      });

      test('does not append "user_culture" to the iFrame URL if "locale" is not specified', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('user_culture')).toBe(false);
          done();
        });

        client.open(mockSignURL);
      });

      test('appends "user_culture" to the iFrame URL if "locale" is valid', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('user_culture')).toBe(true);
          expect(url.searchParams.get('user_culture')).toBe('zh-CN');
          done();
        });

        client.open(mockSignURL, {
          locale: 'zh-CN',
        });
      });

      test('appends "parent_url" to the iFrame URL', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('parent_url')).toBe(true);
          expect(url.searchParams.get('parent_url')).toBe(document.location.href);
          done();
        });

        client.open(mockSignURL);
      });

      test('throws if "redirectTo" is not a string', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(() => {
          client.open(mockSignURL, {
            redirectTo: 42,
          });
        }).toThrow(/"redirectTo" must be a string/);
      });

      test('appends "redirect_url" to the iFrame URL if "redirectTo" is valid', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('redirect_url')).toBe(true);
          expect(url.searchParams.get('redirect_url')).toBe('http://example.com/');
          done();
        });

        client.open(mockSignURL, {
          redirectTo: 'http://example.com/',
        });
      });

      test('throws if "requestingEmail" is not a string', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(() => {
          client.open(mockSignURL, {
            requestingEmail: 42,
          });
        }).toThrow(/"requestingEmail" must be a string/);
      });

      test('appends "requester" to the iFrame URL if "requestingEmail" is valid', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('requester')).toBe(true);
          expect(url.searchParams.get('requester')).toBe('alice@example.com');
          done();
        });

        client.open(mockSignURL, {
          requestingEmail: 'alice@example.com',
        });
      });

      test('throws if "skipDomainVerification" is not a boolean', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(() => {
          client.open(mockSignURL, {
            skipDomainVerification: 42,
          });
        }).toThrow(/"testMode" must be a boolean/);
      });

      test('appends default value for "skip_domain_verification" to the iFrame URL if "skipDomainVerification" is not specified', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('skip_domain_verification')).toBe(true);
          expect(url.searchParams.get('skip_domain_verification')).toBe('0');
          done();
        });

        client.open(mockSignURL);
      });

      test('appends "skip_domain_verification" to the iFrame URL if "skipDomainVerification" is valid', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('skip_domain_verification')).toBe(true);
          expect(url.searchParams.get('skip_domain_verification')).toBe('1');
          done();
        });

        client.open(mockSignURL, {
          skipDomainVerification: true,
        });
      });

      test('throws if "testMode" is not a boolean', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(() => {
          client.open(mockSignURL, {
            testMode: 42,
          });
        }).toThrow(/"testMode" must be a boolean/);
      });

      test('appends default value for "skip_domain_verification" to the iFrame URL if "testMode" is not specified', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('skip_domain_verification')).toBe(true);
          expect(url.searchParams.get('skip_domain_verification')).toBe('0');
          done();
        });

        client.open(mockSignURL);
      });

      test('appends "skip_domain_verification" to the iFrame URL if "testMode" is valid', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('skip_domain_verification')).toBe(true);
          expect(url.searchParams.get('skip_domain_verification')).toBe('1');
          done();
        });

        client.open(mockSignURL, {
          testMode: true,
        });
      });

      test('throws if "whiteLabeling" is not an object', () => {
        client = new HelloSign({ clientId: mockGuid });

        expect(() => {
          client.open(mockSignURL, {
            whiteLabeling: 42,
          });
        }).toThrow(/"whiteLabeling" must be an object/);
      });

      test('appends "white_labeling_options" to the iFrame URL if "whiteLabeling" is valid', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.url);

          expect(url.searchParams.has('white_labeling_options')).toBe(true);
          expect(url.searchParams.get('white_labeling_options')).toBe(JSON.stringify({ foo: 'bar' }));
          done();
        });

        client.open(mockSignURL, {
          whiteLabeling: {
            foo: 'bar',
          },
        });
      });
    });

    describe('#close()', () => {

      test('closes when the close button is clicked', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        // Never visible when signing.
        client.open(mockRequestURL);

        client.once(HelloSign.events.CLOSE, () => {
          done();
        });

        const elem = client.element;
        const closeBtn = elem.getElementsByClassName(settings.classNames.MODAL_CLOSE_BTN).item(0);

        closeBtn.click();
      });

      test('closes only once if "close" is called more than once', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        const fn = jest.fn(() => {
          expect(fn).toBeCalledTimes(1);

          setTimeout(() => {
            client.off(HelloSign.events.CLOSE);
            done();
          }, 1000);
        });

        client.on(HelloSign.events.CLOSE, fn);

        client.open(mockSignURL);
        client.close();
        client.close();
        client.close();
        client.close();
      });

      test('emits the "close" event', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.CLOSE, () => {
          done();
        });

        client.open(mockSignURL);
        client.close();
      });

      test('removes markup from the DOM when closed', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.CLOSE, () => {
          expect(document.body.getElementsByClassName(settings.classNames.BASE).length).toBe(0);

          done();
        });

        client.open(mockSignURL);

        client.close();
      });

      test('removes markup from container the DOM when closed', (done) => {
        client = new HelloSign({ clientId: mockGuid });
        const container = document.createElement('div');

        const fn = jest.fn(() => {
          expect(container.getElementsByClassName(settings.classNames.BASE).length).toBe(0);

          done();
        });

        client.once(HelloSign.events.CLOSE, fn);

        client.open(mockSignURL, {
          container,
        });

        client.close();
      });
    });
  });

  describe('workflows', () => {

    describe('embedded signing', () => {

      test('opens an embedded signing url', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once('open', () => {
          done();
        });

        client.open(mockSignURL);
      });

      test('hides the close button', () => {
        client = new HelloSign({ clientId: mockGuid });

        client.open(mockSignURL);

        const closeBtn = document.getElementsByClassName(settings.classNames.MODAL_CLOSE_BTN);

        expect(closeBtn.length).toBe(1);
      });

      test('doesn\'t throw when sent an unrecognized message', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once('open', () => {
          mockPostMessage({
            type: 'hellosign:fakemessage',
            payload: {
              signatureId: mockGuid,
            },
          });

          setTimeout(done, 500);
        });

        client.open(mockSignURL);
      });

      test('closes the signature request if it does not initialize before the timeout', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.open(mockSignURL, {
          timeout: 2000,
        });

        setTimeout(() => {
          expect(client.isOpen).toBe(false);
          done();
        }, 3000);
      });

      test('emits the "ready" event when app has initialized', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.READY, () => {
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.APP_INITIALIZE,
          });
        });

        client.open(mockSignURL);
      });

      test('emits the "error" event when app has errored', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.ERROR, (data) => {
          expect(data.signatureId).toBe(mockGuid);
          expect(data.code).toBe(42);
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.APP_ERROR,
            payload: {
              signatureId: mockGuid,
              code: 42,
            },
          });
        });

        client.open(mockSignURL);
      });

      test('emits the "message" event when the app has posted a message', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        const message = {
          type: HelloSign.messages.APP_INITIALIZE,
          payload: {
            signatureId: mockGuid,
          },
        };

        client.once(HelloSign.events.MESSAGE, (data) => {
          expect(data).toMatchObject(message);
          done();
        });

        client.once('open', () => {
          mockPostMessage(message);
        });

        client.open(mockSignURL);
      });

      test('emits the "sign" event when the signature request has been signed', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.SIGN, (data) => {
          expect(data.signatureId).toBe(mockGuid);
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.USER_SIGN_REQUEST,
            payload: {
              signatureId: mockGuid,
            },
          });
        });

        client.open(mockSignURL);
      });

      test('emits the "reassign" event when the signature request has been reassigned', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.REASSIGN, (data) => {
          expect(data.signatureId).toBe(mockGuid);
          expect(data.name).toBe('Alice');
          expect(data.email).toBe('alice@example.com');
          expect(data.reason).toBe('Example reason');
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.USER_REASSIGN_REQUEST,
            payload: {
              signatureId: mockGuid,
              name: 'Alice',
              email: 'alice@example.com',
              reason: 'Example reason',
            },
          });
        });

        client.open(mockSignURL);
      });

      test('emits the "decline" event when the signature request has been declined', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.DECLINE, (data) => {
          expect(data.signatureId).toBe(mockGuid);
          expect(data.reason).toBe('Example reason');
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.USER_DECLINE_REQUEST,
            payload: {
              signatureId: mockGuid,
              reason: 'Example reason',
            },
          });
        });

        client.open(mockSignURL);
      });

      test('emits the "finish" event when the signature request has been finished', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.FINISH, () => {
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.USER_FINISH_REQUEST,
          });
        });

        client.open(mockSignURL);
      });

      test('closes when the signature request has been canceled', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.CLOSE, () => {
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.USER_CANCEL_REQUEST,
          });
        });

        client.open(mockSignURL);
      });

      test('closes when the signature request has been finished', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.CLOSE, () => {
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.USER_FINISH_REQUEST,
          });
        });

        client.open(mockSignURL);
      });

      test('verifies the domain without errors', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.APP_VERIFY_DOMAIN_REQUEST,
            payload: {
              token: 'abc123',
            },
          });

          setTimeout(done, 500);
        });

        client.open(mockSignURL);
      });
    });

    describe('embedded requesting', () => {

      test('opens an embedded requesting url', () => {
        client = new HelloSign({ clientId: mockGuid });

        client.open(mockRequestURL);
      });

      test('shows the close button', () => {
        client = new HelloSign({ clientId: mockGuid });

        client.open(mockRequestURL);

        const closeBtn = document.getElementsByClassName(settings.classNames.MODAL_CLOSE_BTN);

        expect(closeBtn.length).toBe(1);
      });

      test('emits the "ready" event when app has initialized', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.READY, () => {
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.APP_INITIALIZE,
          });
        });

        client.open(mockRequestURL);
      });

      test('emits the "send" event when the signature request has been sent', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.SEND, (data) => {
          expect(data.signatureRequestId).toBe(mockGuid);
          expect(data.signatureId).toBe(mockGuid);
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.USER_SEND_REQUEST,
            payload: {
              signatureRequestId: mockGuid,
              signatureId: mockGuid,
            },
          });
        });

        client.open(mockRequestURL);
      });
    });

    describe('embedded templating', () => {

      test('opens an embedded templating url', () => {
        client = new HelloSign({ clientId: mockGuid });

        client.open(mockTemplatetURL);
      });

      test('shows the close button', () => {
        client = new HelloSign({ clientId: mockGuid });

        client.open(mockTemplatetURL);

        const closeBtn = document.getElementsByClassName(settings.classNames.MODAL_CLOSE_BTN);

        expect(closeBtn.length).toBe(1);
      });

      test('emits the "ready" event when app has initialized', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.READY, () => {
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.APP_INITIALIZE,
          });
        });

        client.open(mockTemplatetURL);
      });

      test('sends the "createTemplate" event when the signature request template has been created', (done) => {
        client = new HelloSign({ clientId: mockGuid });

        client.once(HelloSign.events.CREATE_TEMPLATE, (data) => {
          expect(data.message).toBe('Example message');
          expect(data.title).toBe('Example Title');
          done();
        });

        client.once('open', () => {
          mockPostMessage({
            type: HelloSign.messages.USER_CREATE_TEMPLATE,
            payload: {
              message: 'Example message',
              title: 'Example Title',
              signatureRequestInfo: {},
              signerRoles: ['Signer'],
            },
          });
        });

        client.open(mockTemplatetURL);
      });
    });
  });
});
