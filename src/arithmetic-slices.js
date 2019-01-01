/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    const length = A.length;
    let count = 0;
    for (let i = 2; i < length; i++) {
        let delta = undefined;
        let isArithmetic = true;
        for (let j = i - 2; j < i; j++) {
            if (delta === undefined) {
                delta = A[j + 1] - A[j];
            } else if (delta !== A[j+1] - A[j]) {
                isArithmetic = false;
            }
        }

        if (isArithmetic) {
            count += 1;
            for (let k = i + 1; k < length; k++) {
                if (A[k] - A[k-1] === delta) {
                    count += 1;
                } else {
                    break;
                }
            }
        }
    }

    return count;
};
// the above solution has lots of repeated calculations. We need a way to avoid it.

// the following solution has the same speed as the above one
/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices2 = function(A) {
    // initialize DP
    const length = A.length;
    const dp = [];
    for (let i = 0; i < length; i++) {
        dp[i] = [];
    }

    let count = 0;
    for (let i = 2; i < length; i++) {
        let delta = undefined;
        const q = i - 2;
        if (q - 1 >= 0 && dp[q-1][i]) {
            dp[q][i] = true;
            count += 1;
            delta = A[i] - A[i - 1];
        } else {
            let isArithmetic = true;
            for (let j = q; j < i; j++) {
                if (delta === undefined) {
                    delta = A[j + 1] - A[j];
                } else if (delta !== A[j+1] - A[j]) {
                    isArithmetic = false;
                }
            }

            if (isArithmetic) {
                dp[q][i] = true;
                count += 1;
            }
        }

        if (dp[q][i]) {
            for (let k = i + 1; k < length; k++) {
                if (A[k] - A[k-1] === delta) {
                    dp[q][k] = true;
                    count += 1;
                } else {
                    break;
                }
            }
        }
    }

    return count;
};

// 动态规划
var numberOfArithmeticSlices3 = function(A) {
    let dp = 0;
    let sum = 0;
    for (let i = 2; i < A.length; i++) {
        if (A[i] - A[i-1] === A[i-1] - A[i-2]) {
            dp = 1 + dp;
            sum += dp;
        } else {
            dp = 0;
        }
    }
    return sum;
};
