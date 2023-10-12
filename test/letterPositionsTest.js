const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

const result1 = letterPositions("lighthouse in the house");
assertArraysEqual(result1["h"],[ 3, 5, 15, 18 ]);
assertArraysEqual(result1["o"],[ 6, 19 ]);
assertArraysEqual(result1["g"],[ 2 ]);