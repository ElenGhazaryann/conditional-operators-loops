function my_f(a, b, c) {
  let arr = [];
  arr.push(a, b, c);

  return arr.sort((a, b) => a - b);
}
console.log(my_f(-26, -456, 0));
