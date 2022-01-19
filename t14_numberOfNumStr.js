"use strict";
function numberOfNumsLetters(arr) {
  let num = [];
  let str = [];
  for (let i = 0; i < arr.length; i++) {
    typeof arr[i] === "number" ? num.push(arr[i]) : str.push(arr[i]);
  }
  return `Numbers : ${num.length}, Strings : ${str.length}`;
}

console.log(numberOfNumsLetters([1, 4, "i am a string", "456"]));
