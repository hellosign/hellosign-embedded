// Test Env
var expect = require('chai').expect;
var jsdomGlobal = require('jsdom-global')();

var HelloSign;
var clientId = "IAMA_FAKE_CLIENTID_AMA";
var fakeUrl = "http://api.hellosign.com/fakepath/87687fds";

describe('Module basics', function(){

    beforeEach(function(){
        HelloSign = require('../src/embedded.js');
    });

    it('should be defined', function(){
        expect(HelloSign.open).to.not.equal(undefined);
    });

    it('should have base functions defined', function(){
        expect(HelloSign.init).to.be.a('function');
        expect(HelloSign.open).to.be.a('function');
        expect(HelloSign.ensureParentDomain).to.be.a('function');
    });

    it('should specify the proper base URLs', function(){
        expect(HelloSign.baseUrl).to.equal("https://www.hellosign.com");
        expect(HelloSign.cdnBaseUrl).to.equal("https://s3.amazonaws.com/cdn.hellofax.com");
    });

});

describe('HelloSign.init', function(){
    beforeEach(function(){
        HelloSign = require('../src/embedded.js');
    });

    it('should accept and set a client ID', function(){
        HelloSign.init(clientId);
        expect(HelloSign.clientId).to.equal(clientId);
    });
});

describe('HelloSign.open', function(){
    beforeEach(function(){
        HelloSign = require('../src/embedded.js');
    });
    afterEach(function(){
        HelloSign = undefined;
    });

    it('should require args', function(){
        var errorMatch;
        // No args
        try {
            HelloSign.open();
        } catch (e) {
            errorMatch = e.constructor === TypeError;
        }
        expect(errorMatch).to.equal(true);
        // Wrong args
        try {
            HelloSign.open("string");
        } catch (e) {
            errorMatch = e.constructor === TypeError;
        }
        expect(errorMatch).to.equal(true);
    });

    it('should accept an arguments hash', function(){
        var thrown = false;
        try {
            HelloSign.open({url: fakeUrl});
        } catch (e) {
            thrown = true;
        }
        expect(thrown).to.equal(false);
    });

    it('should open an iframe', function(){
        HelloSign.init(clientId);
        HelloSign.open({url: fakeUrl});
        var iframes = document.getElementsByTagName('iframe');
        expect(Object.keys(iframes).length).to.not.equal(0);
        expect(HelloSign.iframe).to.equal(iframes['0']);
    });

    after(function(){
        jsdomGlobal(); // Reset global env
    });
});

describe('Utilities', function(){
    before(function(){
        HelloSign = require('../src/embedded.js');
    });

    it('should clean up URLs', function(){
        var pre = "http:\/\/hellosign.com?baz&foobar"
        var post = "http://hellosign.com?baz&foobar"
        var result = HelloSign.safeUrl(pre);
        expect(result).to.equal(post);
    });

    it('should provide Cross-window message functions', function(){
        expect(HelloSign).to.have.property('XWM');
        expect(HelloSign.XWM).to.have.property('send');
        expect(HelloSign.XWM).to.have.property('receive');
    });

    it('should provide error reporting', function(){
        expect(HelloSign).to.have.property('reportError');
    })
});
