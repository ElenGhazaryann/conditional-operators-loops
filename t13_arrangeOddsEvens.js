function my_f(arr) {
  let even = [];
  let odd = [];
  arr.filter(function (val) {
    if (typeof val == "number") {
      return val % 2 === 0 ? even.push(val) : odd.push(val);
    }
  });

  return odd.concat(even);
}
console.log(my_f([8, 8, 1, "meh", 6]));
