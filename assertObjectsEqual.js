const eqObjects = require('./eqObjects');

//takes two objects and if the objects match using eqObjects it passes, if eqObjects returns false it fails.
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) { //checks results from eqObjects
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;