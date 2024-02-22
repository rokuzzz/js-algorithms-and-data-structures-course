/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * Bubble sort works by repeatedly swapping adjacent elements if they are in the wrong order.
 *
 * @param {number[]} array - The array of numbers to be sorted.
 * @return {number[]} The sorted array.
 */

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(array) {
  let noSwaps;

  // Perform passes over the array to sort it
  for (let round = array.length - 1; round > 0; round--) {
    noSwaps = true; // Assume no swaps will occur in this round

    // Compare each pair of adjacent elements and swap if out of order
    for (let currentIndex = 0; currentIndex < i; j++) {
      if (array[currentIndex] > array[currentIndex + 1]) {
        swap(array, currentIndex, currentIndex + 1);
        noSwaps = false; // A swap occurred
      }
    }

    // If no swaps occurred during this pass, the array is sorted, and we can exit early
    if (noSwaps) break;
  }

  return array;
}

// Test cases
console.log('1: ', bubbleSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]
console.log(
  '2: ',
  bubbleSort([65, 37, 77, 68, 33, 80, 53, 90, 69, 69, 98, 47, 40, 41])
); // [33, 37, 40, 41, 47, 53, 65, 68, 69, 69, 77, 80, 90, 98]
console.log('3: ', bubbleSort([2, -25, 43, 50, 19, -15, -47])); // [-47, -25, -15, 2, 19, 43, 50]
