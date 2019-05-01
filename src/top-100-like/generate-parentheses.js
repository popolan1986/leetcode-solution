// https://leetcode.com/problems/generate-parentheses/
// https://leetcode.com/problems/generate-parentheses/discuss/10127/An-iterative-method.
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	const lists = [];
	lists.push([""]);

	for (let i = 1; i <=n; i++) {
		const list = [];
		for (let j = 0; j < i; j++) {
			lists[j].forEach(f => {
				lists[i-1-j].forEach(s => {
					list.push('('+f+')'+s);
				})
			})
		}
		lists.push(list);
	}

	return lists.pop();
};