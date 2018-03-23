const { expect } = require('chai');
const jsdomGlobal = require('jsdom-global')();

const HelloSign = require('../src/embedded.js');

const clientId = 'IAMA_FAKE_CLIENTID_AMA';
const fakeUrl = 'http://api.hellosign.com/fakepath/87687fds';

describe('HelloSign Embedded', () => {

  describe('Basics', () => {

    it('should be defined', () => {
      expect(HelloSign.open).to.not.equal(undefined);
    });

    it('should have base functions defined', () => {
      expect(HelloSign.init).to.be.a('function');
      expect(HelloSign.open).to.be.a('function');
      expect(HelloSign.ensureParentDomain).to.be.a('function');
    });

    it('should specify the proper base URLs', () => {
      expect(HelloSign.baseUrl).to.equal('https://www.hellosign.com');
      expect(HelloSign.cdnBaseUrl).to.equal('https://s3.amazonaws.com/cdn.hellofax.com');
    });
  });

  describe('HelloSign.init()', () => {

    it('should accept and set a client ID', () => {
      HelloSign.init(clientId);
      expect(HelloSign.clientId).to.equal(clientId);
    });
  });

  describe('HelloSign.open()', () => {

    after(() => {
      jsdomGlobal(); // Reset global env
    });

    it('should require args', () => {
      let errorMatch;

      // No args
      expect(() => {
        HelloSign.open();
      }).to.throw(TypeError);

      // Wrong args
      expect(() => {
        HelloSign.open('string');
      }).to.throw(TypeError);
    });

    it('should accept an arguments hash', () => {
      expect(() => {
        HelloSign.open({ url: fakeUrl });
      }).to.not.throw();
    });

    it('should open an iframe', () => {
      HelloSign.init(clientId);
      HelloSign.open({ url: fakeUrl });

      const iframes = document.getElementsByTagName('iframe');

      expect(Object.keys(iframes).length).to.not.equal(0);
      expect(HelloSign.iframe).to.equal(iframes['0']);
    });
  });

  describe('Utilities', () => {

    it('should clean up URLs', () => {
      const pre = 'http:\/\/hellosign.com?baz&foobar'
      const post = 'http://hellosign.com?baz&foobar'
      const result = HelloSign.safeUrl(pre);

      expect(result).to.equal(post);
    });

    it('should provide Cross-window message functions', () => {
      expect(HelloSign).to.have.property('XWM');
      expect(HelloSign.XWM).to.have.property('send');
      expect(HelloSign.XWM).to.have.property('receive');
    });

    it('should provide error reporting', () => {
      expect(HelloSign).to.have.property('reportError');
    });
  });
});
