// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

//

// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

let isBalanced = function (root) {
  if (!root) {
    return true;
  }
  if (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(deep(root.left) - deep(root.right)) < 2
  ) {
    return true;
  }
  return false;
};

function deep(node) {
  if (!node) {
    return 0;
  }
  return Math.max(deep(node.left), deep(node.right)) + 1;
}
