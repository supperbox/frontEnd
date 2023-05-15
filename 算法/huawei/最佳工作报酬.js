const fn = (arr, time) => {
  arr.sort((a, b) => a[0] - b[0]);

  let map = new Map();

  function dfs(start, count) {
    if (map.has(start + " " + count)) {
      return map.get(start + " " + count);
    }
    let res = 0;
    for (let i = start; i < arr.length; i++) {
      if (arr[i][0] <= count) {
        res = Math.max(res, arr[i][1] + dfs(i + 1, count - arr[i][0]));
      }
    }
    map.set(start + " " + count, res);
    return res;
  }
  console.log(arr);

  let res = dfs(0, time);
  console.log(map);
  return res;
};

console.log(
  fn(
    [
      [20, 10],
      [20, 15],
      [10, 10],
      [10, 5],
    ],
    40
  )
);
