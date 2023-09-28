const flatten = function(arr) {
  let result = [];
  let checker;
  for (let x = 0; x < arr.length; x++) {
    checker = Array.isArray(arr[x]);
    if (checker) {
      for (let i = 0; i < arr[x].length; i++) {
        result.push(arr[x][i]);
      }
    } else {
      result.push(arr[x]);
    }
  }
  return result;
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

const arr = [1, 2, [3, 4], 5, [6]];
assertArraysEqual(flatten(arr), [1, 2, 3, 4, 5, 6]);