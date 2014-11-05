'use strict';
var assert = require('assert');

var module = require('../')

var convert = module.convert;
var tokenize = module.tokenize;

describe('tokenization', function() {
  describe('three hundreds thirty five', function() {
    var tokens;

    before(function() {
      tokens = tokenize('three hundreds thirty five');
    });


    it('sholde be "three" for hundreds', function() {
      assert.equal(tokens.hundreds, 'three');
    });

    it('sholde be "thirty five" for units', function() {
      assert.equal(tokens.units, 'thirty five');
    });
  });

  describe('one hundred sixty five', function() {
    var tokens;

    before(function() {
      tokens = tokenize('one hundred sixty five');
    });

    it('sholde be "one" for hundreds', function() {
      assert.equal(tokens.hundreds, 'one');
    });

    it('sholde be "sixty five" for units', function() {
      assert.equal(tokens.units, 'sixty five');
    });
  });
});
