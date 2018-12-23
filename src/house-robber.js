// dynamic programming solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const length = nums.length;
    if (length === 0) {
        return 0;
    }
    if (length === 1) {
        return nums[0];
    }

    const maxMoneys = [];
    maxMoneys[0] = nums[0];
    maxMoneys[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < length; i++) {
        maxMoneys[i] = Math.max(maxMoneys[i - 1], maxMoneys[i - 2] + nums[i]);
    }

    return maxMoneys[length - 1];
};