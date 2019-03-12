// I could have used a charAt
// could have also used a object with key value pairs to 
// repaces the letters 

var args = process.argv;
var originalPassword = process.argv[2];

//////// NEW SOLUTION

function obfuscate(password) {
  return password.toLowerCase().replace(/a/g, 4).replace(/e/g, 3).replace(/o/g, 0).replace(/l/g, 1);
}

/////// ORIGINAL SOLUTION


function obfuscate(password) {
  var passwordInArray = password.split('');
  var obfuscatedPassword = "";
  passwordInArray.forEach(function (item) {
    switch (item.toLowerCase()) {
      case 'a':
        obfuscatedPassword += "4";
        break;
      case 'e':
        obfuscatedPassword += "3";
        break;
      case 'o':
        obfuscatedPassword += "0";
        break;
      case 'l':
        obfuscatedPassword += "1";
        break;
      default:
        obfuscatedPassword += item;
    }
    return obfuscatedPassword
  });
  console.log(obfuscatedPassword);
}

console.log(obfuscate(originalPassword));

// FOR TESTING

// node password.js password

// p4ssw0rd

// node password.js abracadabra

// 4br4c4d4br4

// node password.js audaciously

// 4ud4ci0us1y