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
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) {
        return '';
    }

    const stringBuilder = [];
    stringBuilder.push(t.val);
    preorderTraverse(t.left, stringBuilder);
    preorderTraverse(t.right, stringBuilder);
    return stringBuilder.join('');
};

function preorderTraverse(root, stringBuilder) {
    if (!root) {
        return ''
    }

    stringBuilder.push('(');
    stringBuilder.push(root.val);
    preorderTraverse(root.left, stringBuilder);
    preorderTraverse(root.right, stringBuilder);
    stringBuilder.push(')');
}

// test
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
const actual = tree2str(root);