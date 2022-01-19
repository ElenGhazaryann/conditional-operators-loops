"use strict";
function sumOfMaxMinlength(arr) {
  let arrLength = [];
  for (let i = 0; i < arr.length; i++) {
    arrLength.push(arr[i].length);
  }
  return Math.max(...arrLength) + Math.min(...arrLength);
}

console.log(sumOfMaxMinlength(["anymore", "raven", "me", "communicate"]));
