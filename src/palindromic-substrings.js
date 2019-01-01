// 第一种：穷举法，找到所有字串，判断是否为回文字符串。我们当然不能用这个方法

/*
第二种：动态规划
我们创建一个矩阵DP来表示所有的子字符串， 矩阵存储该子字符串是不是回文。
检查DP[i][j]是一个回文需要满足如下条件：
1. string[i] === string[j]
2. DP[i+1][j-1]是回文
*/
function initializeDP(length) {
    const dp = [];
    for (let i = 0; i < length; i++) {
        dp[i] = [];
    }

    return dp;
}

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (!s) {
        return 0;
    }

    const length = s.length;
    const dp = initializeDP(length);
    let count = 0;

    for (let i = 0; i < length; i++) {
        for (let j = i; j >= 0; j--) {
            dp[i][j] = (s.charAt(i) === s.charAt(j)) && ( i-j < 2 || dp[i-1][j+1]);
            if (dp[i][j]) {
                count += 1;
            }
        }
    }

    return count;
};

// test case
const actual = countSubstrings('abc');
