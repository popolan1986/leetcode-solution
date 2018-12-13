/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = true;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (carry && digits[i] + 1 === 10) {
            digits[i] = 0;
        } else {
            digits[i] += 1;
            carry = false;
            break;
        }
    }

    if (carry) {
        digits.unshift(1);
        return digits;
    }
    return digits;
};

// faster than 100%
var plusOne2 = function(digits) {
    const length = digits.length;
    let carry = true;
    for (let i = length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    if (carry) {
        digits.unshift(1);
    }
    return digits;
};
