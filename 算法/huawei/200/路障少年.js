const fn = (t, c, m) => {
  let row = m.length;
  let col = m[0].length;

  let start = [];
  let end = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (m[i][j] === "S") {
        start.push(i);
        start.push(j);
      }
      if (m[i][j] === "T") {
        end.push(i);
        end.push(j);
      }
    }
  }

  let res = false;
  let map = new Map();
  function dfs(i, j, d, tu, br) {
    if (res) {
      return;
    }
    if (map.has(i + " " + j)) {
      return;
    }
    map.set(i + " " + j);
    if (map.has(start[0] + " " + start[1])) {
      map.set(start[0] + " " + start[1]);
    }
    if (m[i][j] === "*") {
      br += 1;
    }
    if (tu > t || br > c) {
      return;
    }

    if (m[i][j] === "T") {
      res = true;
      return;
    }
    console.log(i, j, d, tu, br);
    if (m[i + 1]) {
      let newTu = tu;
      if (d !== "down" && d !== "") {
        newTu = tu + 1;
      }

      dfs(i + 1, j, "down", newTu, br);
      map.delete(i + 1 + " " + j);
    }
    if (m[i - 1]) {
      let newTu = tu;
      if (d !== "up" && d !== "") {
        newTu = tu + 1;
      }
      dfs(i - 1, j, "up", newTu, br);
      map.delete(i - 1 + " " + j);
    }
    if (m[i][j + 1]) {
      let newTu = tu;
      if (d !== "right" && d !== "") {
        newTu = tu + 1;
      }
      dfs(i, j + 1, "right", newTu, br);
      map.delete(i + " " + (j + 1));
    }
    if (m[i][j - 1]) {
      let newTu = tu;
      if (d !== "left" && d !== "") {
        newTu = tu + 1;
      }
      dfs(i, j - 1, "left", newTu, br);
      map.delete(i + " " + (j - 1));
    }
  }

  dfs(start[0], start[1], "", 0, 0);
  return res;
};

console.log(
  fn(3, 1, [
    [".", "*", "S", ".", "."],
    ["*", "*", ".", "*", "."],
    ["T", "*", "*", ".", "."],
    ["*", "*", "*", "*", "."],
    [".", ".", ".", ".", "."],
  ])
);
