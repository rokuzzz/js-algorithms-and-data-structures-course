/**
 * Challenge: recursiveRange
 *
 * Description:
 * Write a function called recursiveRange which accepts a number and adds up all the numbers
 * from 0 to the number passed to the function
 */

function recursiveRange(num) {
  if (num == 1) return 1;
  return num + recursiveRange(num - 1);
}

// Test cases
console.log('1: ', recursiveRange(6)); // 21
console.log('2: ', recursiveRange(10)); // 55
