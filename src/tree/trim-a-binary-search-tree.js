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
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    if (!root || L > R) {
        return null;
    }
    if (root.val >= L && root.val <= R) {
        root.left = trimBST(root.left, L, root.val-1);
        root.right = trimBST(root.right, root.val+1, R);
        return root;
    } else if (root.val < L) {
        return trimBST(root.right, L, R)
    } else {
        return trimBST(root.left, L, R)
    }
};

// test
const root = new TreeNode(3);
root.left = new TreeNode(0);
root.right = new TreeNode(4);
const actual = trimBST(root, 1, 2);