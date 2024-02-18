/**
 * Challenge: Frequency Counter / Multiple Pointers - areThereDuplicates
 *
 * Description:
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in.
 */

function areThereDuplicates(...args) {
  const frequencyCounter = {};

  for (let arg of args) {
    frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
    if (frequencyCounter[arg] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates('a', 'b', 'b'));
