function stringReverse(str: string): string {
  return str.split("").reverse().join("");
}

console.log(stringReverse("Hello World!"));

module.exports = stringReverse;
