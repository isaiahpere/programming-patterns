/**
 * Creating pointers or values that correspond to an index or position and move towards
 * the beginning, end or middle on a certain condition
 *
 * Very effecient for solving problems with minimal space complexity as well.
 */

/**
 * Example #1
 *
 * Write a fucntion calles sumZero which accepts a "sorted" array of integers. The function should find the "First"
 * pair where the sum is 0. Return an array that includes both the values that sum to zero or undefined if a pair does not exist.
 */

//NAIVE SOLUTION
// Time Complexity: O(N^2)
// Space Complexity: O(1)
const sumZeroNaive = (sortedArr) => {
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[i] + sortedArr[j] === 0) {
        return [sortedArr[i], sortedArr[j]];
      }
    }
  }
};

console.log(sumZeroNaive([-3, -2, -1, 0, 1, 2, 3]));
