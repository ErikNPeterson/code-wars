// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
// HAD SERIOUS ISSUES UNDERSTANDING  THE SLICE METHOD!!!!!

//  case 1: return newArr.slice(0, 1); //#endregion
// The idea is here is that you want from index `0` and stop at `1` 
// this will only return [arr[0]];


function tribonacci(signature, n) {
  if (n <= 3) {
    switch (n) {
      case 0: return [];
      case 1: return signature[0];
      case 2: return signature[1];
      case 3: return signature[2];
    }
  } else {
    let newArr = [];
    newArr.concat(signature);
    console.log(newArr);
    // I have to check this not sure about correct format
    let loopCount = 3
    while (loopCounter !== n) {
      newArr.push(signature[loopCount] + signature[loopCount + 1] + signature[loopCount + 2])
      loopCounter += 1;
    }
    return newArr;
  }
}


///////MNODS

function tribonacci(signature, n) {
  if (n <= 3) {
    let newArr = signature;
    switch (n) {
      case 0: return [];
      case 1: return newArr.slice(0);
      case 2: return newArr.slice(0, 1);
      case 3: return newArr.slice(0, 3);
    }
  } else {
    let newArr = signature;
    let loopCount = 0;
    while (loopCount !== n - 3) {
      newArr.push(newArr[loopCount] + newArr[loopCount + 1] + newArr[loopCount + 2]);
      loopCount += 1;
    }
    return newArr;
  }
}


///////FINAL

function tribonacci(signature, n) {
  if (n <= 3) {
    let newArr = signature;
    switch (n) {
      case 0: return []; break;
      case 1: return newArr.slice(0, 1);
      case 2: return newArr.slice(0, 2);
      case 3: return newArr;
    }
  } else {
    let newArr = signature;
    let loopCount = 0;
    while (loopCount !== n - 3) {
      newArr.push(newArr[loopCount] + newArr[loopCount + 1] + newArr[loopCount + 2]);
      loopCount += 1;
    }
    return newArr;
  }
}


///////THIS WAS A GREAT WAY!!!

function tribonacci(signature, n) {
  /// here the create the passed arry using n
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
  }
  return result;
}

//////// I could have used the `reduce` method for adding the array 

function tribonacci(signature, n) {
  // here we MANIPULATE the original signature arr //#endregion
  while (signature.length < n) {
    //slice returns the 3 from the end of the aray
    // reduce adds those numbers together 
    signature.push(signature.slice(-3).reduce((a, b) => a + b));
  }
  // if the signature.length is more than the value of `n`
  // it will run the following right away and return the cut array.
  return signature.slice(0, n);
}