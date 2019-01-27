// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/
/**
 * @param {number[]} A
 * @return {number}
 */
// brute force
var lenLongestFibSubseq = function(A) {
    // previous 2 indexes
    let p2, p1;
    // current max
    let max = 0;
    for (let i = 0; i  < A.length-2; i++) {
        for (let k = i+1; k < A.length-1; k++) {
            p2 = i;
            p1 = k;
            let current = 2;
            for (let j = k+1; j < A.length; j++) {
                if (A[p2] + A[p1] === A[j]) {
                    p2 = p1;
                    p1 = j;
                    current += 1;
                } else if (A[p2] + A[p1] > A[j]) {
                    // update j
                    // do not update current
                } else if (A[p2] + A[p1] < A[j]) {
                    break;
                }
            }

            max = Math.max(max, current);
        }
    }

    return max <= 2 ? 0 : max;
};

// use set
const lenLongestFibSubseq2 = function (A) {
    const aSet = new Set(A);
    let max = 0;
    for (let i = 0; i < A.length-2; i++) {
        for (let j = i+1; j < A.length-1; j++) {
            let p2 = A[i], p1 = A[j], current = 2;
            while (aSet.has(p2 + p1)) {
                [p2, p1] = [p1, p2+p1];
                current += 1;
            }
            max = Math.max(max, current);
        }
    }

    return max > 2 ? max : 0;
};

// use DP
const lenLongestFibSubseq3 = function (A) {
    const valueToIndexMap = new Map();
    const dp = [];
    for (let i = 0; i < A.length; i++) {
        dp[i] = [];
    }
    let max = 0;
    for (let j = 0; j < A.length; j++) {
        valueToIndexMap.set(A[j], j);
        for (let i = 0; i < j; i++) {
            let k = valueToIndexMap.get(A[j]-A[i]);
            k = k !== undefined ? k : -1;
            // todo: why A[j] - A[i] < A[i]?
            if (k >= 0 && A[j]-A[i]<A[i]) {
                // tlan: here dp[i][j] means the length of sequence from i to j
                dp[i][j] = dp[k][i] + 1;
            } else {
                dp[i][j] = 2;
            }
            max = Math.max(max, dp[i][j]);
        }
    }
    return max > 2 ? max : 0;
};

// test case
const actual = lenLongestFibSubseq([2,4,5,6,7,8,11,13,14,15,21,22,34]);
