/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    return winner(nums, 0, nums.length - 1, 1) >= 0;
};

function winner(nums, start, end, turn) {
    if (start === end) {
        return turn * nums[start];
    }

    const choose1 = turn * nums[start] + winner(nums, start + 1, end, -turn);
    const choose2 = turn * nums[end] + winner(nums, start, end - 1, -turn);
    return turn * Math.max(turn * choose1, turn * choose2);
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner2 = function(nums) {
    const memo = [];
    for (let i = 0; i < nums.length; i++) {
        memo[i] = [];
    }
    return winner(nums, 0, nums.length-1, memo) >= 0;
};

function winner2(nums, start, end, memo) {
    if (start === end) {
        return nums[start];
    }

    if (memo[start][end] !== undefined) {
        return memo[start][end];
    }
    const choose1 = nums[start] - winner2(nums, start+1, end, memo);
    const choose2 = nums[end] - winner2(nums, start, end-1, memo);
    memo[start][end] = Math.max(choose1, choose2);
    return memo[start][end];
}