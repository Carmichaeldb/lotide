/**
 * create function that returns key similar to findKeyByValue
 * uses callback function to determine key
 * returns object's key
 */

// function parameters input of objects and callback logic
// will need to loop through object
// returns object's key as determined by callback
const findKey = function(objects, callback) {
  for (let key in objects) {
    if (callback(objects[key])) {
      console.log(typeof(key));
      return key;
    }
  }
};

//Compares two values if they are equal or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed:  ${actual} !== ${expected}`);
  }
};

const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const object2 = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e"
};

const object3 = {
  "dog": "fur",
  "raven": "feathers",
  "snake": "scales"
};

const object4 = {
  12: 21,
  34: 43,
  56: 65,
  78: 87
};

const object5 = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4
};

assertEqual(findKey(object1, x => x.stars === 2), "noma");
assertEqual(findKey(object2, x => x === "c"), "3");
assertEqual(findKey(object3, x => x === "feathers"), "raven");
assertEqual(findKey(object4, x => x === 65), 56); //fails
assertEqual(findKey(object4, x => x === 65), "56"); //succeeds keys are only strings or symbols
assertEqual(findKey(object5, x => x % 2 === 0), "b");

//did several different tests as I was confused why test case looking for number failed
//comparing a number to a returned string of that number failed test case
//forgot that object keys are only strings and symbols so numbers are turned into strings