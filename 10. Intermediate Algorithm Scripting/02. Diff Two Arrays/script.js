function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  // for-loop that searched for elements not in arr2
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      // pushes whatever it finds into our new array
      newArr.push(arr1[i]);
    }
  }
  // for-loop that searchedd for elements not in arr1
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      // pushes whatever it finds into our new array
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
