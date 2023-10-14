// const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

const result1 = letterPositions("lighthouse in the house");

// assertArraysEqual tests
// assertArraysEqual(result1["h"],[ 3, 5, 15, 18 ]);
// assertArraysEqual(result1["o"],[ 6, 19 ]);
// assertArraysEqual(result1["g"],[ 2 ]);

// chai tests
describe("#letterPositions", () => {
  it("Should return [3, 5, 15, 18] when searching positions of 'h' within string 'lighthouse in the house'" , () => {
    assert.deepEqual(result1["h"],[ 3, 5, 15, 18 ]);
  });
  it("Should return [9, 19] when searching positions of 'o' within string 'lighthouse in the house'", () => {
    assert.deepEqual(result1["o"],[ 6, 19 ]);
  });
  it("Should return [2] when searching positions of 'g' within string 'lighthouse in the house'", () => {
    assert.deepEqual(result1["g"],[ 2 ]);
  });
});