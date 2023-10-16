//tail function to remove first element in the array and return a new array
const tail = function(arr) {
  let result = arr.slice(1); //result is input arr minus first index
  return result; //return result
};

module.exports = tail;