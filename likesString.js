//https://www.codewars.com/kata/who-likes-it/train/javascript


/////////FINAL??????????

function likes(names) {
  let likes = names.length < 2 ? ' likes this' : ' like this';
  switch (names.length) {
    case 0: return "no one" + likes;
    case 1: return names[0] + likes;
    case 2: return names[0] + " and " + names[1] + likes;
    case 3: return names[0] + ", " + names[1] + ` and ${names[2]}` + likes;
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others${likes}`;
  }
}
////// first attempt TOTAL FAIL ??????

function likes(names) {
  let likes = ' likes this';
  if (names.length === undefined) {
    return "no one" + likes;
  } else if (names.length === 1) {
    return names[0] + likes;
  } else if (names.length === 2) {
    return names[0] + "and" + names[1] + likes;
  } else {
    let newArr = [];
    names.forEach((element, index) => {
      if (index === names.length - 1) {
        newArr.push(element + " and ")
      } else {
        newArr.push(element + ', ')
      }
    });
    return newArr.join() + likes;
  }

}
// if the array is empty return 'no one likes this'
// if arr.length = 1 return 'NAME likes this'

// loop through array and push or
//join each word with a ',' unless the index is = to arr.length -1
// join this whole array together and concat 'likes this' on the end

///////// ATTEMPT 2

function likes(names) {
  let likes = ' likes this';
  switch (names.length) {
    case undefined: return "no one" + likes;
    case 1: return names[0] + likes;
    case 2: return names[0] + "and" + names[1] + likes;
    case 3: return names[0] + ", " + names[1] + `and ${names[2]}` + likes;
    case names.length > 3: return `${names[0]}, ${names[1]} and ${names.length - 2} others` + likes;
  }
}

let likes = length < 2 ? ' likes this' : ' like this';

function likes(names) {
  let likes = ' like this';
  switch (names.length) {
    case 0: return "no one" + " likes this";
    case 1: return names[0] + " likes this";
    case 2: return names[0] + " and " + names[1] + likes;
    case 3: return names[0] + ", " + names[1] + ` and ${names[2]}` + likes;
    case default: return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}


function likes(names) {
  let likes = ' like this';
  switch (names.length) {
    case 0: return "no one" + " likes this";
    case 1: return names[0] + " likes this";
    case 2: return names[0] + " and " + names[1] + likes;
    case 3: return names[0] + ", " + names[1] + ` and ${names[2]}` + likes;
    case default: return names[0] + ", " + names[1] + `and ${names.length - 2} others` + likes;
  }
}