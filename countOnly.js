/**
 * Create a function that takes a collection of items and returns the count of specific items
 * It should only count Strings and disregard other items
 * Collection of items is an array
 * items the function searches for is an object
 * returns object of search parameters and the count
 * strings not in the search object, and search strings set as false should not be returned
 * eg: arr["a", "b", "b", "c", "e"] search { a: true, b:true, c: false} output {a: 1, b: 2}
*/

//Compares two values if they are equal or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let i of allItems) {
    if (itemsToCount[i]) {
      if (result[i]) {
        result[i] += 1;
      } else {
        result[i] = 1;
      }
    }
  }
  return result;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
