
const testArr = [4, 23, 7, 39, 19, 0, 9, 14];

/////// New Answer
function min(numbers) {
  return Math.min(...numbers);
}

min(testArr)

////// Original Answer
function min(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  })
  return numbers[0];
}