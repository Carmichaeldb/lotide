const flatten = function(arr) {
  let result = []; //array to return
  let checker;
  for (let x = 0; x < arr.length; x++) { //iterate over array
    checker = Array.isArray(arr[x]); //if index contains array assign to checker
    if (checker) { //if checker has value
      for (let i = 0; i < arr[x].length; i++) { //iterate over array in checker
        result.push(arr[x][i]); //push nested array values into result array
      }
    } else {
      result.push(arr[x]); //if value at index is not array push to result array
    }
  }
  return result; //return result array
};

module.exports = flatten;