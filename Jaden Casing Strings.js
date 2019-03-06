String.prototype.toJadenCase = function () {
  let jadenCase = "";
  let statementArray = this.split(" ");
  statementArray.forEach((word, i) => {
    //capitalize the first letter 
    let capWord = word.charAt(0).toUpperCase() + word.substring(1);
    // push the word with a space after if it is not the last word
    if (i === statementArray.length - 1) {
      jadenCase += (capWord + "");
    } else {
      jadenCase += (capWord + " ");
    }
  });
  return jadenCase;
};