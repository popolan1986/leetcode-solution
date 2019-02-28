/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    return isUnivalTreeCore(root, root.val);
};

function isUnivalTreeCore(root, value) {
    if (root === null) {
        return true;
    }

    return root.val === value &&
        isUnivalTreeCore(root.left, value) &&
        isUnivalTreeCore(root.right, value);
}