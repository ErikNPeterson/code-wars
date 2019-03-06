function solution(number) {

  let sumOfValues = [];
  // we want to have the itterator multiple to 3 and 5 //#endregi
  // if this number is greater than or equal to "number" do not push
  // once both numbers are greater than or equal to number stop the loop
  // a
  for (i = 1; i < number; i++) {
    (i * 3) < number ? sum.push(i * 3) : null;
    (i * 5) < number ? sum.push(i * 3) : null;
    if ((i * 3) >= number && (i * 5) >= number) {
      break;
    }

    function sum(acc, val) {
      return acc + val;
    }

    return sumOfValues.reduce(sum);
  }
}
// need to calculate multiples of 3 & 5 up to the number
// we can push each number that is lower than number to a new array
// add all of the numbers in the array
// we'll use the reduce method for this.


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// attempt 1


function solution(number) {

  let sumOfValues = [];

  for (i = 1; i < number; i++) {
    if ((i * 3) >= number && (i * 5) > number) {
      break;
    }
    (i * 3) < number ? sumOfValues.push(i * 3) : null;
    (i * 5) < number ? sumOfValues.push(i * 5) : null;
  }

  const add = (a, b) => a + b;

  return sumOfValues.reduce(add);
}

// attempt 3

function solution(number) {

  let sumOfValues = [];
  for (i = 1; i < number; i++) {
    (i * 3) < number ? sumOfValues.push(i * 3) : null;
    (i * 5) < number ? sumOfValues.push(i * 3) : null;
    if ((i * 3) >= number && (i * 5) >= number) {
      break;
    }
  }

  const arrSum = sumOfValues => sumOfValues.reduce((a, b) => a + b, 0);

  return arrSum;
}

///////////////////////
/// CORRECT! attempt 4 ///////


function solution(number) {
  let sumOfValues = new Set();
  const add = (a, b) => a + b;

  for (i = 1; i < number; i++) {
    if ((i * 3) >= number && (i * 5) > number) {
      break;
    }
    (i * 3) < number ? sumOfValues.add(i * 3) : null;
    (i * 5) < number ? sumOfValues.add(i * 5) : null;
  }

  return Array.from(sumOfValues).reduce(add, 0);
}

///// attempt 5 NOT QUITE THERE ??????

function solution(number) {
  let sumOfValues = new Set();
  const add = (a, b) => a + b;
  let i = 1;

  while ((i * 3) < number && (i * 5) < number) {
    (i * 3) < number ? sumOfValues.add(i * 3) : null;
    (i * 5) < number ? sumOfValues.add(i * 5) : null;
    i += 1;
  }
  let sumOfValuesArr = Array.from(sumOfValues);
  return sumOfValuesArr.reduce(add, 0);
}

////// BEST ANSWER //////
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum;
}

/////