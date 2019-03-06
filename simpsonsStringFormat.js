// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

function list(names) {
  let nameList = '';
  names.forEach((element, index) => {
    if (index == 0) { nameList += `${element.name}` } else {
      index == names.length - 1 ? nameList += ` & ${element.name}` : nameList += `, ${element.name}`
    }
  });
  return nameList;
}


function list(names) {
  let nameList = '';
  names.forEach((element, index) => {
    index == names.length - 1 ? nameList.concat('& ', element.name) : nameList.concat('', `${element.name}, `)
  });
  return nameList;
}