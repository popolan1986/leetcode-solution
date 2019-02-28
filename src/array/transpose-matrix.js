// https://leetcode.com/problems/transpose-matrix/
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const r = A.length;
    const c = A[0].length;
    const transpose = [];
    for (let i = 0; i < c; i++) {
        transpose[i] = [];
    }
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            transpose[j][i] = A[i][j];
        }
    }
    return transpose;
};

// test
const actual = transpose([[1,2,3],[4,5,6]]);