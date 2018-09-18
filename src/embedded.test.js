import HelloSign from './embedded';
import defaults from './defaults';
import pkg from '../package.json';
import settings from './settings';

const mockSignURL = 'https://app.hellosign.com/editor/embeddedSign?signature_id=abcdef0123456789abcdef0123456789';
const mockRequestURL = 'https://app.hellosign.com/editor/embeddedRequest?signature_id=abcdef0123456789abcdef0123456789';
const mockClientId = 'abcdef0123456789abcdef0123456789';

describe('HelloSign', () => {

  afterEach(() => {
    // Clear DOM.
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

    describe('element()', () => {
      test('returns the base element', () => {
        const client = new HelloSign({ clientId: mockClientId });

        client.open(mockSignURL);

        expect(client.element).toBeInstanceOf(HTMLElement);

        client.close();
      });
    });

    describe('isOpen()', () => {
      test('returns the open state', () => {
        const client = new HelloSign({ clientId: mockClientId });

        expect(client.isOpen).toEqual(false);

        client.open(mockSignURL);

        expect(client.isOpen).toEqual(true);

        client.close();

        expect(client.isOpen).toEqual(false);
      });
    });
  });

  describe('methods', () => {

    describe('open()', () => {

      test('closes the old window if embedded is already open', () => {
        const client = new HelloSign({
          clientId: mockClientId,
        });

        client.open(mockSignURL);
        client.open(mockSignURL);

        expect(document.getElementsByClassName(HelloSign.classNames.BASE).length).toBe(1);

        client.close();
      });

      test('appends markup into document body if no container is specified', () => {
        const client = new HelloSign();
        const expected = expect.stringContaining(settings.classNames.BASE);

        client.open(mockSignURL, {
          clientId: mockClientId,
        });

        expect(document.body.children.length).toBeGreaterThan(0);
        expect(document.body.lastChild.className).toEqual(expected);

        client.close();
      });

      test('appends markup into container if one is specified', () => {
        const client = new HelloSign();
        const container = document.createElement('div');
        const expected = expect.stringContaining(settings.classNames.BASE);

        client.open(mockSignURL, {
          clientId: mockClientId,
          container,
        });

        expect(container.children.length).toBeGreaterThan(0);
        expect(container.firstChild.className).toEqual(expected);

        client.close();
      });

      test('emits the "open" event', (done) => {
        const client = new HelloSign();

        client.once(HelloSign.events.OPEN, () => {
          client.close();

          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
        });
      });

      test('throws if "clientId" is not defined', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL);
        }).toThrow(/"clientId" is required/);
      });

      test('throws if "clientId" is not a string', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: 42,
          });
        }).toThrow(/"clientId" must be a string/);
      });

      test('appends "client_id" to the iFrame URL if "clientId" is valid', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('client_id')).toBe(true);
          expect(url.searchParams.get('client_id')).toBe(mockClientId);
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
        });
      });

      test('throws if "container" is not an element', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            container: 42,
          });
        }).toThrow(/"container" must be an element/);
      });

      test('throws if "debug" is not a boolean', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            debug: 'false',
          });
        }).toThrow(/"debug" must be a boolean/);
      });

      test('appends "debug" to the iFrame URL if "debug"" is valid', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('debug')).toBe(true);
          expect(url.searchParams.get('debug')).toBe('1');
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
          debug: true,
        });
      });

      test('throws if "finalButtonText" is not a string', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            finalButtonText: 42,
          });
        }).toThrow(/"finalButtonText" must be a string/);
      });

      test('throws if "finalButtonText" is neither "Send" nor "Continue"', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            finalButtonText: 'foobar',
          });
        }).toThrow(/"finalButtonText" must be either "Send" or "Continue"/);
      });

      test('appends "final_button_text" to the iFrame URL if "finalButtonText" is valid', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('final_button_text')).toBe(true);
          expect(url.searchParams.get('final_button_text')).toBe('Send');
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
          finalButtonText: 'Send',
        });
      });

      test('throws if "hideHeader" is not a boolean', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            hideHeader: 42,
          });
        }).toThrow(/"hideHeader" must be a boolean/);
      });

      test('appends "hideHeader" to the iFrame URL if "hideHeader" is valid', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('hideHeader')).toBe(true);
          expect(url.searchParams.get('hideHeader')).toBe('true');
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
          hideHeader: true,
        });
      });

      test('appends "js_version" to the iFrame URL', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('js_version')).toBe(true);
          expect(url.searchParams.get('js_version')).toBe(pkg.version);
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
        });
      });

      test('throws if "locale" is not a string', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            locale: 42,
          });
        }).toThrow(/"locale" must be a string/);
      });

      test('throws if "locale" is not supported', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            locale: 'Mars',
          });
        }).toThrow(/"Mars" is not a supported locale/);
      });

      test('appends default value for "user_culture" to the iFrame URL if "locale" is not specified', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('user_culture')).toBe(true);
          expect(url.searchParams.get('user_culture')).toBe(defaults.locale);
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
        });
      });

      test('appends "user_culture" to the iFrame URL if "locale" is valid', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('user_culture')).toBe(true);
          expect(url.searchParams.get('user_culture')).toBe('zh_CN');
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
          locale: 'zh_CN',
        });
      });

      test('appends "parent_url" to the iFrame URL', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('parent_url')).toBe(true);
          expect(url.searchParams.get('parent_url')).toBe(document.location.href);
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
        });
      });

      test('throws if "redirectTo" is not a string', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            redirectTo: 42,
          });
        }).toThrow(/"redirectTo" must be a string/);
      });

      test('appends "redirect_url" to the iFrame URL if "redirectTo" is valid', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('redirect_url')).toBe(true);
          expect(url.searchParams.get('redirect_url')).toBe('http://example.com/');
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
          redirectTo: 'http://example.com/',
        });
      });

      test('throws if "requestingEmail" is not a string', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            requestingEmail: 42,
          });
        }).toThrow(/"requestingEmail" must be a string/);
      });

      test('appends "requester" to the iFrame URL if "requestingEmail" is valid', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('requester')).toBe(true);
          expect(url.searchParams.get('requester')).toBe('alice@example.com');
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
          requestingEmail: 'alice@example.com',
        });
      });

      test('throws if "skipDomainVerification" is not a boolean', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            skipDomainVerification: 42,
          });
        }).toThrow(/"skipDomainVerification" must be a boolean/);
      });

      test('appends default value for "skip_domain_verification" to the iFrame URL if "skipDomainVerification" is not specified', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('skip_domain_verification')).toBe(true);
          expect(url.searchParams.get('skip_domain_verification')).toBe('0');
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
        });
      });

      test('appends "skip_domain_verification" to the iFrame URL if "skipDomainVerification" is valid', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('skip_domain_verification')).toBe(true);
          expect(url.searchParams.get('skip_domain_verification')).toBe('1');
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
          skipDomainVerification: true,
        });
      });

      test('throws if "whiteLabeling" is not an object', () => {
        const client = new HelloSign();

        expect(() => {
          client.open(mockSignURL, {
            clientId: mockClientId,
            whiteLabeling: 42,
          });
        }).toThrow(/"whiteLabeling" must be an object/);
      });

      test('appends "white_labeling_options" to the iFrame URL if "whiteLabeling" is valid', (done) => {
        const client = new HelloSign();

        client.on(HelloSign.events.OPEN, (data) => {
          const url = new URL(data.iFrameUrl);

          client.close();

          expect(url.searchParams.has('white_labeling_options')).toBe(true);
          expect(url.searchParams.get('white_labeling_options')).toBe(JSON.stringify({ foo: 'bar' }));
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
          whiteLabeling: {
            foo: 'bar',
          },
        });
      });
    });

    describe('close()', () => {

      test('closes when the close button is clicked', (done) => {
        const client = new HelloSign();

        // Never visible when signing.
        client.open(mockRequestURL, {
          clientId: mockClientId,
        });

        client.once(HelloSign.events.CLOSE, () => {
          done();
        });

        const elem = client.element;
        const closeBtn = elem.getElementsByClassName(settings.classNames.MODAL_CLOSE_BTN).item(0);

        closeBtn.click();
      });

      test('emits the "close" event', (done) => {
        const client = new HelloSign();

        client.once(HelloSign.events.CLOSE, () => {
          done();
        });

        client.open(mockSignURL, {
          clientId: mockClientId,
        });

        client.close();
      });

      test('removes markup from the DOM when closed', (done) => {
        const client = new HelloSign();

        const fn = jest.fn(() => {
          expect(document.body.getElementsByClassName(settings.classNames.BASE).length).toBe(0);

          done();
        });

        client.once(HelloSign.events.CLOSE, fn);

        client.open(mockSignURL, {
          clientId: mockClientId,
        });

        client.close();
      });

      test('removes markup from container the DOM when closed', (done) => {
        const client = new HelloSign();
        const container = document.createElement('div');

        const fn = jest.fn(() => {
          expect(container.getElementsByClassName(settings.classNames.BASE).length).toBe(0);

          done();
        });

        client.once(HelloSign.events.CLOSE, fn);

        client.open(mockSignURL, {
          clientId: mockClientId,
          container,
        });

        client.close();
      });
    });
  });
});
