// 给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。

// 输入：root = [1,3,null,null,2]
// 输出：[3,1,null,null,2]
// 解释：3 不能是 1 的左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。

let recoverTree = function (root) {
  let value = [];
  function dfs(node) {
    if (!node) {
      return;
    }
    dfs(node.left);
    value.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  value.sort((a, b) => a - b);

  function setVal(node) {
    if (!node) {
      return;
    }
    setVal(node.left);
    node.val = value.shift();
    setVal(node.right);
  }
  setVal(root);
  return root;
};
