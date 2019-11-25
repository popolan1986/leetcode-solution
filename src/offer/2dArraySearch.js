const findHelp = (target, array, rows, columns) => {
    let found = false;
    if (rows > 0 && columns > 0) {
        let rowIndex = 0;
        let columnIndex = columns - 1;
        while (rowIndex < rows && columnIndex >= 0) {
            if (array[rowIndex][columnIndex] === target) {
                found = true;
                break;
            } else if (array[rowIndex][columnIndex] > target) {
                columnIndex -= 1;
            } else {
                rowIndex += 1;
            }
        }
    }
    return found;
}

function Find(target, array) {
    // write code here
    if (array === null || array === undefined) {
        return false;
    }
    if (array.length === 0) {
        return false;
    }
    return findHelp(target, array, array.length, array[0].length);
}

const input = [
    [1,2,3,4,5],
    [2,4,7,8,9],
    [3,5,8,10,11],
];

const result = Find(7, input);
console.log(result);