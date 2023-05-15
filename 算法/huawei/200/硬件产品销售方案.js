const fn = (arr, sum) => {
  let res = [];
  function dfs(sum, start, includes) {
    if (sum === 0) {
      res.push(includes.slice());
      return;
    } else if (sum < 0) {
      return;
    }
    for (let i = start; i < arr.length; i++) {
      includes.push(arr[i]);
      dfs(sum - arr[i], i, includes);
      includes.pop();
    }
  }
  dfs(sum, 0, []);
  return res;
};

console.log(fn([100, 200, 300, 500], 500));
