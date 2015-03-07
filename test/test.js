'use strict';
var assert = require('assert');

var translate = require('../').translate;

var data = [
  {
    input: 'five hundreds sixteen',
    expect: 516
  },

  {
    input: 'one million and ten',
    expect: 1000010
  },

  {
    input: 'one million three hundreds and ten',
    expect: 1000310
  },

  {
    input: 'two millions sixty five thousands three hundreds and ten',
    expect: 2065310
  },

  {
    input: 'nine millions three hundreds sixty five thousands three hundreds eleven',
    expect: 9365311
  },

  {
    input: '17.46 million',
    expect: 17460000
  }
];

describe('translate string', function() {
  data.forEach(function(d) {
    it('should give proper result for ' +  d.input, function() {
        assert.equal(d.expect, translate(d.input));
      });
  });
});
