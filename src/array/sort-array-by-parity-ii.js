// https://leetcode.com/problems/sort-array-by-parity-ii/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let i = 0, j = 1;
    while (true) {
        while (i < A.length - 1 && A[i]%2 === 0) {
            i += 2;
        }
        while (j < A.length && A[j]%2 !== 0) {
            j += 2;
        }
        if (i >= A.length - 1 || j >= A.length) {
            break;
        }
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
        i += 2;
        j += 2;
    }
    return A;
};

// test
const actual = sortArrayByParityII([4,2,5,7]);
