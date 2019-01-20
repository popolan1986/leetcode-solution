// https://leetcode.com/problems/target-sum/
// solution #1 todo tlan needs to figure out why this solution fails though the time complexity is O(2^n)
const findTarget = (nums, target, count) => {
    const tail = nums[nums.length - 1];
    // [0, end)
    const clone = nums.slice(0, nums.length - 1);
    [-1, 1].forEach((symbol) => {
        const newTarget = target - symbol * tail;
        if (clone.length === 0 && newTarget === 0) {
            count += 1;
        } else if (clone.length > 0 && newTarget !== 0) {
            findTarget(clone, newTarget, count);
        }
    });
    return count;
};

// solution #2
function findCore(cur, target, nums) {
    if (nums.length === 0 && cur === target) {
        return 1;
    }

    if (nums.length === 0 && cur !== target) {
        return 0;
    }

    const tail = nums[nums.length - 1];
    // [0, end)
    const clone = nums.slice(0, nums.length - 1);

    return findCore(cur + tail, target, clone) + findCore(cur - tail, target, clone);
}

// solution #3: use memo but it is not fast
class Memo {
    constructor() {
        this.list = [];
    }

    add(record, count) {
        this.list.push([record, count]);
    }

    has(record) {
        return this.list.findIndex((entry) => {
            return (entry[0].cur === record.cur && entry[0].count === record.count);
        });
    }

    get(index) {
        return this.list[index][1];
    }
}

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    // #1: return findTarget(nums, S, 0);
    return findCore(0, S, nums);
};

// solution #4
// #2
function findCore(cur, target, nums, memo) {
    if (nums.length === 0 && cur === target) {
        return 1;
    }

    if (nums.length === 0 && cur !== target) {
        return 0;
    }

    // memo
    if (memo[nums.length][cur] !== undefined) {
        return memo[nums.length][cur];
    }

    const tail = nums[nums.length - 1];
    // [0, end)
    const clone = nums.slice(0, nums.length - 1);

    const count = findCore(cur + tail, target, clone, memo) + findCore(cur - tail, target, clone, memo);
    memo[nums.length][cur] = count;
    return count;
}

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    const memo = [];
    for (let i = 1; i <= nums.length; i++) {
        memo[i] = [];
    }
    return findCore(0, S, nums, memo);
};
