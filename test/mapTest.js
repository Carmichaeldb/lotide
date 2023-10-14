const map = require('../map');
// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

// testing map function using stings to modify
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => 'Word is: ' + word);

// testing map function using numbers to modify
const numArr = [1, 2, 3, 4, 5];
const results3 = map(numArr, number => number + 1);
const results4 = map(numArr, number => number * 5);

// testing map using numbers & words for boolean results
const results5 = map(numArr, number => number % 2 === 0);
const results6 = map(words, word => word === "tom");

// assertArraysEqual tests
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results2, ['Word is: ground', 'Word is: control', 'Word is: to', 'Word is: major', 'Word is: tom']);
// assertArraysEqual(results3, [2, 3, 4, 5, 6]);
// assertArraysEqual(results4, [5, 10, 15, 20, 25]);
// assertArraysEqual(results5, [false, true, false, true, false]);
// assertArraysEqual(results6, [false, false, false, false, true]);

// chai tests
describe("#map", () => {
  it("Should return ['g', 'c', 't', 'm', 't'] when mapping word array with callback" , () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });
  it("Should return ['Word is: ground', 'Word is: control', 'Word is: to', 'Word is: major', 'Word is: tom'] when mapping word array with callback", () => {
    assert.deepEqual(results2, ['Word is: ground', 'Word is: control', 'Word is: to', 'Word is: major', 'Word is: tom']);
  });
  it("Should return [2, 3, 4, 5, 6] when mapping number array with callback", () => {
    assert.deepEqual(results3, [2, 3, 4, 5, 6]);
  });
  it("Should return [5, 10, 15, 20, 25] when mapping number array with callback", () => {
    assert.deepEqual(results4, [5, 10, 15, 20, 25]);
  });
  it("Should return [false, true, false, true, false] when mapping number array with callback", () => {
    assert.deepEqual(results5, [false, true, false, true, false]);
  });
  it("Should return [false, false, false, false, true] when mapping word array with callback", () => {
    assert.deepEqual(results6, [false, false, false, false, true]);
  });
});
