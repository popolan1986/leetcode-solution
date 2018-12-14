/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }

    let left = 1;
    let right = x;
    let middle;
    let result;
    while (left <= right) {
        middle = Math.trunc(left + (right - left) / 2);
        if (middle <= x / middle) {
            left = middle + 1;
            result = middle;
        } else {
            right = middle - 1;
        }
    }

    return result;
};
