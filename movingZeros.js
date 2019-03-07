
//////The common idea here seemed to be using filter method back to back and then using a concat that surrounds the second filter //#endregion
/////The First filter removes all the zeros the second filter removes everything that is not zeros and concats the two arrays together.



///////first attempt //////
///// for some reason this would not work when 0's were placed side by side????
var moveZeros = function (arr) {
  arr.forEach((element, index) => {
    if (element == 0) {
      let zero = element;
      arr.splice(index, 1);
      arr.push(zero);
    }
    return arr;
  });

  //////// Second ATTEMPT PASSED ??????/

  var moveZeros = function (arr) {
    let newArr = []
    let counter = 0;
    arr.forEach((element, index) => {
      element === 0 ? counter += 1 : newArr.push(element);
    });
    for (i = 0; i < counter; i++) { newArr.push(0); }
    return newArr;
  }

  ////// SOLUTION I LIKE ///////
  var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num) { return num !== 0; });
    var zeroList = arr.filter(function (num) { return num === 0; });
    return filtedList.concat(zeroList);
  }



  // TODO: Program me
  // I think I want to use map or sort

  // map through the array and delete and (use a method that appends the zero to the end.)
}

function order(words) {
  return words.split(' ').sort((a, b) => {
    return a.match(/[\d+]/)[0] - b.match(/[\d+]/)[0];
  }).join(' ');
}