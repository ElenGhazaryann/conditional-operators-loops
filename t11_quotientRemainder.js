function my_f(num) {
  let arr = num.toString().split("");
  let sum = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
    product *= +arr[i];
  }
  if (num === 0) {
    return "Cannot calculate";
  } else {
    return product % sum === 0
      ? ` Quotient is ${product / sum}`
      : ` Reminder is ${product % sum}`;
  }
}
console.log(my_f(455));
