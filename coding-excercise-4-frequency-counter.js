function areThereDuplicates(...args) {
  const frequencyCounter = [];

  for (let arg of args) {
    frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
    if (frequencyCounter[arg] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates('a', 'b', 'b'));
