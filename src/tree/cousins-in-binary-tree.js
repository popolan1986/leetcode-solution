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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (!root) {
        return false
    }

    if (root.left && root.right) {
        let queue = [];
        queue.push(root.left);
        queue.push(root.right);
        while (queue.length > 0) {
            let found;
            let temp = [];
            for (let i = 0; i < queue.length; i++) {
                const e = queue[i];
                if (found === undefined) {
                    if (e.left && e.right) {
                        if (e.left.val === x && e.right.val === y) {
                            return false;
                        } else if (e.left.val === x || e.right.val === x) {
                            found = x
                        } else if (e.left.val === y || e.right.val === y) {
                            found = y
                        }
                        temp.push(e.left);
                        temp.push(e.right);
                    } else if (e.left) {
                        if (e.left.val === x) {
                            found = x
                        } else if (e.right.val === y) {
                            found = y
                        }
                        temp.push(e.left);
                    } else if (e.right) {
                        if (e.right.val === x) {
                            found = x
                        } else if (e.right.val === y) {
                            found = y
                        }
                        temp.push(e.right);
                    }
                } else {
                    if (e.left && e.right) {
                        if (e.left.val === x && e.right.val === y) {
                            return false;
                        } else if (found === y && (e.left.val === x || e.right.val === x)) {
                            return true
                        } else if (found === x && (e.left.val === y || e.right.val === y)) {
                            return true
                        }
                        temp.push(e.left);
                        temp.push(e.right);
                    } else if (e.left) {
                        if (found === y && e.left.val === x) {
                            return true
                        } else if (found === x && e.right.val === y) {
                            return true
                        }
                        temp.push(e.left);
                    } else if (e.right) {
                        if (found === y && e.right.val === x) {
                            return true
                        } else if (found === x && e.right.val === y) {
                            return true
                        }
                        temp.push(e.right);
                    }
                }
            }
            queue = temp;
        }
    }
    return false;
};

// test
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(5);
const actual = isCousins(root, 5, 4);