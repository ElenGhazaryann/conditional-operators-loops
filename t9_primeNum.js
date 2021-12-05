function my_f(num) {
  for (let i = 2; i < num; i++) {
    return num % i === 0 ? "No" : "Yes";
  }
}
console.log(my_f(31));
