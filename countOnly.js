/**
 * Create a function that takes a collection of items and returns the count of specific items
 * It should only count Strings and disregard other items
 * Collection of items is an array
 * items the function searches for is an object
 * returns object of search parameters and the count
 * strings not in the search object, and search strings set as false should not be returned
 * eg: arr["a", "b", "b", "c", "e"] search { a: true, b:true, c: false} output {a: 1, b: 2}
*/

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

module.exports = countOnly;
