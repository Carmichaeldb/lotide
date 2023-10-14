/**
 * Create our own function to perform the same function as array map()
 * function that takes an array and a callback function and returns an array
 * it should return the array should be changed based on the instructions of the callback function
*/

//map function, takes array and callback function and returns array
const map = function(arr, callback) {
  const results = []; //array to return
  for (let item of arr) { //iterates over input array
    results.push(callback(item)); //pushes results of callback into results array
  }
  return results; //returns result array
};

module.exports = map;