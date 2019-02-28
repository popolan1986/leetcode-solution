/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const chars = new Array(dominoes.length);
    chars.fill('.');
    pushDomiCore(dominoes, chars, 0);
    return chars.join('');
};

function pushDomiCore(dominoes, charArray, startIndex) {
    // use two indexes to find R and L
    let i = dominoes.indexOf('R');
    let j = dominoes.indexOf('L');
    if (i === -1 && j === -1) {
        return;
    }
    let jIndex = j + startIndex;
    if (j < i || i === -1) {
        // all domino before j is L state
        const newJ = j + startIndex;
        for (let k = startIndex; k < newJ; k++) {
            charArray[k] = 'L';
        }
        if (i === -1) {
            return;
        }
    } else if (j === -1) {
        const newI = i + startIndex;
        for (let k = newI; k < charArray.length; i++) {
            charArray[k] = 'R';
        }
        return;
    } else {
        let newI = i + startIndex;
        let newJ = j + startIndex;
        while(newI < newJ) {
            charArray[newI++] = 'R';
            charArray[newJ--] = 'L';
        }
        // there are an odd number of . states
        if (newI === newJ) {
            charArray[newI] = '.'
        }
        // there are an even number of . states
        // do nothing
    }
    // update clone
    const clone = dominoes.substring(j+1);
    pushDomiCore(clone, charArray, jIndex+1);
}

// test case
const actual = pushDominoes('.L.R...LR..L..');