const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  let boolean = true;

  let newArr = n.split('-');

  let mac = '';

  newArr.forEach((el) => {
    mac += el;
  });

  mac
    .split('')
    .forEach((el) => (!array.includes(el.toLocaleLowerCase()) ? (boolean = false) : boolean));

  return boolean;
}
module.exports = {
  isMAC48Address,
};
