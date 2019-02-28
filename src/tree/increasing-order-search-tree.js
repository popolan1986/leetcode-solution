/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const values = [];
    const traverse = (node) => {
        if (!node) {
            return;
        }
        traverse(node.left);
        values.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    let newRoot = null;
    let pointer = null;
    values.forEach((value) => {
        const node = new TreeNode(value);
        if (!pointer) {
            newRoot = node;
            pointer = newRoot;
        } else {
            pointer.right = node;
            pointer = pointer.right;
        }
    });
    return newRoot
};