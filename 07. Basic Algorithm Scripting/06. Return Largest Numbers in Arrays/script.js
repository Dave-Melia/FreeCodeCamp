function largestOfFour(arr) {
  var num = 0;
  var myArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > num) {
        num = arr[i][j];
      }
    }
    myArr.push(num);
    num = 0;
  }
  return myArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
