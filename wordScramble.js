function scramble(str1, str2) {
  let str1Arr = Array.from(str1);
  let str2Arr = Array.from(str2);

  str2Arr.forEach(element1 => {

    str1Arr.forEach((element2, index) => {
      if (element1 === element2) {
        str1Arr = str1Arr.splice(index, index + 1);
        break;
        // something about if index === str
      }
    });

  });

  // nested loops
  //loop through the first array
  // on each loop see if that letter exists in the second word
  // if it doesn't exist return false;
  // if it does remove it from the second word
}
