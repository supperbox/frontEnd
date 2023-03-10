var maxArea = function (height) {
  let leng = height.length;
  let res = Number.MIN_VALUE;
  console.log(res);
  while (leng) {
    let min = Number.MAX_VALUE;
    let minArr = [];

    // 剪出数组首尾的0项
    let first = height.findIndex((item) => {
      return item > 0;
    });
    height = height.slice(first);

    let reHeight = height.reverse();
    let last = reHeight.findIndex((item) => {
      return item > 0;
    });

    reHeight = reHeight.slice(last);
    height = reHeight.reverse();

    // 找到数组中的最小数
    height.forEach((item) => {
      if (item !== 0) {
        min = Math.min(item, min);
      }
    });

    // 收集所有的最小数
    height.forEach((item, index) => {
      if (item === min) {
        minArr.push(index);
      }
    });

    // 遍历最小数
    let length = height.length;
    minArr.forEach((item) => {
      res = Math.max(res, height[item] * Math.max(item, length - item));
      // 首尾的0都会被剪除
      height[item] = 0;
    });

    leng--;
  }
  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

function maxArea2(arr) {
  let left = 0;
  let right = arr.length - 1;
  let res = 0;
  while (left < right) {
    let leftValue = arr[left];
    let rightValue = arr[right];
    if (leftValue < rightValue) {
      res = Math.max(res, leftValue * (right - left));
      left++;
    } else {
      res = Math.max(res, rightValue * (right - left));
      right--;
    }
  }
  return res;
}

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
