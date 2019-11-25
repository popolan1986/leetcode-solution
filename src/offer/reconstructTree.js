function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function reConstructBinaryTree(pre, vin) {
    // write code here
    if (!Array.isArray(pre) || pre.length === 0) {
        return null;
    }
    // search rootVal in the mid-order traverse array to split the left and right subtree
    const rootIndex = vin.findIndex((el) => el === pre[0]);
    const node = new TreeNode(pre[0]);
    const leftLength = rootIndex;
    node.left = reConstructBinaryTree(pre.slice(1, leftLength+1), vin.slice(0, Math.max(0,rootIndex)));
    node.right = reConstructBinaryTree(pre.slice(1+leftLength), vin.slice(rootIndex+1));
    return node;
}

// test
const preOrder = [1,2,4,7,3,5,6,8];
const minOrder = [4,7,2,1,5,3,8,6];
const treeRoot = reConstructBinaryTree(preOrder, minOrder);
console.log(treeRoot);