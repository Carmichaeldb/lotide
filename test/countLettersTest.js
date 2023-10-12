const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const result1 = (countLetters("lighthouse in the house"));

assertEqual(result1["h"], 4);
assertEqual(result1["o"], 2);
assertEqual(result1["g"], 1);