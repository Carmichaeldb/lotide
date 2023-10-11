const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true if arrays match
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false); // => false if arrays don't match