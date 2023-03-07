// 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表

var deleteDuplicates = function(head) {
	let preNode = new ListNode(-101, head)
	let node = preNode
	let pre = preNode
    let value = -101
	while (node) {
		if ((node.next && node.val === node.next.val) || node.val === value) {
            value = node.val
			node = node.next
			pre.next = node
		} else {
			pre = node 
			node = node.next
		}
	}
	return preNode.next
};


let deleteDuplicates2 = function(head) {
	let preNode = new ListNode(0, head)
	let node = preNode

	while (node.next && node.next.next) {
		if (node.next.val === node.next.next.val) {
			let value = node.next.val
			while (node.next && node.next.val === value) {
				node.next = node.next.next
			}
		} else {
			node = node.next
		}
	}
	return preNode.next
};