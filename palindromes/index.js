function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  if (reversed === str) {
    return true;
  } else {
    return false;
  }

  //return str === reversed;
}

console.log(palindrome("racecar"));
console.log(palindrome("hello"));
