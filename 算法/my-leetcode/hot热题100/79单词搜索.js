var exist = function (board, word) {
  let row = board.length;
  let col = board[0].length;
  let res = false;
  let map = new Map();
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      dfs([i, j], word);
    }
  }

  function dfs(pos, str) {
    if (board[pos[0]][pos[1]] !== str[0]) {
      return;
    } else {
      if (str.length === 1) {
        res = true;
        return;
      }
      if (pos[1] + 1 < col) {
        let index = board[pos[0]][pos[1]];
        board[pos[0]][pos[1]] = null;
        dfs([pos[0], pos[1] + 1], str.slice(1));
        board[pos[0]][pos[1]] = index;
      }
      if (pos[1] - 1 >= 0) {
        let index = board[pos[0]][pos[1]];
        board[pos[0]][pos[1]] = null;
        dfs([pos[0], pos[1] - 1], str.slice(1));
        board[pos[0]][pos[1]] = index;
      }
      if (pos[0] + 1 < row) {
        let index = board[pos[0]][pos[1]];
        board[pos[0]][pos[1]] = null;
        dfs([pos[0] + 1, pos[1]], str.slice(1));
        board[pos[0]][pos[1]] = index;
      }
      if (pos[0] - 1 >= 0) {
        let index = board[pos[0]][pos[1]];
        board[pos[0]][pos[1]] = null;
        dfs([pos[0] - 1, pos[1]], str.slice(1));
        board[pos[0]][pos[1]] = index;
      }
    }
  }

  return res;
};

console.log(
  exist(
    [
      ["A", "B"],
      ["D", "C"],
    ],
    "DCBA"
  )
);
