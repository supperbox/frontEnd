// 有两个水壶，容量分别为 jug1Capacity 和 jug2Capacity 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 targetCapacity 升。

// 如果可以得到 targetCapacity 升水，最后请用以上水壶中的一或两个来盛放取得的 targetCapacity 升水。

// 你可以：

// 装满任意一个水壶
// 清空任意一个水壶
// 从一个水壶向另外一个水壶倒水，直到装满或者倒空

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/water-and-jug-problem
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

let canMeasureWater = function (a, b, c) {
  if (a + b === c) {
    return true;
  }
  let big = Math.max(a, b);
  let small = Math.min(a, b);
  let index = big;
  let arr = [];
  while (index > small) {
    arr.push(index - small);
    index = index - small;
  }
  console.log(arr);
  let arr2 = [];
  arr.forEach((item) => {
    if (item < small) {
      arr2.push(big + item - small);
    }
  });
  arr = [...arr, ...arr2];
  console.log(arr);
  return arr.some((item) => {
    if (item + a === c || item + b === c || item === c) {
      return true;
    }
  });
};

console.log(canMeasureWater(3, 5, 4));
