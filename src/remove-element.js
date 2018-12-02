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

// faster than 59.63%. In this solution I didn't notice that I can change the order of the array

// solution 2: change the order of the array. faster than 100%
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function(nums, val) {
    if (nums.length === 0) {
        return 0;
    }

    let i = 0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--;
        } else {
            i++;
        }
    }
    return n;
};