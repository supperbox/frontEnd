// 时间窗口内通过的车辆

const cars = (arr, num) => {
  let left = 0;
  let res = 0;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.get(arr[i]) ? map.get(arr[i]) + 1 : 1);
    if (i >= num) {
      map.set(arr[left], map.get(arr[left]) - 1);
      left++;
    }
    if (i >= num - 1) {
      [...map.values()].forEach((item) => {
        res = Math.max(item, res);
      });
    }
  }
  return res;
};

console.log(cars([0, 1, 2, 1], 3));
