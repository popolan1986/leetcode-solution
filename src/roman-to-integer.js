/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const length = s.length;
    const symbolMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let result = 0;
    let lastChar;
    for (let i = length - 1; i >= 0; i--) {
        const current = s.charAt(i);
        if (current === 'I' && (lastChar === 'V' || lastChar === 'X')) {
            result -= 1;
        } else if (current === 'X' && (lastChar === 'L' || lastChar === 'C')) {
            result -= 10;
        } else if (current === 'C' && (lastChar === 'D' || lastChar === 'M')) {
            result -= 100;
        } else {
            result += symbolMap[current];
        }

        // update last char
        lastChar = current;
    }

    return result;
};