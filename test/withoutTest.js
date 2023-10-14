// const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');
const assert = require('chai').assert;

const words = ["hello", "world", "lighthouse"];
const numbers = [1, 2, 3, 4, 5, 2, 2, 3, 4, 1, 8, 1];
const withoutWords = without(words, ["lighthouse"]);
const withoutNumbers = without(numbers, [2, 4]);

// assertArraysEqual tests
// assertArraysEqual(withoutWords, ["hello", "world"]);
// assertArraysEqual(withoutNumbers, [1, 3, 5, 3, 1, 8, 1])
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// assertArraysEqual(numbers, [1, 2, 3, 4, 5, 2, 2, 3, 4, 1, 8, 1]);

// chai tests
describe("#without", () => {
  it("returns ['hello' 'world'] from ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(withoutWords, ["hello", "world"]);
  });
  it("confirms original array is unchanged", () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  it("returns [1, 3, 5, 3, 1, 8, 1] from [1, 2, 3, 4, 5, 2, 2, 3, 4, 1, 8, 1]", () => {
    assert.deepEqual(withoutNumbers, [1, 3, 5, 3, 1, 8, 1]);
  });
  it("confirms original array is unchanged", () => {
    assert.deepEqual(numbers, [1, 2, 3, 4, 5, 2, 2, 3, 4, 1, 8, 1]);
  });
});