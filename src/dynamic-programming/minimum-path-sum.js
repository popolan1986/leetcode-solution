// https://leetcode.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // dp[i][j] means the minimum path sum at the position i,j
    // dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    // todo tlan: consider to reuse grid structure to reduce the time. Now faster than 30% online submission
    const row = grid.length;
    const column = grid[0].length;
    const dp = [];
    for (let i = 0; i < row; i++) {
        dp[i] = [];
    }

    dp[0][0] = grid[0][0];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (i === 0 && j === 0) {
                // skip
            } else if (i === 0) {
                dp[i][j] = dp[i][j-1] + grid[i][j];
            } else if (j === 0) {
                dp[i][j] = dp[i-1][j] + grid[i][j];
            } else {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
            }
        }
    }

    return dp[row-1][column-1];
};

// test case
const testGrid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
];
const actual = minPathSum(testGrid);