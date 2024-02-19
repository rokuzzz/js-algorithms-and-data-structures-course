/**
 * Challenge: reverse
 *
 * Description:
 * Write a recursive function called reverse which accepts a string and returns a new string in
 * reverse.
 */

function reverse(str) {
  if (str.length === 1) return str;

  const lastChar = str[str.length - 1];

  return lastChar + reverse(str.slice(0, -1));
}

// Test cases
console.log('1: ', reverse('awesome')); // 'emosewa'
console.log('2: ', reverse('rithmschool')); // 'loohcsmhtir'
