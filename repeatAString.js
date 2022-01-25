// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. 
// For the purpose of this challenge, do not use the built-in .repeat() method.



const repeatStringNumTimes = (str, num) => {

 if (!str || !num || num < 1) return ""

 let finalString = ''
 
 for (let i = 0; i < num; i++) {
  finalString += str
 }

 return finalString;
}

console.log(repeatStringNumTimes("abc", 4 ))