// Flattening

// Use the reduce method in combination with the concat method to “flatten” an
// array of arrays into a single array that has all the elements of the input
// arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
var a = arrays.reduce(function(a, b){
     return a.concat(b);
});
console.log(a);
// → [1, 2, 3, 4, 5, 6]
