/**
 * create function countLetters
 * input a string
 * output a count of the number of each in the string
 * eg. LHL returns L: 2, H: 1
 * Returning as an object is an excellent option using the letter as a key and the property being the count
 */

const countLetters = function(input) {
  let result = {};
  for (let x of input) {
    if (x === " ") {
      //do nothing
    } else if (result[x]) {
      result[x] += 1;
    } else {
      result[x] = 1;
    }
  }
  return result;
};

module.exports = countLetters;