"use strict";

function ascendingOrder(a, b, c) {
  if (a < b && b < c) {
    return `${a} ${b} ${c}`;
  } else if (a < c && c < b) {
    return `${a} ${c} ${b}`;
  } else if (b < a && a < c) {
    return `${b} ${a} ${c}`;
  } else if (b < c && c < a) {
    return `${b} ${c} ${a}`;
  } else if (c < a && a < b) {
    return `${c} ${a} ${b}`;
  } else if (c < a && a < b) {
    return `${c} ${a} ${b}`;
  }
}
console.log(ascendingOrder(8, 1, 3));
