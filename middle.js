// remove middle of array if odd number of values 
// remove middle two of array if even number of values
// do not remove any if array only has 1-2 values

const middle = function (arr) {
  let result = arr;
  let i;
  if (result.length <= 2) {
    return result;
  } else if (result.length % 2 === 0) {
    i = result.length / 2 - 1;
    result.splice(i, 2);
    return result;
  } else {
    i = Math.floor(result.length / 2);
    result.splice(i, 1);
    return result;
  }

};

module.exports = middle;