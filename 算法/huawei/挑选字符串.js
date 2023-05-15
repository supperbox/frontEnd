const fn = (a, b) => {
  let alen = a.length;
  let blen = b.length;
  let map = new Map();
  let dfs = (index, len) => {
    if (map.has(a + " " + b)) {
      return map.get(a + " " + b);
    }
    if (len === blen) {
      return 1;
    }
    if (alen - index < blen - len) {
      return 0;
    }
    let result = 0;
    for (let i = index; i < a.length; i++) {
      if (a[i] === b[len]) {
        result += dfs(i + 1, len + 1);
      }
    }
    map.set(a + " " + b, result);
    return result;
  };

  return dfs(0, 0);
};

console.log(fn("acabbbbb", "ab"));
