// https://leetcode.com/problems/binary-tree-inorder-traversal/
/**
 reference this article for inorder/preorder/postorder traversal 
 https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * recursive approach
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    
    const traverse = (p_Root) => {
        if (!p_Root) {
            return;
        }
        
        traverse(p_Root.left);
        result.push(p_Root.val);
        traverse(p_Root.right);
    };
    
    traverse(root);
    return result;
};

/**
 * iterating method
 * 迭代方法可以这样理解，用显示的stack来模拟递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal_2 = function(root) {
    const result = [];
    const stack = [];
    let cur = root;
    while (cur || stack.length !== 0) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        result.push(cur.val);
        cur = cur.right;
    }
    return result;
};