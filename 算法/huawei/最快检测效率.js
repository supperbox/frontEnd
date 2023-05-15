const fn = (arr, num) => {
  arr.sort((a, b) => b - a);
  let arr1 = arr.map((item) => 0.8 * item);
  let arr2 = arr.map((item) => 0.1 * item);
  let nums = new Array(arr.length).fill(0);

  while (num) {
    let max = 0;
    let index = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (nums[i] === 0) {
        let val = arr2[i] * 2;
        if (val > max) {
          max = val;
          index = i;
        }
      } else if (nums[i] === 3) {
        continue;
      } else {
        let val = arr2[i];
        if (val > max) {
          max = val;
          index = i;
        }
      }
    }
    arr1[index] += max;
    nums[index] += 1;
    num--;
  }
  console.log(nums);
  console.log(arr1);
  return arr1.reduce((a, b) => a + b);
};

console.log(fn([200, 300, 400, 500], 3));
