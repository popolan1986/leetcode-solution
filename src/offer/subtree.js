function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
const doesTree1HaveTree2 = (pRoot1, pRoot2) => {
    if (pRoot2 === null) {
        return true;
    }
    if (pRoot1 === null) {
        return false;
    }
    return pRoot1.val === pRoot2.val && doesTree1HaveTree2(pRoot1.left, pRoot2.left) && doesTree1HaveTree2(pRoot1.right, pRoot2.right);
}

function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    // recursion exit condition
    if (!pRoot1 || !pRoot2) {
        return false;
    }
    
    let result = false;
    if (pRoot1.val === pRoot2.val) {
        result = doesTree1HaveTree2(pRoot1, pRoot2);
    }
    if (!result) {
        result = HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
    }
    return result;
}

// test
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
const root2 = root1.left;
root2.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
const result = HasSubtree(root1, root2);
console.log(result);