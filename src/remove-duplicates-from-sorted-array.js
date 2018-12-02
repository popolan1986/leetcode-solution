/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return 1;
    }

    let lastIndex = 0;
    let i = 1;
    while (i < nums.length) {
        if (nums[lastIndex] !== nums[i]) {
            // update last index
            lastIndex++;
            nums[lastIndex] = nums[i];
        }
        i++;
    }

    return lastIndex + 1;
};

// faster than 100% of JavaScript online submissions