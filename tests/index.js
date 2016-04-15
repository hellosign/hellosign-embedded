// Tests will go here once written
var assert = require('chai').assert;
var HelloSign = require('../src/embedded.js');

describe('Basics', function(){
    it('should be defined', function(){
        assert.typeOf(HelloSign, 'object');
    })
});



/*
var assert = require('chai').assert;
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
*/
