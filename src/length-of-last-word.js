/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s) {
        return 0;
    }

    const trimmed = s.trim();

    const index = trimmed.lastIndexOf(' ');
    const length = trimmed.length;
    if (index === -1) {
        return length;
    }
    return trimmed.length - 1 - index;
};
