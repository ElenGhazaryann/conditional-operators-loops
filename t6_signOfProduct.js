"use strict";
function signOfProduct(a, b, c) {
  if (
    (a > 0 && b > 0 && c > 0) ||
    (a > 0 && b < 0 && c < 0) ||
    (a < 0 && b > 0 && c < 0) ||
    (a < 0 && b < 0 && c > 0)
  ) {
    return "Sign is +";
  } else if (a === 0 || b === 0 || c === 0) {
    return "Unsigned";
  } else {
    return "Sign is -";
  }
}
console.log(signOfProduct(4, 19, -2));
