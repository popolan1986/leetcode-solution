/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    // initialize DP
    const dp = [];
    for (let i = 0; i < s1.length; i++) {
        dp[i] = [];
    }

    dp[-1] = [];
    dp[-1][-1] = 0;

    // only move s1
    for (let i = 0; i < s1.length; i++) {
        dp[i][-1] = dp[i-1][-1] + s1.charCodeAt(i);
    }

    // only move s2
    for (let i = 0; i < s2.length; i++) {
        dp[-1][i] = dp[-1][i-1] + s2.charCodeAt(i);
    }

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1.charAt(i) === s2.charAt(j)) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = Math.min(dp[i-1][j] + s1.charCodeAt(i) ,dp[i][j-1] + s2.charCodeAt(j));
            }
        }
    }

    return dp[s1.length-1][s2.length-1];
};

// test case
const actual = minimumDeleteSum('sea', 'eat');
