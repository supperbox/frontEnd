const fn = (arr, len) => {
  let map = new Map();

  arr.forEach((item) => {
    let a = +item.split(" ")[0];
    let b = +item.split(" ")[1];
    map.has(a) ? map.get(a).add(b) : map.set(a, new Set().add(b));
    map.has(b) ? map.get(b).add(a) : map.set(b, new Set().add(a));
  });

  console.log(map);
  let res = 1;
  for (let i = 1; i <= len; i++) {
    dfs(i, []);
  }

  function dfs(start, pre) {
    //  对start位置进行染色
    if (map.has(start)) {
      pre = [...pre, ...map.get(start)];
    }
    //   染色计数
    res++;

    for (let i = start + 1; i <= len; i++) {
      // 找到可以染色的位置：不相邻的点
      if (!pre.some((item) => item === i)) {
        dfs(i, pre.slice());
      }
    }
  }

  return res;
};

console.log(fn(["1 2", "1 3"], 4));

/*
这道题的要点在于找到所有红色涂色方式,那么就要遍历所有节点，并从该节点开始对不相邻节点进行上色，找到所有的组合；
值得注意的是，先涂1再涂3 和先涂3再涂1 是等效的，所以启用常见的 start 标识，表示只能往后找所有可能的涂色组合；
*/
