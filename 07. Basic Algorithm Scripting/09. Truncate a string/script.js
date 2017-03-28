function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length <= num) {
    return str;
  } else if (num <= 3) {
    return str.slice(0, num) + "...";
  } else {
    return str.slice(0, num - 3) + "...";
  }
}

truncateString("Absolutely Longer", 2);
