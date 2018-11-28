/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) {
        return true;
    }

    const map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const stack = [];

    const length = s.length;
    for (let i = 0; i < length; i++) {
        const char = s.charAt(i);
        if (char === '('
            || char === '{'
            || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length <= 0;
};

// faster than 100% of JS
// test case
const test = '([)]';
isValid(test);
