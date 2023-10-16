/**
 * function that takes in two objects
 * check if both objects have the same number of keys
 * if they do then compare the keys, or result is false if they don't
 * if all keys match result is true
 * if any key fails to match result is false
 */
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) { //check if same number of keys
    let keys = Object.keys(object1); //copy object1 keys
    for (let x of keys) { //iterate over keys
      if (Array.isArray(object1[x]) && Array.isArray(object2[x])) { //check if object property at the key contains arrays
        if (!eqArrays(object1[x], object2[x])) { //if arrays do not match return false
          return false;
        }
      } else if (Array.isArray(object1[x]) === false && Array.isArray(object2[x]) === false
                && typeof(object1[x]) === "object" && typeof(object1[x]) === "object") {
        eqObjects(object1[x], object2[x]);
      } else if (object1[x] !== object2[x]) { //check if object values at key do not match return false
        return false;
      }
    }
    return true; //return true if everything has matched
  } else {
    return false; //return false if key length is not the same
  }
};


module.exports = eqObjects;