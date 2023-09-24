const without = function(sourceArr, removeArr) {
  let result = [];
  for (let x = 0; x < sourceArr.length; x++) {
    result.push(sourceArr[x]);
  }
  console.log(result);
  for (let n = 0; n < result.length; n++) {
    for (let i of removeArr) {
      if (i === result[n]) {
        result.splice(n, 1);
        n--;
      }
    }
  }
  return result;
};

const eqArrays = function(arr1, arr2) {
  let result;
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] === arr2[x] && arr1.length === arr2.length) {
      result = true;
    } else {
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

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const numbers = [1, 2, 3, 4, 5, 2, 2, 3, 4, 1, 8, 1];
console.log(without(numbers, [2, 4]));
assertArraysEqual(numbers, [1, 2, 3, 4, 5, 2, 2, 3, 4, 1, 8, 1]);
