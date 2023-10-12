/**
 * Create our own function to perform the same function as array map()
 * function that takes an array and a callback function and returns an array
 * it should return the array should be changed based on the instructions of the callback function
*/

//map function, takes array and callback function and returns array
const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;