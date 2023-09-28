//function that takes two arrays and returns true or false based on if arrays are perfect match
const eqArrays = function (arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x] || arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

//checks all keys and values in object matches
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

//takes two objects and if the objects match using eqObjects it passes, if eqObjects returns false it fails.
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const testObj = {1: "a", 2: "b", 3: 54, 4: [1, 2, 3]};
const testObjPass = {1: "a", 2: "b", 3: 54, 4: [1, 2, 3]};
const testObjFail = {1: "a", 2: "z", 3: 54, 4: [1, 2, 3]};
assertObjectsEqual(testObj, testObjPass);
assertObjectsEqual(testObj, testObjFail);