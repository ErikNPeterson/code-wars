
/////// Attempt 1 /////
// I understood the question incorrectly. //#endregion
// It want unique items not side by side. My function was eliminating duplicates. Duplicates are fine unless they are beside the same item.

var uniqueInOrder = function (iterable) {
  let unique = new Set();
  for (let item of iterable) {
    unique.add(item);
  }
  return Array.from(unique);
}

//// ORIGINAL thought process ////

var uniqueInOrder = function (iterable) {
  // do I need to determine whether it's an array or string.
  // can I iterate through a string or array
  // loop through the string
  // use the new function that I was using yesterday to take only the unique values
  // convert to an array

}

///// Updated though process.

// we want to check if the same character was just passed when looping through the characters.
// I should store a variable inside the loop that stores the last character. If the character is the same do nothing, but still replace the VARIABLE
// I will have to remove the set. with an array VARIABLE 

//////// Attempt number 2 FINAL ..////////

var uniqueInOrder = function (iterable) {
  let unique = [];
  for (let item of iterable) {
    item !== lastItem ? unique.push(item) : null;
    let lastItem = item;
  }
  return unique;
}

/////// ALTERNATE SOLUTIONS ???????

var uniqueInOrder = function (iterable) {
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

// very cool

var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1])
}