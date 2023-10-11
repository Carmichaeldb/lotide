const head = require('../head');
const assertEqual = require('../assertEqual');

//testing head function is returning first element in array
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

