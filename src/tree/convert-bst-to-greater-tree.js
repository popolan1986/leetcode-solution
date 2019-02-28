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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0;
    const traverse = (node) => {
        if (!node) {
            return null;
        }
        traverse(node.right);
        sum += node.val;
        node.val = sum;
        traverse(node.left);
        return node;
    };
    return traverse(root);
};

// test
const root = new TreeNode(5);
root.left = new TreeNode(2);
root.right = new TreeNode(13);
const actual = convertBST(root);