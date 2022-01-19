"use strict";
function findDifference(num) {
  let arr = num.toString().split("");
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  return maxNum - minNum;
}
console.log(findDifference(4593653));
