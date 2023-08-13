/**
 * Example #1
 *
 * Write a function that takes a sorted array of numbers and returns an array unique
 * values from the sorted array.
 *
 * ie. [1,1,2,3,3] => [1,2,3]
 * ie. [6,8,9] => []
 */

//SOLUTION;
// Time Complexity: O(N)
// Space Complexity: O(1)
const getUniqueValues = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr.slice(0, i + 1);
};

console.log(getUniqueValues([1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 5])); // => [1, 2, 3, 4, 5]
console.log(getUniqueValues([])); // => []
