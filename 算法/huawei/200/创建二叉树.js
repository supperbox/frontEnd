const fn = (arr) => {
  let res = [[-1]];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let floor = temp[0] + 1;
    let index = temp[1] * 2;
    if (!res[floor]) {
      res[floor] = new Array(res[floor - 1].length * 2).fill(null);
    }
    if (res[floor][index] === null) {
      res[floor][index] = i;
    } else {
      if (res[floor][index + 1] === null) {
        res[floor][index + 1] = i;
      }
    }
  }
  return res.flat();
};

console.log(
  fn([
    [0, 0],
    [0, 0],
    [1, 1],
    [1, 0],
    [0, 0],
  ])
);
