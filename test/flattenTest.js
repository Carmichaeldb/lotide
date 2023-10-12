const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

const arr = [1, 2, [3, 4], 5, [6]];
assertArraysEqual(flatten(arr), [1, 2, 3, 4, 5, 6]);