'use strict';

module.exports = {
  convert: convert,
  tokenize: tokenize
};

var classifiers = [
  'hundreds',
  'thousands',
  'millions',
  'billions'
];

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
  for (var i = classifiers.length - 1; i >= 0; i--) {
    var cls = classifiers[i];
    var split = rem.split(cls);

    if (split.length > 1) {
      // classifiers presents in the remainder string
      rem = split[1];
      result[cls] = split[0].trim();
    }
  }

  result.units = rem.trim();
  return result;
}
