// 租车骑绿岛

const fn = (arr, limit) => {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let res = 0;
  console.log(arr);
  while (left < right) {
    while (arr[right] + arr[left] > limit && right > left) {
      right--;
      res++;
    }
    left++;
    right--;
    res++;
  }
  if (left === right) {
    res++;
  }
  return res;
};

console.log(fn([3, 2, 2, 1], 3));
