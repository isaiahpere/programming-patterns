/**
 * Problem: Use the divide & conquer technique to find the index of a value in a sorted array
 *
 * ie. Value = 15, Array=[1,3,5,1,15,4,8]  ===> (4)
 *
 */

//SOLUTION;
// Time Complexity: O(log N)
// Space Complexity: O(1)
const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let currentEl = arr[middle];
    // console.log(`left(${left}), right(${right}) - middle(${middle})`);
    if (currentEl < val) {
      left = middle + 1;
    } else if (currentEl > val) {
      right = middle - 1;
    } else return middle;
  }
  return -1;
};

// Test Cases
console.log(binarySearch([1, 2, 5, 6, 8, 9], 9));
console.log(binarySearch([1, 2, 5, 6, 8, 9], 34));
console.log(binarySearch([1, 2, 5, 6, 8, 9], 1));
console.log(binarySearch([1, 2, 5, 6, 8, 9], 5));
