module.exports = function longestConsecutiveLength(array) {
  let anotherArray = [];
  array.forEach(element => {
    anotherArray[element] = 1;
  });

  let sum = 0, max = 0;
  for (let i = 0; i < anotherArray.length; i++) {
    let val = anotherArray[i];
    if (val) {
      sum++;
    } else {
      if (sum > max) {
        max = sum;
      }
      sum = 0;
    }
  }

  return sum > max ? sum : max;
}
