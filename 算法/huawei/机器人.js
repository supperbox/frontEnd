const fn = (matrix) => {
  let row = matrix.length;
  let col = matrix[0].length;
  let map = new Map();
  function dfs(i, j) {
    if (!map.has(i + " " + j)) {
      map.set(i + " " + j);
    } else {
      return;
    }

    let val = matrix[i][j];
    if (i - 1 >= 0 && Math.abs(matrix[i - 1][j] - val) <= 1) {
      dfs(i - 1, j);
    }
    if (j - 1 >= 0 && Math.abs(matrix[i][j - 1] - val) <= 1) {
      dfs(i, j - 1);
    }
    if (j + 1 < col && Math.abs(matrix[i][j + 1] - val) <= 1) {
      dfs(i, j + 1);
    }
    if (i + 1 < row && Math.abs(matrix[i + 1][j] - val) <= 1) {
      dfs(i + 1, j);
    }
  }
  let res = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!map.has(i + " " + j)) {
        let pre = map.size;
        dfs(i, j);
        res = Math.max(res, map.size - pre);
      }
    }
  }
  return res;
};

console.log(
  fn([
    [1, 2, 5, 2],
    [2, 4, 4, 5],
    [3, 5, 7, 1],
    [4, 6, 2, 4],
  ])
);
