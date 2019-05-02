// https://leetcode.com/problems/combination-sum/
// backtracking solution
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	const res = [];
	const cur = [];
	comSum(candidates, target, res, cur);
	return res;
};

function comSum(candidates, target, res, cur) {
	if (target === 0) {
		res.push(cur.slice());
	}

	for (let i = 0; i < candidates.length; i++) {
		// 这里是剪枝，减小递归的规模
		if (candidates[i] < cur[cur.length-1] || target - candidates[i] < 0) {
			continue;
		}
		cur.push(candidates[i]);
		comSum(candidates, target - candidates[i], res, cur);
		cur.pop();
	}
}