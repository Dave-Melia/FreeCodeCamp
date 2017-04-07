function convertToRoman(num) {
  var romanNumerals = ["M", "CM", "D", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var decimalNumbers = [1000, 900, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var output = '';

  for (var i = 0; i < decimalNumbers.length; i++) {
    while (decimalNumbers[i] <= num) {
      output += romanNumerals[i];
      num -= decimalNumbers[i];
    }
  }
  return output;
}

convertToRoman(36);
