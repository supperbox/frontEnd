// 给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

// 以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

// 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

// 你所设计的解决方案必须只使用常量级的额外空间。

//
// 示例 1：

// 输入：numbers = [2,7,11,15], target = 9
// 输出：[1,2]
// 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
// 示例 2：

// 输入：numbers = [2,3,4], target = 6
// 输出：[1,3]
// 解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
// 示例 3：

// 输入：numbers = [-1,0], target = -1
// 输出：[1,2]
// 解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。


// 复杂度 O[n方]
let twoSum = function (arr, target) {
	let ans = []
	for (let i = 0; i < arr.length-1 ; i++){
		let a = arr[i]
		for (let j = i + 1; j < arr.length; j++){
			let b = arr[j]
			let sum = a + b
			if (sum === target) {
				ans.push(i)
				ans.push(j)
				return ans
			} else if (sum > target) {
				break
			}
		}
	}
}

// 双指针版本
let twoSum2 = function (arr, target) {
	let l = 0
	let r = arr.length - 1
	while (l < r) {
		let sum = arr[l] + arr[r]
		if (sum === target) {
			return [l,r]
		} else if (sum < target) {
			l = l + 1
		} else {
			r = r - 1
		}
	}
}


console.log(twoSum2([1,2,3,4,5],8));