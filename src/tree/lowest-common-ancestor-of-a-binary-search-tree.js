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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const visitedMap = new Map();
    const search = (node, num) => {
        if (!node) {
            return false;
        }

        if (visitedMap.has(node)) {
            visitedMap.set(node, visitedMap.get(node)+1);
        } else {
            visitedMap.set(node, 1);
        }
        if (node.val === num) {
            return true;
        } else if (num < node.val) {
            search(node.left, num);
        } else {
            search(node.right, num);
        }
    };
    search(root, p.val);
    search(root, q.val);
    for (let key of Array.from(visitedMap.keys()).reverse()) {
        if (visitedMap.get(key) === 2) {
            return key;
        }
    }
};

// test
const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
const actual = lowestCommonAncestor(root, root.left, root.right);
console.log(actual);