function reverseInteger(int) {
  return parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
