/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;
    const input = isNegative ? Math.abs(x) : x;
    const result = Number.parseInt(input.toString().split('').reverse().join(''));
    if (result > Math.pow(2, 31) - 1) {
        return 0;
    }
    return isNegative ? result * -1 : result;
};