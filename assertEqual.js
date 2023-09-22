//Compares two values if they are equal or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
  }
};

//testing assertEqual function is functioning properly
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Labs", "Labs");
assertEqual(1, 2);
assertEqual(1, 1);