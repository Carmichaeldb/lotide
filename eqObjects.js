/**
 * write function that takes in two objects
 * check if both objects have the same number of keys
 * if they do then compare the keys, or result is false if they don't
 * if all keys match result is true
 * if any key fails to match result is false
 */
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    let keys = Object.keys(object1);
    for (let x of keys) {
      if (Array.isArray(object1[x]) && Array.isArray(object2[x])) {
        if (!eqArrays(object1[x], object2[x])) {
          return false;
        }
      } else if (object1[x] !== object2[x]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;