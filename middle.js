// remove middle of array if odd number of values 
// remove middle two of array if even number of values
// do not remove any if array only has 1-2 values

const middle = function (arr) {
  let result = arr; //copies array so original is unaltered
  let i; //to hold middle index
  if (result.length <= 2) { //if array contains only 1-2 values return them
    return result;
  } else if (result.length % 2 === 0) { //if array is even
    i = result.length / 2 - 1; //find middle of array
    result.splice(i, 2); //splice middle two values
    return result; //return result
  } else {
    i = Math.floor(result.length / 2); //if array is odd find middle index
    result.splice(i, 1); //splice middle index
    return result; //return result
  }

};

module.exports = middle;