// https://leetcode.com/problems/product-of-array-except-self/
// this solution is very slow
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	const res = [];
	for (let i = 0; i < nums.length; i++) {
		res[i] = nums.reduce((acc, cur, index) => {
			if (i === index) {
				return acc;
			} else {
				acc *= cur;
				return acc;
			}
		}, 1);
	}
	return res;
};