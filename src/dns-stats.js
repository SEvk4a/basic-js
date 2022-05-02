const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};

  domains.forEach((el) => {
    const newArr = el.split('.');

    newArr[newArr.length - 1] = '.' + newArr[newArr.length - 1];

    newArr.reverse();
    for (let i = 0; i < newArr.length; i++) {
      const item = newArr.slice(0, i + 1).join('.');
      obj[item] = obj.hasOwnProperty(item) ? obj[item] + 1 : 1;
    }
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
