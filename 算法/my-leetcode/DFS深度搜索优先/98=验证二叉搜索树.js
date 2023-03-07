// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

// 有效 二叉搜索树定义如下：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
//

// 示例 1：

// 输入：root = [2,1,3]
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
let isValidBST = function (root) {
  if (!root) {
    return true;
  }
  if (
    isValidBST(root.left) &&
    isValidBST(root.right) &&
    root.val > bigValue(root.left) &&
    root.val < smallValue(root.right)
  ) {
    return true;
  }
  return false;
};

function bigValue(node) {
  if (!node) {
    return -Infinity;
  }
  return Math.max(node.val, bigValue(node.left), bigValue(node.right));
}

function smallValue(node) {
  if (!node) {
    return Infinity;
  }
  return Math.min(node.val, smallValue(node.left), smallValue(node.right));
}

let isValidBST2 = function (root) {
  let stack = [];
  let value = -Infinity;

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= value) {
      return false;
    }
    value = root.val;
    root = root.right;
  }
  return true;
};
