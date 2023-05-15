const fn = (arr1) => {
  let arr = arr1.map((item) => {
    return item.split(",");
  });

  arr.sort((a, b) => a[0] - b[0]);

  let right = arr[0][1];
  let max = 0;
  let res = 1;
  for (let i = 1; i < arr1.length; i++) {
    if (arr[i][0] <= right) {
      if (arr[i][1] > right) {
        max = Math.max(max, arr[i][1]);
      }
    } else if (arr[i][0] > right) {
      right = max;
      res++;
      if (arr[i][1] > right) {
        right = arr[i][1];
      }
    }
    console.log(arr[i][0], arr[i][1], res, max);
  }

  if (max > right) {
    res++;
  }
  return res;
};

console.log(
  fn([
    "1,4",
    "2,5",
    "3,6",
    "7,8",
    "7,9",
    "8,9",
    "11,16",
    "9,10",
    "12,13",
    "14,15",
  ])
);
