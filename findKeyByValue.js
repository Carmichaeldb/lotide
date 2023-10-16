/**
 * function that has input of an object and a string
 * search object for key that has value equal to the string
 * return the key that matched.
 * If no match return undefined
 */

const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj); //create array of objects keys
  for (let x of keys) { //iterate over array of keys
    if (obj[x] === value) { //check if value matches any key's value
      return x; //return key
    }
  }
};

module.exports = findKeyByValue;

