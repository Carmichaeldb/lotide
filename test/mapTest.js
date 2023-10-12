const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

//Array of words to use
const words = ["ground", "control", "to", "major", "tom"];
//testing map function using stings to modify
const results1 = map(words, word => word[0]);
const results2 = map(words, word => 'Word is: ' + word);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['Word is: ground', 'Word is: control', 'Word is: to', 'Word is: major', 'Word is: tom']);
//testing map function using numbers to modify
const numArr = [1, 2, 3, 4, 5];
const results3 = map(numArr, number => number + 1);
const results4 = map(numArr, number => number * 5);
assertArraysEqual(results3, [2, 3, 4, 5, 6]);
assertArraysEqual(results4, [5, 10, 15, 20, 25]);
//testing map using numbers & words for boolean results
const results5 = map(numArr, number => number % 2 === 0);
const results6 = map(words, word => word === "tom");
assertArraysEqual(results5, [false, true, false, true, false]);
assertArraysEqual(results6, [false, false, false, false, true]);