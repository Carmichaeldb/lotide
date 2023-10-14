// const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
// assertEqual tests
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined); //does not exist in array
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined); //told not to search for this string

// Chai tests
describe("#countOnly", () => {
  it("returns 1 for searching string 'Jason'", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns undefined for searching string 'Karima'", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it("returns 2 for searching string 'Fang'", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("returns undefined for false to search 'Agouhanna'", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
});