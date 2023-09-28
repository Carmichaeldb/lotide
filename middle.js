// remove middle of array if odd number of values 
// remove middle two of array if even number of values
// do not remove any if array only has 1-2 values

const middle = function (arr) {
  let result = arr;
  let i;
  if (result.length <= 2) {
    return result;
  } else if (result.length % 2 === 0) {
    i = result.length / 2 - 1;
    result.splice(i, 2);
    return result;
  } else {
    i = Math.floor(result.length / 2);
    result.splice(i, 1);
    return result;
  }

};

const eqArrays = function (arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("✅✅✅Assertion Passed: Arrays Match");
  } else {
    console.log("🛑🛑🛑Assertion Failed:  Arrays did not Match");
  }
};

const arr1 = [1, 2];
const arr2 = [1, 2, 3, 4, 5, 6];
const arr3 = [1, 2, 3, 4, 5, 6, 7];

assertArraysEqual(middle(arr1), [1, 2]);
assertArraysEqual(middle(arr2), [1, 2, 5, 6]);
assertArraysEqual(middle(arr3), [1, 2, 3, 5, 6, 7]);