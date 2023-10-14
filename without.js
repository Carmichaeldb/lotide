/**
 * Function that takes two arrays
 * first array is the sourceArr containing array of values
 * second array is removeArr containing array of values
 * remove values from sourceArr that match the removeArr
 * does not change original arrays
 */

// Original written function
// const without = function(sourceArr, removeArr) {
//   let result = [];
//   for (let x = 0; x < sourceArr.length; x++) {
//     result.push(sourceArr[x]);
//   }
//   for (let n = 0; n < result.length; n++) {
//     for (let i of removeArr) {
//       if (i === result[n]) {
//         result.splice(n, 1);
//         n--;
//       }
//     }
//   }
//   return result;
// };

// refactored function using includes
const without = function(sourceArr, removeArr) {
  let result = []; //return array
  for (let item of sourceArr) { //iterate over sourceArr
    if (!removeArr.includes(item)) { //if removeArr includes item of sourceArr
      result.push(item); //push item into result array
    }
  }
  return result; //return new array of values without values from removeArr
};

module.exports = without;
