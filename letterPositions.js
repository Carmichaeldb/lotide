/**
 * function input string
 * return object with keys of string letters
 * object properties are array of string letter indexes
 */

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { //iterate over string
    if (sentence[i] === " ") {
      //do nothing if whitespace
    } else if (results[sentence[i]]) { //if result object has key already
      results[sentence[i]].push(i); //push index into result object in key of letters array property
    } else {
      results[sentence[i]] = [i]; //create key of letter with property of array of index position
    }
  }
  return results; //return results object
};

module.exports = letterPositions;