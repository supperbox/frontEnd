const fn = (str) => {
  let arr = str.split(" ");
  arr.sort();
  arr.sort((a, b) => {
    return a.length - b.length;
  });
  let map = new Map();
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      map.set(arr[i]);
    } else {
      if (map.has(arr[i].slice(0, arr[i].length - 1))) {
        map.set(arr[i]);
        res = arr[i];
      }
    }
  }
  return res;
};

console.log(fn("h he hel hell hello o ok n ni nin ninj ninja"));
