const fn = (arr) => {
  let sum = arr.reduce((a, b) => a + b);

  let times = sum;

  let map = new Map();
  let res = false;
  let target;

  while (times > 0) {
    if (sum % times !== 0) {
      times--;
      continue;
    }

    target = sum / times;
    dfs(target);
    if (res) {
      return times;
    }
    times--;
  }

  function dfs(tar) {
    if (res) {
      return;
    }
    if (map.size === arr.length && tar === 0) {
      res = true;
      return;
    }

    if (tar === 0) {
      tar = target;
    }
    for (let i = 0; i < arr.length; i++) {
      if (map.has(i)) {
        continue;
      }
      if (tar >= arr[i]) {
        map.set(i);
        dfs(tar - arr[i]);
        map.delete(i);
      }
    }
  }
};

console.log(fn([4, 3, 2, 3, 5, 2, 1]));
