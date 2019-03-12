var args = process.argv;
process.argv.splice(0, 2);
var arrayOfInputs = process.argv;

////////New another attempt

function reverseWords(wordsArray) {
  return wordsArray.map(item => item.split('').reverse().join('') + "\n").toString().replace(/,/g, '');
}


console.log(reverseWords(arrayOfInputs))

//////// New 

// function reverseWords(wordsArray) {
//   let newString = "";
//   wordsArray.forEach((item, i) => {
//     newString += item.split('').reverse().join('') + "\n"
//   });
//   return newString
// }


//////Original

// function reverseWords(wordsArray) {
//   // looping through the array
//   wordsArray.forEach(item => {
//     // giving a place for the word to go
//     let newString = "";
//     // looping through each word
//     for (let i = (item.length - 1); i >= 0; i--) {
//       newString += item[i];
//     }
//     console.log(newString);
//     // return is giving me undefined;
//     return newString
//   });
// }

//////Original

// function reverseWords(wordsArray) {
//   let newString = "";
//   wordsArray.forEach(item => {
//     for (let i = (item.length - 1); i >= 0; i--) {
//       newString += item[i];
//     }
//     console.log(newString);
//   });
// }

////// Az's Example


// function reverseWords(wordsArray) {
//   // looping through the array
//   let newString = "";
//   wordsArray.forEach((item, i) => {
//     // giving a place for the word to go
//     i === 0 ? null : newString += "\n"
//     // looping through each word
//     for (let i = (item.length - 1); i >= 0; i--) {
//       newString += item[i];
//     }
//   });
//   return newString
// }


