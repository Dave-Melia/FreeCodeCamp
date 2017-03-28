function palindrome(str) {
  // Good luck!
  var re = /[^a-zA-Z0-9]/g;
  var splitStr = str.replace(re, "").toLowerCase();
  var reverseStr = str.replace(re, "").toLowerCase().split("").reverse().join("");

  if (splitStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}



palindrome("almostomla");
