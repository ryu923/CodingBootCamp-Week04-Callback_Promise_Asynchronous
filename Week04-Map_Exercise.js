// EXERCISE
// Implement the map function.
// It takes in an array and a callback function. It should return a new array where each item has had the callback applied to it (preserving the order).
// Do not use the built-in .map() method. You may use a for loop.

var newArray = new Array();

const map = (arr, callback) => {
  // Write your code here!
    for(var i = 0; i < arr.length; i++)
    {
        newArray[i] = callback(arr[i]);
    }
};

// TESTS
// All of these should print "true" to verify that the map function is working correctly. Feel free to add your own.
console.log(areArraysEqual(
  map([1, 2, 3], x => x + 1),
  [2, 3, 4]
));
console.log(areArraysEqual(
  map([1, 2, 3], x => x * 2),
  [2, 4, 6]
));
console.log(areArraysEqual(
  map(['Arbiter', 'Boss', 'Concierge'], x => x.length),
  [7, 4, 9]
));
console.log(areArraysEqual(
  map(['Dead Cells', 1, 0, undefined, null], x => Boolean(x)),
  [true, true, false, false, false]
));
console.log(areArraysEqual(
  map([], x => x),
  []
));

function areArraysEqual(xs, ys) {
  if (!(Array.isArray(xs) && Array.isArray(ys)) || xs.length !== ys.length) {
    return false;
  }
  return xs.every((x, i) => JSON.stringify(x) === JSON.stringify(ys[i]));
}