// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

const arr1 = [1, 2];
const arr2 = [1, 2, 3, 4, 5, 6];
const arr3 = [1, 2, 3, 4, 5, 6, 7];

describe("#middle", () => {
  it("returns [1, 2] from [1, 2]", () => {
    assert.deepEqual(middle(arr1), [1, 2]);
  });
  it("returns [1, 2, 5, 6] from [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle(arr2), [1, 2, 5, 6]);
  });
  it("returns [1, 2, 3, 5, 6, 7] from [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle(arr3), [1, 2, 3, 5, 6, 7]);
  });
});