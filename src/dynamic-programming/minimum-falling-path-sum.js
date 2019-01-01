const initializeDP = function(row) {
    const dp = [];
    for (let i = 0; i < row; i++) {
        dp[i] = [];
    }

    return dp;
};

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    const dp = initializeDP(A.length);
    let rowNum = A.length;
    let columnNum = A[0].length;
    for (let j = 0; j < columnNum; j++) {
        dp[0][j] = A[0][j];
    }
    for (let i = 1; i < rowNum; i++) {
        for (let j = 0; j < columnNum; j++) {
            dp[i][j] = A[i][j] + Math.min(dp[i - 1][j], dp[i - 1][Math.min(j + 1, columnNum - 1)], dp[i - 1][Math.max(j - 1, 0)]);
        }
    }

    return Math.min(...dp[rowNum - 1]);
};

// faster than 67.44%
// test case
const input = [
    [1, 2 ,3],
    [4, 5, 6],
    [7, 8, 9]
];
const actual = minFallingPathSum(input);