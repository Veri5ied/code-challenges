function stringReverse(str) {
  return str.split("").reverse().join("");
}

//manual solution
function stringReverse(str) {
  let reversed = "";
  for (let constant of str) {
    reversed += constant;
  }
  return reversed;
}

console.log(stringReverse("hello"));

module.exports = stringReverse;
