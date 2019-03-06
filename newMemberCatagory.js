
/////// FIRST ATTEMPT ////////

function openOrSenior(data) {
  let memberStatus = [];
  data.forEach((user, i) => {
    user[i][0] < 55 || user[i][1] > 7 ? memberStatus.push('Open') : memberStatus.push('Senior');
  });
  return memberStatus;
}

//////// FINAL  Attempt #2  (tried to go 1 step further than need see above `user[i][1]` ) ????????

function openOrSenior(data) {
  let memberStatus = [];
  data.forEach(user => {
    user[0] >= 55 && user[1] > 7 ? memberStatus.push('Senior') : memberStatus.push('Open')
  });
  return memberStatus;
}

////////

////// THOUGHT PROCESS ???????

function openOrSenior(data) {
  //create a blank arr
  // create a loop 
  // in this loop create another loop 
  //if the first number is` i=0` below 55 push('open')
  // if the first number is 55 & the 2nd number is > 7 push('Senior')
  // return our arr
}


////// OTHER SOLUTIONS ///////

function openOrSenior(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}