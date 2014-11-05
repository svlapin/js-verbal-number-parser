'use strict';
var assert = require('assert');

var module = require('../')

var convert = module.convert;
var tokenize = module.tokenize;

describe('tokenization', function() {
  var tokens = tokenize('three hundreds thirty five');

  it('sholde be "three" for hundreds', function() {
    assert.equal(tokens.hundreds, 'three');
  });

  it('sholde be "thirty five" for units', function() {
    assert.equal(tokens.units, 'thirty five');
  });
});

describe('conversion', function() {
  it('sholde be 1 for one', function() {
    assert.equal('1', convert('1'));
  });
});
