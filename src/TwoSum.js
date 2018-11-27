/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndexMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const pair = target - nums[i];
        const findIndex = numToIndexMap.get(pair);
        if (findIndex !== undefined) {
            return [findIndex, i];
        }
        numToIndexMap.set(nums[i], i);
    }
    throw new Error('not a two sum');
};