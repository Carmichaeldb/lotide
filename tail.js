//tail function to remove first element in the array and return a new array
const tail = function(arr) {
  let result = arr.slice(1);
  //ensure array is properly modified, or is empty
  console.log(arr, result);
  return result;
};

module.exports = tail;