const fn = (matrix, a, b) => {
  let row = matrix.length;
  let col = matrix[0].length;
  let begin = [];
  outer: for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] > 0) {
        begin = [i, j];
        break outer;
      }
    }
  }

  let stack = [begin];
  let map = new Map();
  while (stack.length) {
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let p = stack.shift();
      map.set(p[0] + " " + p[1]);
      let val = matrix[p[0]][p[1]];
      if (matrix[p[0] + 1] && matrix[p[0] + 1][p[1]] === 0) {
        if (!map.has(p[0] + 1 + " " + p[1])) {
          matrix[p[0] + 1][p[1]] = val - 1 > 0 ? val - 1 : 0;
          stack.push([p[0] + 1, p[1]]);
        }
      }
      if (matrix[p[0] - 1] && matrix[p[0] - 1][p[1]] === 0) {
        if (!map.has(p[0] - 1 + " " + p[1])) {
          matrix[p[0] - 1][p[1]] = val - 1 > 0 ? val - 1 : 0;
          stack.push([p[0] - 1, p[1]]);
        }
      }
      if (matrix[p[1] - 1] && matrix[p[0]][p[1] - 1] === 0) {
        if (!map.has(p[0] + " " + (p[1] - 1))) {
          matrix[p[0]][p[1] - 1] = val - 1 > 0 ? val - 1 : 0;
          stack.push([p[0], p[1] - 1]);
        }
      }
      if (matrix[p[1] + 1] && matrix[p[0]][p[1] + 1] === 0) {
        if (!map.has(p[0] + " " + (p[1] + 1))) {
          matrix[p[0]][p[1] + 1] = val - 1 > 0 ? val - 1 : 0;
          stack.push([p[0], p[1] + 1]);
        }
      }
    }
  }
  return matrix;
};

console.log(
  fn([
    [0, 0, 0, -1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, -1, 4, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, -1, 0],
    [0, 0, 0, 0, 0],
  ])
);
