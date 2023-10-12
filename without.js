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
  let result = [];
  for (let item of sourceArr) {
    if (!removeArr.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

module.exports = without;
