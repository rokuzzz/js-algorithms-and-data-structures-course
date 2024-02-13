function isSubsequence(subsequence, sequence) {
  let subsequenceIndex = 0;

  for (
    let sequenceIndex = 0;
    sequenceIndex < sequence.length;
    sequenceIndex++
  ) {
    if (subsequence[subsequenceIndex] == sequence[sequenceIndex]) {
      subsequenceIndex++;
      if (subsequenceIndex === subsequence.length) return true;
    }
  }

  return false;
}

// Test cases
console.log('1: ', isSubsequence('hello', 'hello world')); // true
console.log('2: ', isSubsequence('sing', 'sting')); // true
console.log('3: ', isSubsequence('abc', 'abracadabra')); // true
console.log('4: ', isSubsequence('abc', 'acb')); // false (order matters)
