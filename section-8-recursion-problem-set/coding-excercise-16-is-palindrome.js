/**
 * Challenge: isPalindrome
 *
 * Description:
 * Write a recursive function called isPalindrome which returns true if the string passed to it is
 * a palindrome (reads the same forward and backward). Otherwise it returns false.
 */

// function isPalindrome(word) {
//   function reverseStr(str) {
//     if (str.length <= 1) return str;

//     return (copy = str[str.length - 1] + reverseStr(str.slice(0, -1)));
//   }

//   const reversed = reverseStr(word);

//   return word === reversed;
// }

// Without helper function
function isPalindrome(word) {
  if (word.length <= 1) return true;

  if (word[0] === word[word.length - 1]) {
    return isPalindrome(word.slice(1, -1));
  } else {
    return false;
  }
}

// Test cases
console.log('1: ', isPalindrome('awesome')); // false
console.log('2: ', isPalindrome('foobar')); // false
console.log('3: ', isPalindrome('tacocat')); // true
console.log('4: ', isPalindrome('amanaplanacanalpanama')); // true
console.log('5: ', isPalindrome('amanaplanacanalpandemonium')); // false
