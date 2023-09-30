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

// to assertArraysEqual and eqArrays functions totest if results match expectations
const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${arr1} !== ${arr2}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
