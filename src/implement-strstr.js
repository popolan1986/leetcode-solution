function getNext(needle, next) {
    let length = needle.length;
    next[0] = -1;
    let k = -1;
    let j = 0;
    while (j < length - 1) {
        if (k === -1 || needle[j] === needle[k]) {
            ++k;
            ++j;
            next[j] = k;
        } else {
            k = next[k];
        }
    }
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }

    const next = [];
    getNext(needle, next);

    let i = 0;
    let j = 0;
    let needleLength = needle.length;
    while (i < haystack.length && j < needleLength) {
        if (j === -1 || haystack.charAt(i) === needle.charAt(j)) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    if (j === needleLength) {
        return i - j;
    } else {
        return -1;
    }
};

// faster than 25.19% of JavaScript online submissions. Why is KMP so slow?
