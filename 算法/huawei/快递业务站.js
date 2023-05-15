const fn = (martix, n) => {
  let arr = new Array(n).fill(0).map((item, index) => index);
  for (let i = 0; i < martix.length; i++) {
    for (let j = i + 1; j < martix[0].length; j++) {
      if (martix[i][j] === 1) {
        connect(i, j);
      }
    }
  }

  function connect(i, j) {
    arr[j] = arr[i];
  }
  let map = new Map();
  arr.forEach((item) => {
    if (!map.has(item)) {
      map.set(item);
    }
  });

  return map.size;
};

console.log(
  fn(
    [
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
    4
  )
);
