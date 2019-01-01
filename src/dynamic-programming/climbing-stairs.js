function findSolution(target, ways) {
    let res;
    [1, 2].forEach((step) => {
        res = target - step;
        if (res === 0) {
            ways += 1;
            // find a solution
        } else if (res < 0) {
            // this is not a solution
        } else {
            findSolution(res, ways);
        }
    });

    return ways;
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return findSolution(n, 0);
};

// test case
const actual = climbStairs(44);
console.log(actual);

// the above solution is very slow. The time complexity is O(2^n)

function climbStairsCore(i, n, memo) {
    if (i > n) {
        return 0;
    }

    if (i === n) {
        return 1;
    }

    if (memo[i] > 0) {
        return memo[i];
    }

    memo[i] = climbStairsCore(i + 1, n, memo) + climbStairsCore(i + 2, n, memo);
    return memo[i];
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function(n) {
    const memo = [];
    return climbStairsCore(0, n, memo);
};
