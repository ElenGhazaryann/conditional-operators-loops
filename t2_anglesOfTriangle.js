"use strict";
function angles(a, b) {
  let third = 0;
  for (let i = 0; i < 180 - a - b; i++) {
    third++;
  }
  return third;
}
console.log(angles(45, 90));
