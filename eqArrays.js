//create function that takes two arrays and returns true or false based on if arrays are perfect match

const eqArrays = function (arr1, arr2) {
  let result;
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] === arr2[x] && arr1.length === arr2.length) {
      result = true;
    }
    else {
      result = false;
      break;
    }
  }
  return result;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS