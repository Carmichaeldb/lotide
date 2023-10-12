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

module.exports = findKeyByValue;

