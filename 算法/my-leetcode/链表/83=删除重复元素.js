// 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

//  

// 示例 1：


// 输入：head = [1,1,2]
// 输出：[1,2]
// 示例 2：


// 输入：head = [1,1,2,3,3]
// 输出：[1,2,3]

let deleteDuplicates = function(head) {
	let map = new Map()
	let node = head
	let preNode = new ListNode(0,head)
	while (node) {
		let val = node.val
		if (map.has(val)) {
			preNode.next = node.next
		} else {
			map.set(val,val)
			preNode = node
		}
		node = node.next
	}
	return head
};