// https://leetcode.com/problems/maximum-length-of-repeated-subarray/
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    // dp[j][i] means the longest common prefix of A[i:] & B[j:]
    const dp = [];
    // 2d array: B length * A length
    for (let i = -1; i < B.length; i++) {
        dp[i] = new Array(A.length);
        dp[i].fill(0);
        dp[i][-1] = 0;
    }

    let max = 0;
    for (let j = 0; j < B.length; j++) {
        for (let i = 0; i < A.length; i++) {
            if (A[i] === B[j]) {
                dp[j][i] = dp[j-1][i-1] + 1;
            }
            max = Math.max(max, dp[j][i]);
        }
    }

    return max;
};