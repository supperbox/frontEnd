const fn = (matrix) => {
  let res = [];
  let time = 1;
  let taskArr = [];

  while (time < 100) {
    if (matrix.every((item) => item[2] === 0)) {
      break;
    }

    let index = null;
    let max = 0;

    taskArr.forEach((item, index1) => {
      if (item[2] <= 0) {
        return;
      }
      if (item[1] > max) {
        max = item[1];
        index = index1;
      }
    });

    if (index !== null) {
      matrix[index][2] -= 1;
      if (matrix[index][2] === 0) {
        res.push([matrix[index][0], time]);
      }
    }

    matrix.forEach((item) => {
      if (item[3] === time) {
        taskArr.push(item);
      }
    });

    time++;
  }
  return res;
};

console.log(
  fn([
    [1, 3, 5, 1],
    [2, 1, 5, 10],
    [3, 2, 7, 12],
    [4, 3, 2, 20],
    [5, 4, 9, 21],
    [6, 4, 2, 22],
  ])
);
