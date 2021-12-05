function my_f(arr) {
  arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    newArr.push(undefined);
  }

  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] = arr[i];
  }
  while (newArr[0] === undefined) {
    newArr.shift();
  }

  return newArr;
}
console.log(my_f([4, 3, 0, 9]));
