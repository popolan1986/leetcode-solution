// https://leetcode.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	const result = [];
	permutation(nums, result, 0, nums.length);
	return result;
};

function swap(nums, i, j) {
	const tmp = nums[i];
	nums[i] = nums[j];
	nums[j] = tmp;
}

function permutation(nums, res, begin, end) {
	if (begin === end) {
		// clone the nums otherwise it will be overwritten later
		res.push(nums.slice());
	}

	for (let i = begin; i < end; i++) {
		swap(nums, i, begin);
		permutation(nums, res, begin+1, end);
		swap(nums, i, begin);
	}
}

// test
const actual = permute([1,2,3]);
console.log(actual);