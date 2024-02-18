function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}

// Test cases
console.log('1: ', power(2, 0)); // 1
console.log('2: ', power(2, 2)); // 4
console.log('3: ', power(2, 4)); // 16
