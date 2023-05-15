/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  nums.sort((a, b) => a - b);
  let sum = nums.reduce((a, b) => a + b, 0);

  if (sum % k > 0) {
    return false;
  }
  sum = sum / k;

  if (nums.some((item) => item > sum)) {
    return false;
  }

  let res = false;
  let arr = nums;
  let map = new Map();

  console.log(arr, sum);
  function getSum(start, tar) {
    if (res) {
      return;
    }
    if (map.size === arr.length && tar === sum) {
      res = true;
    }
    for (let i = start; i < arr.length; i++) {
      if (map.has(i)) {
        continue;
      }
      if (arr[i] <= tar) {
        map.set(i);
        if (tar - arr[i] === 0) {
          getSum(0, sum);
        } else {
          getSum(i + 1, tar - arr[i]);
        }
        map.delete(i);
      }
    }
  }
  getSum(0, sum);
  return res;
};

console.log(
  canPartitionKSubsets([6, 5, 9, 6, 3, 5, 1, 10, 4, 1, 4, 3, 9, 9, 3, 3], 9)
);

function canPartition(arr, sum, count) {
  if (sum % count) return false;
  let subSum = sum / count;
  if (subSum < arr[0]) return false;
  while (arr[0] === subSum) {
    arr.shift();
    count--;
  }
  const buckets = new Array(count).fill(0);
  return partition(0, arr, subSum, buckets);
}

function partition(index, arr, subSum, buckets) {
  console.log(index, subSum, buckets);
  if (index === arr.length) {
    return true;
  }
  const select = arr[index];
  for (let i = 0; i < buckets.length; i++) {
    if (i > 0 && buckets[i] === buckets[i - 1]) continue;
    if (buckets[i] + select <= subSum) {
      buckets[i] += select;
      if (partition(index + 1, arr, subSum, buckets)) return true;
      buckets[i] -= select;
    }
  }
  return false;
}

const fn = (arr) => {
  let len = arr.length;
  let sum = arr.reduce((a, b) => a + b);
  let count = 6;
  // let count = len;
  while (count >= 1) {
    if (canPartition([...arr], sum, count)) {
      return sum / count;
    }
    count--;
  }
};

console.log(fn([5, 2, 1, 5, 2, 1, 5, 2, 1]));
