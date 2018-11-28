/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const lengthOfStrs = strs.length;
    if (lengthOfStrs === 0) {
        return '';
    }

    if (lengthOfStrs === 1) {
        return strs[0];
    }

    const minLength = Math.min(...strs.map((str) => str.length));
    const prefix = [];
    for (let i = 0; i < minLength; i++) {
        const target = strs[0].charAt(i);
        let isCommon = true;
        for (let j = 1; j < lengthOfStrs; j++) {
            if (target !== strs[j].charAt(i)) {
                isCommon = false;
                break;
            }
        }

        if (!isCommon) {
            break;
        }
        prefix.push(target);
    }

    return prefix.join('');
};

// test case
const test = ["flower","flow","flight"];
const expected = longestCommonPrefix(test);
