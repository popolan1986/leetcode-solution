/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const maxLength = Math.max(a.length, b.length);
    const newA = a.padStart(maxLength, '0');
    const newB = b.padStart(maxLength, '0');
    let digitSum;
    const result = [];
    let carry = 0;
    for (let i = maxLength - 1; i >= 0; i--) {
        digitSum = carry + Number(newA.charAt(i)) + Number(newB.charAt(i));
        result.unshift(digitSum % 2);
        carry = Math.trunc(digitSum / 2);
    }

    if (carry) {
        result.unshift(1);
    }

    return result.join('');
};

// faster than 52%. 优化方法：不要补齐字符串，短字符串结束后，直接复制取长字符串