//Mine

var isSquare = function (n) {
  return Math.sqrt(n) % 1 == 0 ? true : false;
}

// The best

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
