"use strict";
function my_f(sent) {
  let arr = sent.split(" ");
  let newArr = [];
  let lastArr = [];
  for (let i = arr.length - 1; i < arr.length; i++) {
    newArr = arr[i].split("");
    newArr.pop();
    lastArr = newArr.join("");
  }

  arr.pop();
  return arr.concat(lastArr);
}
console.log(my_f("May the Force be with you."));
