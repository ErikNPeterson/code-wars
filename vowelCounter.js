let numberOfVowels = function (data) {
  return data.match(/[aeiou]/ig).length
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));