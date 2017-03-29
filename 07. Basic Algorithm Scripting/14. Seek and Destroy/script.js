function filter(args) {
  return function(value) {
    for (var i = 1; i < args.length; i++) {
      if (value === args[i]) {
        return false;
      }
    }
    return true;
  };
}

function destroyer(arr) {
  // Remove all the values
  return arr.filter(filter(arguments));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
