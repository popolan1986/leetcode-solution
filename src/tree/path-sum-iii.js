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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return 0;
    }

    return findTarget(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

function findTarget(root, target) {
    if (!root) {
        return 0;
    }

    const newTarget = target-root.val;
    if (newTarget === 0) {
        return 1;
    }
    return findTarget(root.left, newTarget) + findTarget(root.right, newTarget);
}

// test
/*
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(-3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(2);
root.right.right = new TreeNode(11);
const root5 = findTarget(root.left, 8);
console.log(root5);
const rootNeg3 = findTarget(root.right, 8);
console.log(rootNeg3);*/
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.right = new TreeNode(3);
root.right.right.right = new TreeNode(4);
const actual = findTarget(root.right, 3);
console.log(actual);
