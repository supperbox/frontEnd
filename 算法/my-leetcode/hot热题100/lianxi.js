let times = 3;
let begin = "2 1 5";
let end = "6 3 7";

let beginArr = begin.split(" ");
let endArr = end.split(" ");
let arr = [];
let min = Number.MAX_VALUE;
let max = 0;
for (let i = 0; i < times; i++) {
  let a = beginArr[i];
  let b = endArr[i];
  min = Math.min(a, min);
  max = Math.max(b, max);
  arr.push([a, b]);
}

console.log(arr);
let result = [];
for (let i = min; i <= max; i++) {
  let res = 0;
  arr.forEach((item) => {
    if (i >= item[0] && i <= item[1]) {
      res++;
    }
  });
  result.push(res);
}

let big = 0;
result.forEach((item) => {
  big = Math.max(item, big);
});

let tip = 0;
result.forEach((item) => {
  if (item === big) {
    tip++;
  }
});

console.log(big, " ", tip);
