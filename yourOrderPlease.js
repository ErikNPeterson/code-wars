////// first attempt losts of problems ///////

function order(words) {
  var wordsArr = words.split('');
  var sortedArr = [];
  // write regex function to find number in string
  // var regex = /[\d]/g;
  // loop through ```wordsArr```
  for (let word of wordsArr) {
    // find the number in the string
    let index = item.search(/[\d]/g) - 1;
    // use the splice method to place the words in ```sortedArr``` in order
    months.splice(index, 0, word);
  }
  // return array converted into a string
  return sortedArr.toString().replace(',', ' ');

}

/////// continuing to modify 2 ////

function order(words) {
  var wordsArr = words.split(' ');
  var sortedArr = [];
  for (let word of wordsArr) {
    // this is now working!!!! yayayayayayay
    let index = word.search(/[\d+]/);
    console.log(index);
    // use the splice method to place the words in ```sortedArr``` in order
    sortedArr.splice(index, 0, word);
  }
  // return array converted into a string
  return sortedArr.toString().replace(',', ' ');

}

/// FINAL /////
function order(words) {
  var wordsArr = words.split(' ');
  let sortedArr = wordsArr.sort((a, b) => {
    return a.match(/[\d+]/)[0] - b.match(/[\d+]/)[0];
  });
  return sortedArr.join(' ');
}

/// FINAL 2 /////
function order(words) {
  let sortedArr = words.split(' ').sort((a, b) => {
    return a.match(/[\d+]/)[0] - b.match(/[\d+]/)[0];
  });
  return sortedArr.join(' ');
}
///// FINAL FINAL //////

function order(words) {
  return words.split(' ').sort((a, b) => {
    return a.match(/[\d+]/)[0] - b.match(/[\d+]/)[0];
  }).join(' ');
}


///////REGEX FINAL ///////

function order(words) {
  return words.split(' ').sort((a, b) => {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ');
}
////////Almost there!!! ??????

function order(words) {
  var wordsArr = words.split(' ');
  var sortedArr = [];
  for (let word of wordsArr) {
    // this gives me the index of the 
    let index = word.match(/[\d+]/) - 1;
    // search method;
    // what I was getting back was;
    // use the splice method to place the words in sortedArr in order
    sortedArr.splice(index, 0, word);
  }
  // return array converted into a string
  return sortedArr.toString().replace(/,/g, ' ');
}



array.forEach((element, index, arr) => {

});

for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];


  }

}

for (const iterator of object) {

}
