function my_f(num) {
  let arr = num.toString().split("").reverse().join("");
  return arr;
}

console.log(my_f(133));
