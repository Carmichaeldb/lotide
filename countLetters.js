/**
 * create function countLetters
 * input a string
 * output a count of the number of each in the string
 * eg. LHL returns L: 2, H: 1
 * Returns an object using the letter as a key and the property being the count
 */

const countLetters = function(input) {
  let result = {};
  for (let x of input) {
    if (x === " ") {
      //do nothing if character is whitespace
    } else if (result[x]) {
      //if character exists in object, increment count
      result[x] += 1;
    } else {
      //if character doesn't exist in object create it with a property of 1
      result[x] = 1;
    }
  }
  return result;
};

module.exports = countLetters;