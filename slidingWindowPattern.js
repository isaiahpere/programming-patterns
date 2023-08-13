// Problem: Write a function to find the largest sum of subset of numbers in array
// the function takes an array and the number of subset number quantity
// [1, 1, 1, 2, 2, 3, 8], 3 => [2,3,8] === 13

/**
 *
 * @param {Number} arr array of valid numbers
 * @param {Number} num amount elements in subset
 * @returns the subset maxSum
 */
const arayLargestSubsetSum = (arr, num) => {
  let maxSum = 0;
  let tempMaxSum = 0;

  // add first set of num values and make that initial maxSum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // assume first subset is maxSum
  tempMaxSum = maxSum;

  // slide window until end array is reached
  for (let i = num; i < arr.length; i++) {
    tempMaxSum = tempMaxSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempMaxSum, maxSum);
  }

  return maxSum;
};
console.log(
  arayLargestSubsetSum([1, 2, 3, 4, 5, 6, 4, 12, 1, 5, 6, 2, 5, 2, 5], 3)
);
