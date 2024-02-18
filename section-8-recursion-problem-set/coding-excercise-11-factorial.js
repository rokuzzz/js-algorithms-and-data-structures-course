function factorial(num) {
  if (num == 0) return 1;
  return num * factorial(num - 1);
}

// Test cases
console.log('1: ', factorial(1)); // 1
console.log('2: ', factorial(2)); // 2
console.log('3: ', factorial(4)); // 24
console.log('4: ', factorial(7)); // 5040
