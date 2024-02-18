/**
 * Challenge: Sliding Window - maxSubarraySum
 *
 * Description:
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds
 * the maximum sum of a subarray with the length of the number passed to the function.
 * Note that a subarray must consist of consecutive elements from the original array. In the first
 * example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 */

function maxSubarraySum(nums, subarrayLength) {
  if (subarrayLength > nums.length) return null;

  let maxSum = -Infinity; // Ensures any sum is larger
  for (let i = 0; i < nums.length - subarrayLength + 1; i++) {
    let currSum = 0;
    for (let j = 0; j < subarrayLength; j++) {
      currSum += nums[i + j];
    }

    maxSum = Math.max(maxSum, currSum);
    // Alternative approach using if statement:
    // if (currentSum > maxSum) maxSum = currentSum;
  }

  return maxSum;
}

// Test cases
console.log('1: ', maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log('2: ', maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log('3: ', maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log('4: ', maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log('5: ', maxSubarraySum([2, 3], 3)); // null
