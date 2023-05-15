var leastInterval = function (tasks, n) {
  let len = tasks.length;
  let map = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
  };
  tasks.forEach((item) => {
    map[item]++;
  });
  let arr = Object.values(map);
  arr = arr.filter((item) => item > 0);

  let res = 0;
  function getMax(arr, used) {
    let temp = 0;
    let index = null;
    for (let i = 0; i < arr.length; i++) {
      if (!used.includes(i)) {
        if (arr[i] > temp) {
          temp = arr[i];
          index = i;
        }
      }
    }
    if (index !== null) {
      arr[index]--;
      used.push(index);
    }
  }

  while (len > 0) {
    let used = [];
    for (let i = 0; i < n + 1; i++) {
      getMax(arr, used);
    }
    arr = arr.filter((item) => item > 0);

    if (len >= n + 1) {
      res += n + 1;
    } else {
      res += arr.length ? n + 1 : used.length;
    }
    len -= used.length;
  }

  return res;
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
