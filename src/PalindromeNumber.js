/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    const digits = x.toString().split('');
    let begin = 0;
    let end = digits.length - 1;
    while (begin < end) {
        if (digits[begin] !== digits[end]) {
            return false;
        }
        begin++;
        end--;
    }

    return true;
};

var isPalindrome2 = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reverted = 0;
    while (x > reverted) {
        reverted = reverted * 10 + x % 10;
        // JavaScript has no integar type so we need to use floor
        x = Math.floor(x / 10);
    }

    return x === reverted || x === Math.floor(reverted / 10);
};