// const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');
const assert = require('chai').assert;

const result1 = (countLetters("lighthouse in the house"));

// assertEqual tests
// assertEqual(result1["h"], 4);
// assertEqual(result1["o"], 2);
// assertEqual(result1["g"], 1);

// Chai tests
describe("#countLetters", () => {
  it("returns 4 for searching letter 'h'", () => {
    assert.strictEqual(result1["h"], 4);
  });
  it("returns 2 for 'o'", () => {
    assert.strictEqual(result1["o"], 2);
  });
  it("returns 1 for 'g'", () => {
    assert.strictEqual(result1["g"], 1);
  });
});