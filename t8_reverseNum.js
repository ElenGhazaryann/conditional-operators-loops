"use strict";
function reverseNumber(num) {
  let arr = num.toString().split("").reverse().join("");
  return arr;
}

console.log(reverseNumber(133));
