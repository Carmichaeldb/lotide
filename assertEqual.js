//Compares two values if they are equal or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) { //compares values to match
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;