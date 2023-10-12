const flatten = function(arr) {
  let result = [];
  let checker;
  for (let x = 0; x < arr.length; x++) {
    checker = Array.isArray(arr[x]);
    if (checker) {
      for (let i = 0; i < arr[x].length; i++) {
        result.push(arr[x][i]);
      }
    } else {
      result.push(arr[x]);
    }
  }
  return result;
};

module.exports = flatten;