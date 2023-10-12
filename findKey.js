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

module.exports = findKey;