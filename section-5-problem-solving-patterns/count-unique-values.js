function countUniqueValues(sortedIntArray) {
  // Edge case: if the array is empty, there are no unique values
  if (sortedIntArray.length === 0) return 0;

  let point1 = 0; // This pointer will move only when a new unique value is found

  for (let point2 = 1; point2 < sortedIntArray.length; point2++) {
    if (sortedIntArray[point1] !== sortedIntArray[point2]) {
      point1++;
      sortedIntArray[point1] = sortedIntArray[point2];
    }
  }

  return point1 + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 10]));
