// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Solution:

function XO(str) {
  var strr = str.toLowerCase();
  var arrX = 0;
  var arrO = 0;
  for (var i = 0; i < strr.length; i++) {
    if(strr[i] === "x") {
      arrX++;
    } else if (strr[i] === "o") {
      arrO++;
    }
  }
  if(arrX === arrO){
    return true;
  } else {
    return false;
  }
}

XO('xxooOOo');

//Better Solutions:

// 1. Use Regular Expressions to find letters than use .match
// 2. .split the str at 'x' and 'o' compare the length of the new arrays