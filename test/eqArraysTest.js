// const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

// assertEqual tests
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true if arrays match
// assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false); // => false if arrays don't match

// chai tests
describe("#eqArrays", () => {
  it("Should return true from eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("Should return false from eqArrays([1, 2, 3], [1, 3, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 3, 3]), false);
  });
});