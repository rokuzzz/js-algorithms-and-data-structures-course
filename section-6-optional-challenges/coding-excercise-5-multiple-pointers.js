function averagePair(sortedIntegers, targetAvg) {
  // Edge case: An average cannot be formed from an empty array
  if (sortedIntegers.length == 0) return false;

  let leftPointer = 0;
  let rightPointer = sortedIntegers.length - 1;

  // Use a two-pointer approach to find if any pair averages to the targetAvg
  while (leftPointer < rightPointer) {
    let currentAvg =
      (sortedIntegers[leftPointer] + sortedIntegers[rightPointer]) / 2;

    if (currentAvg === targetAvg) {
      return true;
    } else if (currentAvg > targetAvg) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return false;
}

console.log('1: ', averagePair([1, 2, 3], 2.5)); // true
console.log('2: ', averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log('3: ', averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log('4: ', averagePair([], 4)); // false
