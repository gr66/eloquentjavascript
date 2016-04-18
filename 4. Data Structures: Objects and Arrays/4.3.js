// A list

// Write a function arrayToList that builds up a data structure like the previous
// one when given [1, 2, 3] as argument, and write a listToArray function that
// produces an array from a list. Also write the helper functions prepend, which
// takes an element and a list and creates a new list that adds the element to the
// front of the input list, and nth, which takes a list and a number and returns
// the element at the given position in the list, or undefined when there is no
// such element.

// Your code here.
//not recursive version of nth.
// Your code here.
function arrayToList(array) {
  var list = {value: array[0], rest: null};
  for (var i = 1; i < array.length; i++) {
    var newCell = {value: array[i], rest: null};
    var lastCell = list;

    while (lastCell.rest != null) {
      lastCell = lastCell.rest;
    }
    lastCell.rest = newCell;
  }
  return list;
}

function listToArray(list) {
  var nextCell = {value: list.value, rest: list.rest};
  var array = [];

  array.push(nextCell.value);
  while (nextCell.rest != null) {
    nextCell = nextCell.rest;
    array.push(nextCell.value);
  }
  return array;
}

function prepend(value, rest = null) {
  var cell = {value: value, rest: rest};
  return cell;
}

function nth(list, index) {
  firstCell = {value: list.value, rest: list.rest};
  for (var i = 1; i <= index; i++) {
    firstCell = firstCell.rest;
    if (firstCell == null)
      return undefined;
  }
  return firstCell.value;
}

//recursive version of nth.
