let conditionalSum = function (values, condition) {
  if (values.length) {
    return condition === 'odd' ? values.filter(num => num % 2 !== 0).reduce((a, b) => a + b) : values.filter(num => num % 2 === 0).reduce((a, b) => a + b);
  } else {
    return 0;
  }
};


// switch (condition) {
//   case "odd": return values.filter(num => num % 2 !== 0);
//   case "even": return values.filter(num => num % 2 !== 0);;
// }

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));


///// attempt 2

// let conditionalSum = function (values, condition) {
//   return condition.length !== 0 ? condition === 'odd' ? values.filter(num => num % 2 !== 0).reduce((a, b) => a + b) : values.filter(num => num % 2 === 0).reduce((a, b) => a + b) : 0;
// };
