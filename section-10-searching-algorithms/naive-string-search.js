/**
 * Performs a naive search for a target substring within a given string and
 * counts how many times the target appears.
 * 
 * @param {string} string - The string to search within.
 * @param {string} target - The substring to search for.
 * @returns {number} The number of times the target substring appears in the string.
 */

function naiveStringSearch(string, target) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (string[i + j] !== target[j]) {
        break;
      } else if (j === target.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log('1: ', naiveStringSearch('lorie loled', 'l')); // 3
console.log('2: ', naiveStringSearch('lorie loled', 'lo')); // 2
console.log('3: ', naiveStringSearch('lorie loled', 'lol')); // 1
