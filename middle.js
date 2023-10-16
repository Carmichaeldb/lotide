// remove middle of array if odd number of values 
// remove middle two of array if even number of values
// do not remove any if array only has 1-2 values

const middle = function (arr) {
  let result = [];
  let i; //to hold middle index
  if (arr.length <= 2) { //if array contains only 1-2 values return them
    return result;
  } else if (arr.length % 2 === 0) { //if array is even
    i = arr.length / 2; //find middle of array
    result.push(arr[i - 1]);
    result.push(arr[i]); //push the two middle indexes
    return result; //return result
  } else {
    i = Math.floor(arr.length / 2); //if array is odd find middle index
    result.push(arr[i]); //push middle index
    return result; //return result
  }

};

module.exports = middle;