function sumAll(arr) {
  var small = Math.min(arr[0], arr[1]);
  var large = Math.max(arr[0], arr[1]);
  var num = 0;

  for (var i = small; i <= large; i++) {
    num += i;
  }
  return num;
}

sumAll([1, 4]);
