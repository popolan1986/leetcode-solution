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
 * @return {number}
 */
var findTilt = function(root) {
    if (!root) {
        return 0;
    }

    let sumOfLeft = 0, sumOfRight = 0;
    if (root.left) {
        if (!root.left.left && !root.left.right) {
            sumOfLeft += root.left.val;
        } else {
            sumOfLeft += findTilt(root.left);
        }
    }
    if (root.right) {
        if (!root.right.left && !root.right.right) {
            sumOfRight += root.right.val;
        } else {
            sumOfRight += findTilt(root.right);
        }
    }
    return Math.abs(sumOfLeft-sumOfRight);
};