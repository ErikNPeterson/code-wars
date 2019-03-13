/////// first attempt

let sumLargestNumbers = function (data) {
  let sortedArr = data.sort((a, b) => a - b);
  return sortedArr[data.length - 1] + sortedArr[data.length - 2];
};

/////// second attempt ONE LINER

let sumLargestNumbers = function (data) {
  return data.sort((a, b) => a - b)[data.length - 1] + data.sort((a, b) => a - b)[data.length - 2];
};



console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));