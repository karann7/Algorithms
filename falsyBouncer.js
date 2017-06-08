
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  newarr = arr.filter(function(words){
    return Boolean(words);  
  });
  return newarr;
}

bouncer([7, "ate", "", false, 9]);

