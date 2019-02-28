/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    }
    if (p && q) {
        return p.val === q.val &&
            isSameTree(p.left, q.left) &&
            isSameTree(p.right, q.right);
    }
    return false;
};

// test
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
const root2 = new TreeNode(1);
root2.right = new TreeNode(2);
const actual = isSameTree(root1, root2);