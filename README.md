# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @carmichaeldb/lotide`

**Require it:**

`const _ = require('@carmichaeldb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Takes two arrays and runs eqArrays to verify if they match. Returns a console.log message.
* `assertEqual(...)`: Takes two variables and verifies if they match. Returns a console.log message.
* `assertObjectsEqual(...)`: Takes two objects and runs eqObjects to verify if they match. Returns a console.log message.
* `countLetters(...)`: Counts the number of each letters in a string. Returns an object of letters with their number of occurances.
* `countOnly(...)`: Takes array of strings and object of search items. Returns object of search items and their number of occurances.
* `eqArrays(...)`: Takes two arrays and compares them for a perfect match with a true or false return.
* `eqObjects(...)`: Takes two objects and compares them as matching with a true or false return.
* `findKey(...)`: Takes object and callback to determine key in object. Returns the string of the key.
* `findKeyByValue(...)`: Takes object and value and searches object for key with matching value. Returns string of the key.
* `flatten(...)`: Takes array and flattens any nested arrays. Returns array.
* `head(...)`: Takes array and returns first index.
* `letterPositions(...)`: Takes string and returns object of each string letter as key and string index as value.
* `map(...)`: Takes array and callback function. Returns array from callback results.
* `middle(...)`: Takes array and returns array of items in the middle of index.
* `tail(...)`: Takes array and returns array minus first index of input array.
* `takeUntil(...)`: Takes array and callback. Returns array of values until callback returns true.
* `without(...)`: Takes array and values to remove from array. Returns new modified array.
