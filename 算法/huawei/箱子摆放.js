const fn = (str, len) => {
  let num = str.length;

  let width = Math.ceil(num / len);

  let martix = new Array(len).fill(0).map((item) => new Array(width).fill(0));
  let count = 0;
  console.log(martix);

  for (let i = 0; i < width; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < len; j++) {
        martix[i][j] = str[count++];
      }
    } else {
      for (let j = len - 1; j >= 0; j--) {
        martix[i][j] = str[count++];
      }
    }
  }
};

console.log(fn("abcdefg", 3));
