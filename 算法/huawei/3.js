function getSteps(str) {
  let target = str.length / 4;

  let arr = str.split("");

  let map = new Map();

  arr.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });
  for (let i of "WASD") {
    if (map.get(i) > target) {
      map.set(i, map.get(i) - target);
    } else {
      map.delete(i);
    }
  }
  console.log(map);
  let res = arr.length;
  let left = 0;
  let right = 0;
  for (let i = 0; i < arr.length; i++) {
    right = i;
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) - 1);

      while ([...map.values()].every((item) => item <= 0)) {
        res = Math.min(right - left + 1, res);

        while (!map.has(arr[left])) {
          left++;
        }
        map.set(arr[left], map.get(arr[left]) + 1);
        left++;
      }
    }
  }
  return res;
}

console.log(getSteps("AAAAWWWW"));
