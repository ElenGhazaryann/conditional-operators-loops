"use strict";
function my_f(num) {
  let arr = num.toString().split("");
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  return maxNum - minNum;
}
console.log(my_f(4593653));
