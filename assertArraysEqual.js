let eqArrays = function (arr1, arr2) {
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

const assertEqual = function(arr1, arr2) {
  let arrMatch = eqArrays(arr1,arr2);
  if (arrMatch === true) {
    console.log(`✅✅✅Assertion Passed: Arrays Match`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  Arrays did not Match`);
  }
};

assertEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertEqual([1, 2, 3], [1, 2, 4]); // => should FAIL