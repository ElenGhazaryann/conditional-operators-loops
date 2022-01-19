"use strict";
function hasDigit(digit, num) {
  return num.toString().includes(digit) ? "Yes" : "No";
}
console.log(hasDigit(2, 2463));
