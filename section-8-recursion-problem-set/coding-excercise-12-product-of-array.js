/**
 * Challenge: productOfArray
 *
 * Description:
 * Write a function called productOfArray which takes in an array of numbers and returns the
 * product of them all.
 */

function productOfArray(numberArray) {
  if (numberArray.length == 0) return 1;
  return numberArray[0] * productOfArray(numberArray.slice(1));
}

// Test cases
console.log('1: ', productOfArray([1, 2, 3])); // 6
console.log('2: ', productOfArray([1, 2, 3, 10])); // 60
