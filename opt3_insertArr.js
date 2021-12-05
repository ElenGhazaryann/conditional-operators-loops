function my_f(arr1, arr2) {
  let firstNum = arr1.shift();
  let lastNum = arr1.shift();

  arr2.unshift(firstNum); // Why arr.splice() method doesn't work? arr1.splice(1,0,(...arr2))
  arr2.push(lastNum);
  return arr2;
}

console.log(my_f([15, 150], [45, 75, 35]));
