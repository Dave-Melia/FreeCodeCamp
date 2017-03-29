function rot13(str) { // LBH QVQ VG!
  //Create a new string containing the letters of 'str'
  var myStr = str.split("").map(function(char) {
    //'c' is equal to a single character per run.
    c = char.charCodeAt(0);
    //If the character assigned to 'c' is less than 'A'
    //and greater than 'Z', simply return the code
    //leaving spaces and punctuation intact.
    if (c < 65 || c > 90) {
      return String.fromCharCode(c);
    //If the variable 'c' is below the letter 'N', add 13 letters.
    } else if (c < 78) {
      return String.fromCharCode(c + 13);
    //Else if the variable 'c' is above the letter 'N', subtract 13 letters.
    } else {
      return String.fromCharCode(c - 13);
    }
    //Convert from an array back to a String.
  }).join("");
  //Return decrypted String.
  return myStr;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
