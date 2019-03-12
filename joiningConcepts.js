var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

//////// Refactor

function joinList(inputArray) {
  return inputArray.toString().replace(/,/g, ', ');
}

/////// Old attempt
function joinList(inputArray) {
  var newString = "";
  inputArray.forEach(function (item, index) {
    if (index === (inputArray.length - 1)) {
      newString += item;
    } else {
      newString += item + ", ";
    }
  });
  return newString;
}

var concepts = joinList(conceptList);

console.log(joinList(conceptList));