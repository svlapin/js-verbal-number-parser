'use strict';

module.exports = {
  tokenize: tokenize
};

var classifiers = {
  hundreds: ['hundreds', 'hundred'],
  thousands: ['thousands', 'thousand'],
  millions: ['millions', 'million'],
  billions: ['billions', 'billion']
};

/**
 * Spltits the string by classifiers
 * @param  {str} str Input string
 * @return {Object} object[classifier from classifiers]
 *                                    == number of such units
 */
function tokenize(str) {
  var result = {};
  var rem = str;

  for (var cls in classifiers) {
    var forms = classifiers[cls];

    for (var i = 0, l = forms.length; i < l; i++) {
      var split = rem.split(forms[i]);

      if (split.length > 1) {
        // classifier's form presents in the remainder string
        rem = split[1];
        result[cls] = split[0].trim();

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
