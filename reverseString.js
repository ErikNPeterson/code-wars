var args = process.argv;
process.argv.splice(0, 2);
var arrayOfInputs = process.argv;

////////New attempts!

function reverseWords(wordsArray) {
  return wordsArray.map(item => item.split('').reverse().join('') + "\n").toString().replace(/,/g, '');
}

function reverseWords(wordsArray) {
  return wordsArray.map(item => item.split('').reverse().join('')).join('\n');
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
//   let newString = "";
//   wordsArray.forEach((item, i) => {
//     i === 0 ? null : newString += "\n"
//     for (let i = (item.length - 1); i >= 0; i--) {
//       newString += item[i];
//     }
//   });
//   return newString
// }


// function reverseWords(wordsArray) {
//   wordsArray.forEach((item, i) => {
//     i === 0 ? null : newString += "\n"
//     return item.split('').reverse().join('')
//   });
// }

