/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) {
        return 0;
    }

    let i = 0;
    // cache inserted position
    let j;
    while (i < nums.length) {
        if (nums[i] === val && j === undefined) {
            j = i;
        } else if (nums[i] !== val && j !== undefined) {
            nums[j] = nums[i];
            j++;
        }
        i++;
    }
    return j;
};

// faster than 59.63%