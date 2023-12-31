// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

const arr1 = [1, 2];
const arr2 = [1, 2, 3, 4, 5, 6];
const arr3 = [1, 2, 3, 4, 5, 6, 7];

// assertArraysEqual tests
// assertArraysEqual(middle(arr1), [1, 2]);
// assertArraysEqual(middle(arr2), [1, 2, 5, 6]);
// assertArraysEqual(middle(arr3), [1, 2, 3, 5, 6, 7]);

// chai tests
describe("#middle", () => {
  it("returns [] from [1, 2]", () => {
    assert.deepEqual(middle(arr1), []);
  });
  it("returns [3, 4] from [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle(arr2), [3, 4]);
  });
  it("returns [4] from [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle(arr3), [4]);
  });
});