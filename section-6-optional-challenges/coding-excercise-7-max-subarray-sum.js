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
