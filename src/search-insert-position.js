/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    let middleValue;
    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        middleValue = nums[middle];
        if (target === middleValue) {
            return middle;
        } else if (target < middleValue) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return right + 1;
};

// test case
const inputNums = [1, 3, 5, 6];
const target = 7;
searchInsert(inputNums, target);