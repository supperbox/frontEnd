const fn = (arr) => {
  let sumArr = [0];
  arr.reduce((a, b) => {
    sumArr.push(a + b);
    return a + b;
  }, 0);

  let resArr = new Array(arr.length).fill(0);

  resArr[0] = arr[0];
  for (let i = 1; i < resArr.length; i++) {
    if (sumArr[i + 1] <= 100) {
      resArr[i] = resArr[i - 1] + arr[i] - sumArr[i];
    } else {
      resArr[i] = resArr[i - 1] + (100 - sumArr[i]) - sumArr[i];
      break;
    }
  }
  let res = 0;
  resArr.forEach((item) => {
    res = Math.max(item, res);
  });
  return res;
};

console.log(fn([50, 60, 1]));
console.log(fn([30, 30, 70]));
