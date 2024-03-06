export function mergeSortedArrays(firstArray, secondArray) {
  const mergedResult = [];
  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < firstArray.length && secondIndex < secondArray.length) {
    if (firstArray[firstIndex] < secondArray[secondIndex]) {
      mergedResult.push(firstArray[firstIndex++]);
    } else {
      mergedResult.push(secondArray[secondIndex++]);
    }
  }

  return mergedResult.concat(
    firstArray.slice(firstIndex),
    secondArray.slice(secondIndex)
  );
}

// Test cases
console.log('1: ', mergeSortedArrays([3, 4, 6], [1, 2, 5, 7])); // [1, 2, 3, 4, 5, 6, 7]
console.log('2: ', mergeSortedArrays([-2, 0, 2], [-3, 1, 3])); // [-3, -2, 0, 1, 2, 3]
console.log('3: ', mergeSortedArrays([10, 20], [15, 25, 30])); // [10, 15, 20, 25, 30]
console.log('4: ', mergeSortedArrays([], [1, 2, 3])); // [1, 2, 3]
console.log('5: ', mergeSortedArrays([5, 5, 5, 5], [5, 5])); // [5, 5, 5, 5, 5, 5]
