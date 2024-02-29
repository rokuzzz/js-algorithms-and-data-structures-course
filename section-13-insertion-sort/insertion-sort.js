/**
 * Sorts an array of numbers in ascending order using Selection Sort. This method selects
 * the minimum element from the unsorted section and swaps it with the element at the start
 * of this section, gradually increasing the sorted portion of the array.
 *
 * @param {number[]} array - The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */

// function insertionSort(array) {
//   for (var i = 1; i < array.length; i++) {
//     let currentVal = array[i];

//     for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
//       array[j + 1] = array[j];
//     }
//     array[j + 1] = currentVal;
//   }

//   return array;
// }

function insertionSort(array) {
  for (let currentIndex = 1; currentIndex < array.length; currentIndex++) {
    let currentVal = array[currentIndex];
    let position;

    for (
      position = currentIndex - 1;
      position >= 0 && array[position] > currentVal;
      position--
    ) {
      array[position + 1] = array[position];
    }

    array[position + 1] = currentVal;
  }

  return array;
}

// Test cases
console.log('1: ', insertionSort([-3, -1, 5, 0])); // [-3, -1, 0, 5]
console.log('2: ', insertionSort([7, 4, 5, 2])); // [2, 4, 5, 7]
console.log('3: ', insertionSort([1])); // [1]
console.log('4: ', insertionSort([])); // []
console.log('5: ', insertionSort([9, 1, 6, 8, 4, 3, 2, 0])); // [0, 1, 2, 3, 4, 6, 8, 9]
