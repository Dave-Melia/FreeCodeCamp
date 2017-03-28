function titleCase(str) {
  var words = str.toLowerCase().split(" ");
  var letters = [];
  for (var i = 0; i < words.length; i++) {
    letters[i] = words[i].split("");
    letters[i][0] = letters[i][0].toUpperCase();
    words[i] = letters[i].join("");
  }
  return words.join(" ");
}

titleCase("sHoRt AnD sToUt");
