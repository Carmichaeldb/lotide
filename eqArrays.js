//create function that takes two arrays and returns true or false based on if arrays are perfect match
const eqArrays = function (arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x] || arr1.length !== arr2.length) { //if array value at index doesn't match or overall array length doesn't match return false
      return false;
    }
  }
  return true; //if array length matches and all values match return true
};

module.exports = eqArrays;