
function palindrome(str) {
  // first thing is to trim it, to remove remove gaps.
  var strr = str.trim().replace(/[^a-z0-9]+|\s+/gmi, "").toLowerCase();
 // Then I used a regular expression to sift through the text and remove it
  return strr === strr.split("").reverse().join("");
}


palindrome("race car");

