function my_f(arr) {
  let newArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i].reduce(function (a, b) {
      return (a += b);
    }, 0);
    newArr.push(sum);
  }
  return newArr;
}

console.log(my_f([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]));
