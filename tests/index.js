var expect = require('chai').expect;
require('jsdom-global')()
var HelloSign = require('../src/embedded.js');

describe('Module basics', function(){

    it('should be defined', function(){
        expect(HelloSign.open).to.not.equal(undefined);
    });

    it('should have an open function', function(){
        expect(HelloSign.open).to.be.a('function');
    });

});

describe('HelloSign.open', function(){

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
            HelloSign.open({url: "hodor"});
        } catch (e) {
            thrown = true;
        }
        expect(thrown).to.equal(false);
    });
});
