/**
 * Challenge: Frequency Counter - validAnagram
 *
 * Description:
 * Given two strings, write a function to determine if the second string is an anagram of the
 * first. An anagram is a word, phrase, or name formed by rearranging the letters of another,
 * such as cinema, formed from iceman.
 */

function validAnagram(firstString, secondString) {
  // Check if both strings have the same length
  if (firstString.length !== secondString.length) {
    return false;
  }

  // Initialize frequency counters for character comparison
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Count the frequency of each character in the both strings
  for (let char of firstString) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of secondString) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // Compare frequency counts of characters between the two strings
  for (let key in frequencyCounter1) {
    // Ensure the character exists in the second string
    if (!(key in frequencyCounter2)) {
      return false;
    }
    // Ensure the character frequency matches in both strings
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('cinema', 'iceman'));
