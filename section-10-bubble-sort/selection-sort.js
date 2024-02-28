/**
 * Sorts an array of numbers in ascending order using the selection sort algorithm.
 * This algorithm iterates through the array, repeatedly selecting the smallest unsorted
 * element and swapping it with the element at the beginning of the unsorted section,
 * gradually building up the sorted section at the array's start.
 *
 * @param {number[]} array - The array of numbers to be sorted.
 * @returns {number[]} The sorted array.
 */

function selectionSort(array) {
  // Swaps elements in the array at given indices
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  // Iterate over the array to sort it
  for (let startIndex = 0; startIndex < array.length - 1; startIndex++) {
    // Assume the first unsorted element is the smallest
    let minValIdx = startIndex;

    // Compare this element to the rest of the unsorted segment of the array to find the true smallest
    for (
      let itemIndex = startIndex + 1;
      itemIndex < array.length;
      itemIndex++
    ) {
      // If a new smallest value is found, update minValIdx with its index
      if (array[minValIdx] > array[itemIndex]) minValIdx = itemIndex;
    }

    // If the current element isn't already the smallest, swap it with the smallest found
    if (startIndex !== minValIdx) swap(array, startIndex, minValIdx);
  }

  return array;
}

// Test cases
console.log('1: ', selectionSort([-3, -1, 5, 0])); // [-3, -1, 0, 5]
console.log('2: ', selectionSort([7, 4, 5, 2])); // [2, 4, 5, 7]
console.log('3: ', selectionSort([1])); // [1]
console.log('4: ', selectionSort([])); // []
console.log('5: ', selectionSort([9, 1, 6, 8, 4, 3, 2, 0])); // [0, 1, 2, 3, 4, 6, 8, 9]
