function findLongestWord(str) {
  var newStr = str.split(" ");
  var strLength = 0;

  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i].length > strLength) {
      strLength = newStr[i].length;
    }

  }
  return strLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
