// https://leetcode.com/problems/subsets/
// https://leetcode.com/problems/subsets/discuss/27278/C%2B%2B-RecursiveIterativeBit-Manipulation
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	const result = [];
	result.push([]);
	if (nums.length === 0) {
		return result;
	}
	for (let i = 0; i < nums.length; i++) {
		const list = [];
		list.push(nums[i]);
		result.push(list);
	}
	for (let i = 2; i <= nums.length; i++) {
		for (let j = 0; j < nums.length-i+1; j++) {
			for (let k = j+i-1; k < nums.length; k++) {
				const cur = [];
				cur.push(...nums.slice(j,j+i-1));
				cur.push(nums[k]);
				result.push(cur);
			}
		}
	}
	return result;
};

const actual = subsets([1,2,3]);
console.log(actual);