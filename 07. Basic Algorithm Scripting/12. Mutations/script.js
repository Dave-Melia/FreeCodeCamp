function mutation(arr) {
  var firstWord = arr[0].toLowerCase(),
    secondWord = arr[1].toLowerCase();

  for (var i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
