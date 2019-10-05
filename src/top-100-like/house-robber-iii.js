// https://leetcode.com/problems/house-robber-iii/
// solution 1 is wrong. Think of this case: [2,1,3,null,4]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
	if (!root) {
		return 0;
	}
	const dp = [];
	dp[-2] = 0;
	dp[-1] = 0;
	let queue = [];
	queue.push(root);
	let level = 0;
	while (queue.length > 0) {
		const tmp = [];
		let cur = 0;
		queue.forEach(e => {
			e.left && tmp.push(e.left);
			e.right && tmp.push(e.right);
			cur += e.val;
		});
		dp[level] = Math.max(dp[level-2] + cur, dp[level-1]);
		// update queue
		queue = tmp;
		// update level
		level++;
	}
	return dp.pop();
};

// solution 2 is right
var rob = function(root) {
	if (!root) {
		return 0;
	}

	let choose = root.val;
	if (root.left) {
		choose += rob(root.left.left) + rob(root.left.right);
	}
	if (root.right) {
		choose += rob(root.right.left) + rob(root.right.right);
	}
	const notChoose = rob(root.left) + rob(root.right);
	return Math.max(choose, notChoose);
};

// solution 3: DP,记录中间结果，优化第二种方案
var rob = function(root) {
	const memo = new Map();
	return robWithMemo(root, memo);
};

function robWithMemo(root, memo) {
	if (!root) {
		return 0;
	}

	if (memo.has(root)) {
		return memo.get(root);
	}

	let choose = root.val;
	if (root.left) {
		choose += robWithMemo(root.left.left, memo) + robWithMemo(root.left.right, memo);
	}
	if (root.right) {
		choose += robWithMemo(root.right.left, memo) + robWithMemo(root.right.right, memo);
	}
	const notChoose = robWithMemo(root.left, memo) + robWithMemo(root.right, memo);
	const max = Math.max(choose, notChoose);
	memo.set(root, max);
	return max;
}