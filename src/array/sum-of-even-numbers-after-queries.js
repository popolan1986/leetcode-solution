// https://leetcode.com/problems/sum-of-even-numbers-after-queries/
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    return queries.map((query, index) => {
        A[query[1]] += query[0];
        return A.filter((a) => a%2 === 0).reduce((acc, cur) => {
            acc += cur;
            return acc;
        }, 0);
    });
};

var sumEvenAfterQueries2 = function(A, queries) {
    const evenBit = new Array(A.length).fill(false);
    let sum = 0;
    A.forEach((a, index) => {
        if (a%2 === 0) {
            evenBit[index] = true;
            sum += a;
        }
    });
    const answer = [];
    queries.forEach((query, index) => {
        if (evenBit[query[1]]) {
            if (query[0]%2 === 0) {
                sum += query[0];
                answer[index] = sum;
            } else {
                sum -= A[query[1]];
                answer[index] = sum;
                evenBit[query[1]] = false;
            }
        } else {
            if (query[0]%2 === 0) {
                answer[index] = sum;
            } else {
                evenBit[query[1]] = true;
                sum += (A[query[1]] + query[0]);
                answer[index] = sum;
            }
        }
        A[query[1]] += query[0];
    });
    return answer;
};

// test
const actual = sumEvenAfterQueries2([3,2], [[4,0], [3, 0]]);