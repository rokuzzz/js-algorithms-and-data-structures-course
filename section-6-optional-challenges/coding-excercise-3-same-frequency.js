/**
 * Challenge: Frequency Counter - sameFrequency
 *
 * Description:
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers
 * have the same frequency of digits.
 */

function sameFrequency(int1, int2) {
  const str1 = int1.toString();
  const str2 = int2.toString();

  // Edge case: If the lengths differ, the frequency of digits cannot match
  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Count the frequency of each digit in both numbers
  for (let digit of str1) {
    frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
  }
  for (let digit of str2) {
    frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
  }

  // Compare the frequency of each digit in both numbers
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(12, 21));
