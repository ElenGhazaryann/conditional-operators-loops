function my_f(arr, num) {
  //                                                          works for given cases
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return arr.indexOf(num);
    }
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.abs(num - arr[i]));
  }
  let minNum = Math.min(...newArr) + num;
  return arr.indexOf(minNum);
}
console.log(my_f([21, -9, 15, 2116, -71, 33], -71));

/*                                     // Works for all cases
function my_f(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return arr.indexOf(num);
    }
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.abs(num - arr[i]));
  }
  let minNum = num + Math.min(...newArr); // *  (dif.  36 and biggest num.)
  let minNum1 = num - Math.min(...newArr); // * (dif.  36 and smallest num)

  if (arr.indexOf(minNum) !== -1 && arr.indexOf(minNum1) !== -1) {
    return arr.indexOf(minNum) < arr.indexOf(minNum1)
      ? arr.indexOf(minNum)
      : arr.indexOf(minNum1);
  } else {
    return arr.indexOf(minNum) === -1
      ? arr.indexOf(minNum1)
      : arr.indexOf(minNum);
  }
}
 */
