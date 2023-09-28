//Compares two values if they are equal or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
  }
};

/**
 * write function that has input of an object and a string
 * search object for key that has value equal to the string
 * return the key that matched.
 * If no match return undefined
 */

// method using for in loop
// const findKeyByValue = function(tvObj, show) {
//   for (let x in tvObj) {
//     if (tvObj[x] === show) {
//       return x;
//     }
//   }
// };

// different method using object.keys and for of based on tips in compass
const findKeyByValue = function(tvObj, show) {
  let keys = Object.keys(tvObj);
  for (let x of keys) {
    if (tvObj[x] === show) {
      return x;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
