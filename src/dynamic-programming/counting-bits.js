function countBitsForEven(num, power) {
    let result = 0;
    while (num > 0) {
        result += num & 1;
        num = num >> 1;
    }
    return result;
}

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if (num === 0) {
        return [ 0 ];
    }

    const bitNums = [];
    bitNums[0] = 0;
    for (let i = 1; i <= num; i++) {
        // isOdd
        if (i % 2 !== 0) {
            bitNums[i] = bitNums[i - 1] + 1;
        } else if (Number.isInteger(Math.log2(i))) {
            // powers of 2
            bitNums[i] = 1;
        } else {
            // isEven
            bitNums[i] = countBitsForEven(i);
        }
    }

    return bitNums;
};

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits2 = function(num) {
    if (num === 0) {
        return [ 0 ];
    }

    const bitNums = [];
    bitNums[0] = 0;
    // bitNums[i] = bitNums[i / 2] + i%2;
    for (let i = 1; i <= num; i++) {
        bitNums[i] = bitNums[i >> 1] + i % 2;
    }

    return bitNums;
};
