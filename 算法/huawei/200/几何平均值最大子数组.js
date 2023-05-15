const fn = (arr, long) => {
  let stack = [];
  for (let j = long; j <= arr.length; j++) {
    stack.push(arr.slice(0, j));
  }
  let begin = 0;
  let length = 0;
  let max = 0;
  let first = 0;
  while (stack.length) {
    console.log(stack);
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let temp = stack.shift();
      if (temp.length < long) {
        continue;
      } else {
        let leng = temp.length;
        let sum = temp.reduce((a, b) => a + b);
        let cacl = Math.pow(sum, 1 / leng);

        if (cacl > max) {
          max = cacl;
          begin = first;
          length = leng;
        } else if (cacl === max) {
          if (leng < length) {
            begin = first;
            length = leng;
          }
        }
      }
      temp.shift();
      if (temp.length >= long) {
        stack.push(temp);
      }
    }
    first++;
  }
  return [begin, length];
};

console.log(fn([2, 2, 3], 2));
