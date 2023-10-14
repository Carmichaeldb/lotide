/**
 * function that has input of an object and a string
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
  let keys = Object.keys(obj); //create array of objects keys
  for (let x of keys) { //iterate over array of keys
    if (obj[x] === value) { //check if value matches any key's value
      return x; //return key
    }
  }
};

module.exports = findKeyByValue;

