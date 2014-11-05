'use strict';

module.exports = {
  tokenize: tokenize
};

var classifiers = [
  {
    id: 'hundreds',
    forms: ['hundreds', 'hundred']
  },
  {
    id: 'thousands',
    forms: ['thousands', 'thousand']
  },
  {
    id: 'millions',
    forms: ['millions', 'million']
  },
  {
    id: 'billions',
    forms: ['billions', 'billion']
  }
];

/**
 * Spltits the string by classifiers
 * @param  {str} str Input string
 * @return {Object} object[classifier from classifiers]
 *                                    == number of such units
 */
function tokenize(str) {
  var result = {};
  var rem = str;

  for (var k = classifiers.length - 1; k >= 0; k--) {
    var cls = classifiers[k];

    for (var i = 0, l = cls.forms.length; i < l; i++) {
      var split = rem.split(cls.forms[i]);

      if (split.length > 1) {
        // classifier's form presents in the remainder string
        rem = split[1];
        result[cls.id] = split[0].trim();

        // don't try other forms
        break;
      }
    }
  }

  result.units = _processUnits(rem);
  return result;
}

/**
 * Units anjusments
 * @param  {Str} str Input string
 * @return {Str} Formatted units
 */
function _processUnits(str) {
  return str.replace('and', '').trim();
}
