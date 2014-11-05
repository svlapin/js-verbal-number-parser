'use strict';

module.exports = {
  convert: convert,
  tokenize: tokenize
};

var classifiers = {
  hundreds: ['hundreds', 'hundred'],
  thousands: ['thousands', 'thousand'],
  millions: ['millions', 'million'],
  billions: ['billions', 'billion']
};

function convert() {
  // TODO
}

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
        // classifiers presents in the remainder string
        rem = split[1];
        result[cls] = split[0].trim();

        // don't try other forms
        break;
      }
    }
  }

  result.units = rem.trim();
  return result;
}
