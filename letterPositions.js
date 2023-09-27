//testing

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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("✅✅✅Assertion Passed: Arrays Match");
  } else {
    console.log("🛑🛑🛑Assertion Failed:  Arrays did not Match");
  }
};

/**
 * function input string
 * return object with keys of string letters
 * object properties are array of string letter indexes
 */
// result{}
// for i = 0 input.length i++
//  if i === " "
//  do nothing
//  if result[input[i]]
//  result[input[i]].push(i)
//  else
//  result[input[i]] = [i]

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      //do nothing
    } else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

const result1 = letterPositions("lighthouse in the house");

assertArraysEqual(result1["h"],[ 3, 5, 15, 18 ]);
assertArraysEqual(result1["o"],[ 6, 19 ]);
assertArraysEqual(result1["g"],[ 2 ]);