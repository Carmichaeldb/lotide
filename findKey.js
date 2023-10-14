/**
 * function that returns key similar to findKeyByValue
 * uses callback function to determine key
 * returns object's key
 */

// function parameters input of objects and callback logic
// will need to loop through object
// returns object's key as determined by callback
const findKey = function(objects, callback) {
  for (let key in objects) { //liteated over objects
    if (callback(objects[key])) { //uses callback to match key in object
      // console.log(typeof(key));
      return key; //returns key if match found
    }
  }
};

module.exports = findKey;