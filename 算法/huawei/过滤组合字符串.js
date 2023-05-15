const fn = (str, stopStr) => {
  const map = [
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqr",
    "st",
    "uv",
    "wx",
    "yz",
  ];
  let arr = new Array(str.length).fill(0).map((item, index) => map[str[index]]);
  let res = [];

  function getAllStr(str, index) {
    let strs = arr[index];

    for (let i = 0; i < strs.length; i++) {
      let newStr = str + strs[i];
      if (index === arr.length - 1) {
        if (newStr !== stopStr) {
          res.push(newStr);
        }
      } else {
        let newLen = index + 1;
        getAllStr(newStr, newLen);
      }
    }
  }

  getAllStr("", 0);
  return res;
};

console.log(fn("79", "uz"));
