'use strict';
var assert = require('assert');

var convert = require('../').convert;

var data = [
  {
    input: {
      hundreds: 'five',
      units: 'sixteen'
    },
    expect: 516
  },

  {
    input: {
      units: 'thirteen'
    },
    expect: 13
  },

  {
    input: {
      millions: 'thirty seven',
      units: 'fifty one'
    },
    expect: 37000051
  },

  {
    input: {
      billions: 'seventy eight',
      hundreds: 'three',
      units: 'fifty one'
    },
    expect: 78000000351
  }
];

describe('convert parsed object', function() {
  data.forEach(function(d) {
    it('should give proper result for ' +
      JSON.stringify(d.input),function() {
        assert.equal(d.expect, convert(d.input));
      });
  });
});
