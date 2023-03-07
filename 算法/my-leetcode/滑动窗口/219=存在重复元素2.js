// 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

//

// 示例 1：

// 输入：nums = [1,2,3,1], k = 3
// 输出：true


let containsNearbyDuplicate = function(nums, k) {
	if (k < 1) {
		return false
	}
	let map = new Map()
	let slow = 0
	let fast = 0
	let count = nums.length
	while (count-- > 0) {
		if (map.has(nums[fast])) {
			return true
		} else {
			map.set(nums[fast], 0)
		}
	
		if (fast - slow === k) {
			map.delete(nums[slow])
			slow++
		}
		fast++
	}
	return false
};