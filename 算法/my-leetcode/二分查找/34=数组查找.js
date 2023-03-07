// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

//

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]


let searchRange = function (nums, target) {
	let l = 0
	let r = nums.length - 1
	while (l <= r) {
		let mid = Math.floor((l + r) / 2)
		if (nums[mid] > target) {
			r = mid - 1
		} else if (nums[mid] < target) {
			l = mid + 1
		} else {
			let left = mid
			let right = mid
			while (nums[right] === target) {
				right++
			}
			while (nums[left] === target) {
				left--
			}
			right = right - 1
			left = left + 1
			// if (left === right) {
			// 	break
			// }
			return [left,right]
		}
	}
	return [-1,-1]
}


console.log(searchRange([1,2,2,2,3],2));