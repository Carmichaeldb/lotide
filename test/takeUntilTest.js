// const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// assertArraysEqual tests
// assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
// assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

// chai tests
describe("#takeUntil", () => {
  it("Should return [1, 2, 5, 7, 2] from data1 with callback x => x < 0", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("Should return ['I've', 'been', 'to', 'Hollywood'] from data2 with callback x => x === ','", () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
  });
});