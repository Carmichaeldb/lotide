const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const arr1 = [1, 2];
const arr2 = [1, 2, 3, 4, 5, 6];
const arr3 = [1, 2, 3, 4, 5, 6, 7];

assertArraysEqual(middle(arr1), [1, 2]);
assertArraysEqual(middle(arr2), [1, 2, 5, 6]);
assertArraysEqual(middle(arr3), [1, 2, 3, 5, 6, 7]);