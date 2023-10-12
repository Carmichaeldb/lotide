/**
 * function will be similar to lodash takeWhile function
 * function will take two parameters of array and a callback
 * returns slice of the array with elements taken from the beginning
 * It should keep going until the callback/predicate returns a truthy value
 */

// function input array and callback
// will loop through array
// uses call back to determine when to end the loop
// pushes array data into result array until callback logic is met
const takeUntil = function(arr, callback) {
  let result = [];
  for (let item of arr) {
    if (callback(item)) {
      break; //ends loop if callback logic is met
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;
