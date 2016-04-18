// Reversing an array

// Arrays have a method reverse, which changes the array by inverting the order
// in which its elements appear. For this exercise, write two functions,
// reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
// as argument and produces a new array that has the same elements in the inverse
// order. The second, reverseArrayInPlace, does what the reverse method does: it
// modifies the array given as argument in order to reverse its elements. Neither
// may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the
// previous chapter, which variant do you expect to be useful in more situations?
// Which one is more efficient?

// Your code here.
function reverseArray(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  var i = 0;
  var j = array.length - 1;
  while (i < j) {
    var t = array[i];
    array[i] = array[j];
    array[j] = t;
    i++;
    j--;
  }
  return array;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
