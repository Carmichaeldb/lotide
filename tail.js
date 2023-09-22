//assertEqual to test tail function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
  }
};

//tail function to remove first element in the array and return a new array
const tail = function(arr) {
  let result;
  result = arr.slice(1);
  //ensure array is properly modified, or is empty
  console.log(arr, result);
  return result;
};

//testing tail works properly by ensuring the original array is not modified.
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);