"use strict";
let a = [1, 2, 3];
let i = 0;

while (i < a.length) {
  console.log("for", i, a[i]);
  i++;
}

let a = [1, 2, 3];
let i = 0;
do {
  console.log("for", i, a[i]);
  i++;
} while (i < a.length);
