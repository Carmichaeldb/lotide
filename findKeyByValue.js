/**
 * write function that has input of an object and a string
 * search object for key that has value equal to the string
 * return the key that matched.
 * If no match return undefined
 */

// method using for in loop
// const findKeyByValue = function(obj, value) {
//   for (let x in obj) {
//     if (obj[x] === value) {
//       return x;
//     }
//   }
// };

// different method using object.keys and for of based on tips in compass
const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  for (let x of keys) {
    if (obj[x] === value) {
      return x;
    }
  }
};

module.exports = findKeyByValue;

