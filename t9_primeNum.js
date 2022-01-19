"use strict";
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    return num % i === 0 ? "No" : "Yes";
  }
}
console.log(isPrime(31));
