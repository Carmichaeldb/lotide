const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const numbers = [1, 2, 3, 4, 5, 2, 2, 3, 4, 1, 8, 1];
console.log(without(numbers, [2, 4]));
assertArraysEqual(numbers, [1, 2, 3, 4, 5, 2, 2, 3, 4, 1, 8, 1]);