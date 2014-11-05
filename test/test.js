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

  describe('one hundred and sixty seven', function() {
    var tokens;

    before(function() {
      tokens = tokenize('one hundred and sixty seven');
    });

    it('sholde be "one" for hundreds', function() {
      assert.equal(tokens.hundreds, 'one');
    });

    it('sholde be "sixty seven" for units', function() {
      assert.equal(tokens.units, 'sixty seven');
    });
  });

  describe('full string', function() {
    var tokens;

    before(function() {
      tokens = tokenize('thirty five billions six millions' +
        ' one thousand eight hundreds and sixty seven');
    });

    it('sholde be "thirty five" for billions', function() {
      assert.equal(tokens.billions, 'thirty five');
    });

    it('sholde be "six" for millions', function() {
      assert.equal(tokens.millions, 'six');
    });

    it('sholde be "one" for thousands', function() {
      assert.equal(tokens.thousands, 'one');
    });

    it('sholde be "eight" for hundreds', function() {
      assert.equal(tokens.hundreds, 'eight');
    });

    it('sholde be "sixty seven" for units', function() {
      assert.equal(tokens.units, 'sixty seven');
    });
  });
});
