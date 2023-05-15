const fn = (m, t, p, arr) => {
  let errCount = 0;
  let errArr = [];
  let pre = null;
  let flag = false;
  let recove = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] <= 0 ||
      (arr[i - 1] && (arr[i] < arr[i - 1] || arr[i] - arr[i - 1] >= 10))
    ) {
      if (flag) {
        arr[i] = null;
        recove = 0;
        continue;
      }
      arr[i] = pre;
      errCount++;
      errArr.push(i);

      if (errCount === t) {
        if (i - errArr[0] < m) {
          flag = true;
          arr[i] = null;
          errArr = [];
          errCount = 0;
        } else {
          errArr.shift();
          errCount--;
        }
      }
    } else {
      pre = arr[i];
      if (flag) {
        recove++;
        arr[i] = null;
        if (recove === p) {
          flag = false;
        }
      }
    }
  }

  let res = 0;
  arr.forEach((item) => {
    if (item !== null) {
      res++;
    }
  });
  console.log(arr);
  return res;
};

console.log(fn(10, 6, 3, [-1, 1, 2, 3, 100, 10, 13, 9, 10]));
console.log(
  fn(
    10,
    6,
    3,
    [-1, -1, -1, 1, 2, 3, 100, 4, 6, 10, 100, 3, 5, 8, 9, 19, 22, 14, 15, 25]
  )
);
