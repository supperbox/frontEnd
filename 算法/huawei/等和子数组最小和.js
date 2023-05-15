const fn = (arr) => {
  arr.sort((a, b) => a - b);
  let sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);

  let target = 0;
  let res = 0;
  for (let i = 1; i < sum; i++) {
    if (sum % i !== 0) {
      continue;
    }
    target = i;
    getSum(arr, 0);
    if (res > 0) {
      return res;
    }
  }
  function getSum(arr, sum) {
    if (!arr.length) {
      if (sum === 0) {
        res = target;
      }
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] === target) {
        getSum([...arr.slice(0, i), ...arr.slice(i + 1)], 0);
      } else if (sum + arr[i] < target) {
        getSum([...arr.slice(0, i), ...arr.slice(i + 1)], sum + arr[i]);
      }
    }
  }
};

console.log(fn([1, 3, 2, 7, 4, 5]));
console.log(fn([4, 3, 2, 3, 5, 2, 1]));
