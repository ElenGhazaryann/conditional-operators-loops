function my_f(arr) {
  let arrLength = [];
  for (let i = 0; i < arr.length; i++) {
    arrLength.push(arr[i].length);
  }
  return Math.max(...arrLength) + Math.min(...arrLength);
}

console.log(my_f(["anymore", "raven", "me", "communicate"]));
