const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    num++;
    if (str[i] != str[i + 1]) {
      newStr = newStr + num + str[i];
      num = 0;
    }
  }
  return newStr.replace(/1/g, '');
}

module.exports = {
  encodeLine,
};
