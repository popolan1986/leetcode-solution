function countAndSayCore(term) {
    if (term === '1') {
        return '11';
    }

    const length = term.length;
    let count = 0;
    let lastChar;
    let currentChar;
    const nextTerm = [];
    for (let i = 0; i < length; i++) {
        currentChar = term.charAt(i);
        if (!lastChar) {
            count++;
        } else {
            if (currentChar === lastChar) {
                count++;
            } else {
                nextTerm.push(count.toString());
                nextTerm.push(lastChar);
                count = 1;
            }
        }
        lastChar = currentChar;
    }

    nextTerm.push(count.toString());
    nextTerm.push(lastChar);

    return nextTerm.join('');
}

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n < 1 || n > 30) {
        throw new Error('out of range');
    }

    let i = 1;
    let term = '1';
    while (i++ < n) {
        term = countAndSayCore(term);
    }

    return term;
};

// test case
const actual = countAndSay(4);