const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  let newArr = [];

  if (!Array.isArray(array)) throw new Error("'arr' parameter must be an instance of the Array!");

  for (let i = 0; i < array.length; i++) {
    switch (true) {
      case array[i] === '--discard-next':
        if (i === array.length - 1) {
          break;
        }
        i++;
        newArr.splice(i + 1, 1);
        break;
      case array[i] === '--discard-prev':
        if (!newArr.includes(array[i - 1])) break;
        newArr.splice(i - 1, 1);
        break;
      case array[i] === '--double-next':
        if (i === array.length - 1) break;
        newArr.push(array[i + 1]);
        break;
      case array[i] === '--double-prev':
        if (!newArr.includes(array[i - 1])) break;
        newArr.push(newArr[newArr.length - 1]);
        break;
      default:
        newArr.push(array[i]);
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
