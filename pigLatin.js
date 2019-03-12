
var args = process.argv;
// the splice is removing the first two items in the array
// which are [ '/usr/local/bin/node', '/Users/erikpeterson/Desktop/code-wars/pigLatin.js' ]
// this gives us just the arguments we want in the array to work with. 
// rather than this [ '/usr/local/bin/node','/Users/erikpeterson/Desktop/code-wars/pigLatin.js','pig','latin' ]
// we get this ['pig','latin' ]
process.argv.splice(0, 2);
var arrayOfInputs = process.argv;


////// Refactored Solution

function pigLatinTransformation(arrayOfWords) {
  return arrayOfWords.map(word => word.substring(1) + word[0] + "ay").join(' ');
}

/////// old solution

// function pigLatinTransformation(arrayOfWords) {
//   var ourNewSentence = "";
//   arrayOfWords.forEach(function (item, index) {
//     var newWord = item.substring(1) + item[0] + "ay";
//     if (index === (arrayOfWords.length - 1)) {
//       ourNewSentence += newWord + ".";
//     } else {
//       ourNewSentence += newWord + " ";
//     }
//   });
//   console.log(ourNewSentence);
// }

console.log(pigLatinTransformation(arrayOfInputs));

// pigLatinTransformation(arrayOfInputs);





