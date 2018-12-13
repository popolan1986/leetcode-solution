/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const length = nums.length;
    if (length === 1) {
        return nums[0];
    }

    let max = nums[0];
    let result = 0;
    for (let i = 0; i < length; i++) {
        result += nums[i];
        if (result > max) {
            max = result;
        }
        if (result <= 0) {
            result = 0;
        }
    }

    return max;
};

// faster than 100%
