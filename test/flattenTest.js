// const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');
const assert = require('chai').assert;

const arr = [1, 2, [3, 4], 5, [6]];
// assertArraysEqual test
// assertArraysEqual(flatten(arr), [1, 2, 3, 4, 5, 6]);

// chai test
describe("#flatten", () => {
  it("Should return [1, 2, 3, 4, 5, 6] from [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5, 6]);
  });
});