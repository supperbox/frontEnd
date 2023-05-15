const fn = (n, k) => {
  const getNStr = (n) => {
    if (n === 1) {
      return "R";
    } else {
      let str = getNStr(n - 1);
      return (
        str
          .split("")
          .map((item) => {
            if (item === "R") {
              return "B";
            } else {
              return "R";
            }
          })
          .join("") + str
      );
    }
  };
  let str = getNStr(n);
  console.log(str);
  return str[k];
};

console.log(fn(1, 0));
console.log(fn(2, 1));
console.log(fn(3, 2));
console.log(fn(4, 6));
console.log(fn(5, 8));
