/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    // dp[i] = max(1 + dp[prev(i)], dp[i-1])
    const lengthOfPair = pairs.length;
    if (lengthOfPair < 2) {
        return lengthOfPair;
    }

    // sort pairs by the first element
    pairs.sort((l, r) => l[0] - r[0]);

    const prev = Array(lengthOfPair).fill(-1);
    for (let i = 1; i < lengthOfPair; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (pairs[i][0] > pairs[j][1]) {
                prev[i] = j;
                break;
            }
        }
    }

    const dp = [];
    dp[-1] = 0;
    for (let i = 0; i < lengthOfPair; i++) {
        dp[i] = Math.max(1 + dp[prev[i]], dp[i-1]);
    }

    return dp[lengthOfPair-1];
};

/*
参考https://www.youtube.com/watch?v=1BAsAgdx7Ac
这个一个典型的‘选或者不选的问题’
**/
