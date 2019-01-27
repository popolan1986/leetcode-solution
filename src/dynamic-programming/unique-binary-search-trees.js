// https://leetcode.com/problems/unique-binary-search-trees/
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    return countTree(1, n);
};

function countTree(start, end) {
    if (start >= end) {
        return 1;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        const left = countTree(start, i-1);
        const right = countTree(i+1, end);
        sum += left * right;
    }

    return sum;
}

// with memo
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const memo = [];
    for (let i = 1; i <=n; i++) {
        memo[i] = [];
    }
    return countTree(1, n, memo);
};

function countTree(start, end, memo) {
    if (start >= end) {
        return 1;
    }

    // check memo
    if (memo[start][end] !== undefined) {
        return memo[start][end];
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        const left = countTree(start, i-1, memo);
        const right = countTree(i+1, end, memo);
        sum += left * right;
    }

    memo[start][end] = sum;
    return sum;
}

// test case
const actual = numTrees(3);