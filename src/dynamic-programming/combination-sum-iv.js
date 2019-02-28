// https://leetcode.com/problems/combination-sum-iv/
// 可以重复的背包的变种
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const goTarget = (p_nums, p_target, memo) => {
        if (p_target === 0) {
            return 1;
        }

        if (p_target < 0) {
            return 0;
        }

        if (memo[p_target] !== undefined) {
            return memo[p_target];
        }

        let result = 0;
        for (let i = 0; i < p_nums.length; i++) {
            result += goTarget(p_nums, p_target - p_nums[i], memo);
        }
        memo[p_target] = result;
        return result;
    };

    const memo = [];
    return goTarget(nums, target, memo);
};