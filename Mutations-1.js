function mutation(arr) {
  //split the two strings into individual letters in separate arrays
  var first = arr[0].split("");
  var second= arr[1].split("");
  var emptybox = [];
  var secondbox = [];
  //Return true if the string in the first element of the array contains all
for(var i = 0; i < first.length; i++){
 if((second[i] === first[i]) === false){
//if the current letter in the second array does not equal to the letter being compared
// in the first array compare to every letter in first array before moving to next letter in second array 
    
 } else {
   //push the matching values to a box
   
 }
  }
  console.log(emptybox)
  // of the letters of the string in the second element of the array.
  
  //get the indexOf() each letter using 2  loops
  //push the matching 
  
//   console.log(arr);
//   console.log(first + "\n" + second);
  
}

mutation(["hello", "hey"]);








//////////%%%%%%%%%////////


// For example, ["hello", "Hello"], should return true because all of the
// letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string
// "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters 
// in "line" are present in "Alien".
