/**
 * A function that takes a collection of items and returns the count of specific items
 * It should only count Strings and disregard other items
 * Collection of items is an array
 * items the function searches for is an object
 * returns object of search parameters and the count
 * strings not in the search object, and search strings set as false should not be returned
 * eg: arr["a", "b", "b", "c", "e"] search { a: true, b:true, c: false} output {a: 1, b: 2}
*/

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what strings to count
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let i of allItems) { //iterates through array
    if (itemsToCount[i]) { //if array string exists in object as true
      if (result[i]) { //if string already exists in object increase count by 1
        result[i] += 1;
      } else { //else create string in object with property count of 1
        result[i] = 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;
