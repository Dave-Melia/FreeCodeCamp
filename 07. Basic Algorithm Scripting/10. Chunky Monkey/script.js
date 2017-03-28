function chunkArrayInGroups(arr, size) {
  // Break it up.
  var myArr = [],
      len   = arr.length;

  for (var i = 0; i < len; i += size) {
    myArr.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return myArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
