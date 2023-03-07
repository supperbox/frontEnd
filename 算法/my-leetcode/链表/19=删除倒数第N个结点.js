// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

//

// 示例 1：


// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：

// 输入：head = [1,2], n = 1
// 输出：[1]

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

let removeNthFromEnd = function (head, n) {
	let map = new Map()
	let node = head
	let count = 0
	while (node) {
		count++
		map.set(count, node)
		node = node.next
	}
	if (count - n === 0) {
		return head.next
	}
	let leftNode = map.get(count - n)
	leftNode.next = leftNode.next.next
	return head
}

// 快慢指针
let removeNthFromEnd2 = function (head, n) {
	let preNode = new ListNode(0, head)
	let fast = preNode
	let slow = preNode

	while (n-- > 0) {
		fast = fast.next
	}

	while (fast.next) {
		fast = fast.next
		slow = slow.next
	}
	slow.next = slow.next.next
	return preNode.next
}