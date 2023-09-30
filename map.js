/**
 * Create our own function to perform the same function as array map()
 * function that takes an array and a callback function and returns an array
 * it should return the array should be changed based on the instructions of the callback function
*/

//Array of words to use
const words = ["ground", "control", "to", "major", "tom"];

//map function, takes array and callback function and returns array
const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
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

//testing map function using stings to modify
const results1 = map(words, word => word[0]);
const results2 = map(words, word => 'Word is: ' + word);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['Word is: ground', 'Word is: control', 'Word is: to', 'Word is: major', 'Word is: tom']);
//testing map function using numbers to modify
const numArr = [1, 2, 3, 4, 5];
const results3 = map(numArr, number => number + 1);
const results4 = map(numArr, number => number * 5);
assertArraysEqual(results3, [2, 3, 4, 5, 6]);
assertArraysEqual(results4, [5, 10, 15, 20, 25]);
//testing map using numbers & words for boolean results
const results5 = map(numArr, number => number % 2 === 0);
const results6 = map(words, word => word === "tom");
assertArraysEqual(results5, [false, true, false, true, false]);
assertArraysEqual(results6, [false, false, false, false, true]);