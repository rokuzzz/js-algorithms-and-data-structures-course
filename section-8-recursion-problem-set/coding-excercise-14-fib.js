/**
 * Challenge: fib
 *
 * Description:
 * Write a recursive function called fib which accepts a number and returns the nth number in the
 * Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1,
 * 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the
 * sum of the previous two numbers.
 */

function fib(n) {
  const fibNumbers = [1, 1]; // Initialize the Fibonacci sequence with the first two numbers

  function generateFib(sequence) {
    const endIndex = sequence.length - 1;

    if (sequence.length == n) {
      return;
    } else {
      sequence.push(sequence[endIndex] + sequence[endIndex - 1]);
      generateFib(sequence);
    }
  }

  generateFib(fibNumbers);

  return fibNumbers[fibNumbers.length - 1];
}

// Test cases
console.log('1: ', fib(4)); // 3
console.log('2: ', fib(10)); // 55
console.log('3: ', fib(28)); // 317811
console.log('4: ', fib(35)); // 9227465
