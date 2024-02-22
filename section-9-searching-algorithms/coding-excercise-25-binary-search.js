/**
 * Challenge: Binary Search Exercise
 *
 * Description:
 * Write a function called binarySearch which accepts a sorted array and a value and returns the
 * index at which the value exists. Otherwise, return -1.
 */

function binarySearch(sortedArray, target) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (sortedArray[middleIndex] === target) {
      return middleIndex;
    } else if (sortedArray[middleIndex] > target) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }

  return -1;
}

// Test cases
console.log('1: ', binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log('2: ', binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log('3: ', binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log('4: ', binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  '5: ',
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  '6: ',
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  '7: ',
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
