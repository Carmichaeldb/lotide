const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

const testObjRecur1 = {1: "b", 2: 4, 3: [1, 2], 4: {1: 2, 2: {3: 6}}};
const testObjRecur2 = {1: "c", 2: 4, 3: [1, 2], 4: {1: 1, 2: {3: 7}}};
assertEqual(eqObjects(testObjRecur1, testObjRecur2), true);
// assertEqual tests
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

// Chai tests
// describe("#eqObjects", () => {
//   it("returns true for comparing shirtObject and anotherShirtObject", () => {
//     assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
//   });
//   it("returns false for comparing shirtObject and longSleeveShirtObject", () => {
//     assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
//   });
//   it("returns true for comparing multiColorShirtObject and anotherMultiColorShirtObject", () => {
//     assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
//   });
//   it("returns false for comparing multiColorShirtObject and longSleeveMultiColorShirtObject", () => {
//     assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
//   });
// });