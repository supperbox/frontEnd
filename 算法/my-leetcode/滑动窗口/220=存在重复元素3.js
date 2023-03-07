// 给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

// 如果存在则返回 true，不存在返回 false。

//

// 示例 1：

// 输入：nums = [1,2,3,1], k = 3, t = 0
// 输出：true
// 示例 2：

// 输入：nums = [1,0,1,1], k = 1, t = 2
// 输出：true

var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  let k = indexDiff;
  let t = valueDiff;
  if (k < 1) {
    return false;
  }
  let slow = 0;
  let fast = 0;
  let arr = [];
  let count = nums.length;
  while (count-- > 0) {
    if (arr.includes(nums[fast])) {
      return true;
    } else {
      arr.push(nums[fast]);
      let index = t;
      while (index > 0) {
        arr.push(nums[fast] - index);
        arr.push(nums[fast] + index);
        index--;
      }
    }
    if (fast - slow === k) {
      arr = arr.slice(2 * t + 1);
      slow++;
    }
    fast++;
  }
  return false;
};

var containsNearbyAlmostDuplicate2 = function (nums, indexDiff, valueDiff) {
  let k = indexDiff;
  let t = valueDiff;
  if (k < 1) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let id = getTubId(nums[i]);
    if (
      map.has(id) ||
      (map.has(id - 1) && Math.abs(map.get(id - 1) - nums[i]) <= t) ||
      (map.has(id + 1) && Math.abs(map.get(id + 1) - nums[i]) <= t)
    ) {
      return true;
    }
    map.set(id, nums[i]);
    if (i >= k) {
      map.delete(getTubId(nums[i - k]));
    }
  }
  return false;
  function getTubId(num) {
    return num > 0
      ? Math.floor(num / (t + 1))
      : Math.floor((num + 1) / (t + 1) - 1);
  }
};

console.log(containsNearbyAlmostDuplicate2([-3, 3], 2, 4));
