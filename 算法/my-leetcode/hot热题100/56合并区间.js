var merge = function (arr) {
  arr.sort((a, b) => a[0] - b[0]);
  let left = arr[0][0];
  let right = arr[0][1];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] > right) {
      res.push([left, right]);
      left = arr[i][0];
      right = arr[i][1];
    } else if (arr[i][1] > right) {
      right = arr[i][1];
    }
  }
  res.push([left, right]);
  return res;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
    [0, 4],
  ])
);
