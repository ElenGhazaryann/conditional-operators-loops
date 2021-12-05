"use strict";
function my_f(digit, num) {
  return num.toString().includes(digit) ? "Yes" : "No";
}
console.log(my_f(2, 2463));
