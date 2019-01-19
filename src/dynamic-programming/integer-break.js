/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // knapsack with repetition
    const dp = [];
    // base cases
    dp[0] = 0;
    dp[1] = 1;
    let maxproduct;

    for (let i = 2; i < n + 1; i++) {
        maxproduct = 1;
        for (let j = 1; j < i; j++) {
            maxproduct = Math.max(maxproduct, dp[i-j]*j, (i-j)*j);
        }
        dp[i] = maxproduct;
    }

    return dp[n];
};
// faster than 75.61%
// test
const actual = integerBreak(10);
