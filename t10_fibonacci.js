"use strict";
function fibonacci(num) {
  if (num === 1 || num === 0) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
console.log(fibonacci(10));
