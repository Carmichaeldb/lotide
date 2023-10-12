const tail = require('../tail');
const assert = require('chai').assert;

//testing tail works properly by ensuring the original array is not modified.
const words = ["Yo Yo", "Lighthouse", "Labs"];
const numbers = [1, 2, 3];
// assertEqual(words.length, 3);
describe("#tail", () => {
  it("Should return ['Lighthouse', 'Labs'] from ['Yo Yo', 'Lighthouse', 'labs']", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  it("Should return [2, 3] from [1, 2, 3]", () => {
    assert.deepEqual(tail(numbers), [2, 3]);
  });
});