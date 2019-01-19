const primeNumsIn1000 = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ];

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n === 1) {
        return 0;
    }

    const dp = [];
    dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            dp[i] = dp[i/2] + 2;
        } else if (i % 3 === 0) {
            dp[i] = dp[i/3] + 3;
        } else if (i % 5 === 0) {
            dp[i] = dp[i/5] + 5;
        } else if (i % 7 === 0) {
            dp[i] = dp[i/7] + 7;
        } else if (i % 11 === 0) {
            dp[i] = dp[i/11] + 11;
        } else if (i % 13 === 0) {
            dp[i] = dp[i/13] + 13;
        } else if (i % 17 === 0) {
            dp[i] = dp[i/17] + 17;
        } else if (i % 19 === 0) {
            dp[i] = dp[i/19] + 19;
        } else if (i % 23 === 0) {
            dp[i] = dp[i/23] + 23;
        } else if (i % 29 === 0) {
            dp[i] = dp[i/29] + 29;
        } else if (i % 31 === 0) {
            dp[i] = dp[i/31] + 31;
        } else {
            dp[i] = i;
        }
    }

    return dp[n];
};

const minSteps2 = function (n) {
    let result = 0, d = 2;
    while (n > 1) {
        while (n % d === 0) {
            result += d;
            n /= d;
        }
        d++;
    }

    return result;
};