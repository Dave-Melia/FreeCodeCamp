function repeatStringNumTimes(str, num) {
  var myStr = "";

  for (var i = 0; i < num; i++) {
    myStr = myStr + str;
  }

  return myStr;
}

repeatStringNumTimes("*", 3);
