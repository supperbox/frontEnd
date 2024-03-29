// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

// 此外，你可以假设该网格的四条边均被水包围。

//

// 示例 1：

// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/number-of-islands
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

let numIslands = function (grid) {
  let col = grid[0].length;
  let raw = grid.length;
  let result = 0;
  for (let i = 0; i < raw; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        search(i, j, map);
        result++;
      }
    }
  }
  function search(i, j) {
    if (grid[i][j] === "1") {
      grid[i][j] = "0";
      i > 0 && search(i - 1, j);
      j > 0 && search(i, j - 1);
      i < raw - 1 && search(i + 1, j);
      j < col - 1 && search(i, j + 1);
    }
  }
  return result;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    //   ["1", "1", "0", "1", "0"],
    //   ["1", "1", "0", "0", "0"],
    //   ["0", "0", "0", "0", "0"],
  ])
);
