// https://leetcode.com/problems/rotate-image/
// https://leetcode.com/problems/rotate-image/discuss/18872/A-common-method-to-rotate-the-image
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	// clockwise rotate
	matrix.reverse();
	for (let i = 0; i < matrix.length; i++) {
		for (let j = i+1; j < matrix.length; j++) {
			const tmp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = tmp;
		}
	}
};