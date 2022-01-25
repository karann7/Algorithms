// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
 let fixedStr = []
 let lowerSplit = str.toLowerCase().split(' ');
 for (let i in lowerSplit) {
  fixedStr.push(lowerSplit[i][0].toUpperCase() + lowerSplit[i].substr(1))
 }
 return fixedStr.join(" ")
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))
