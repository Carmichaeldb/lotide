const assertObjectsEqual = require('../assertObjectsEqual');

const testObj = {1: "a", 2: "b", 3: 54, 4: [1, 2, 3]};
const testObjPass = {1: "a", 2: "b", 3: 54, 4: [1, 2, 3]};
const testObjFail = {1: "a", 2: "z", 3: 54, 4: [1, 2, 3]};
assertObjectsEqual(testObj, testObjPass);
assertObjectsEqual(testObj, testObjFail);