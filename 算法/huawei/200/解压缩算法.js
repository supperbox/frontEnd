const fn = (str) => {
  let stack = [""];
  let pre = "";
  let times = 0;
  for (let j = 0; j < str.length; j++) {
    let i = str[j];
    if (/[a-zA-Z]/.test(i)) {
      pre = i;
      stack[stack.length - 1] += i;
    } else if (/[0-9]/.test(i)) {
      times = times * 10 + Number(i);
      if (!/[0-9]/.test(str[j + 1])) {
        while (--times > 0) {
          stack[stack.length - 1] += pre;
        }
        pre = "";
      }
    } else if (i === "{") {
      stack.push("");
    } else if (i === "}") {
      let sum = 0;
      while (/[0-9]/.test(str[++j])) {
        sum = sum * 10 + Number(str[j]);
      }
      j--;
      let temp = stack.pop();
      while (sum--) {
        stack[stack.length - 1] += temp;
      }
    }
  }
  return stack.pop();
};

console.log(fn("e15{A3{b}1c3}2"));
