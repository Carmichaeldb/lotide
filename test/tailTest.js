const assertEqual = require('../assertEqual');
const tail = require('../tail');

//testing tail works properly by ensuring the original array is not modified.
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);