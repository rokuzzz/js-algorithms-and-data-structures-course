/**
 * Challenge: Linear Search Exercise
 *
 * Description:
 * Write a function called linearSearch which accepts an array and a value, and returns the index
 * at which the value exists. If the value does not exist in the array, return -1. Note: Don't use
 * indexOf to implement this function!
 */

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

// Test cases
console.log('1: ', linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log('2: ', linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log('3: ', linearSearch([100], 100)); // 0
console.log('4: ', linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log('5: ', linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log('6: ', linearSearch([100], 200)); // -1
