function minNumberInRotateArray(rotateArray) {
    // write code here
    if (rotateArray.length === 0) {
        return 0;
    }
    // initialize the left and right index
    let left = 0,
        right = rotateArray.length - 1;
    let midIndex = 0;
    while (left < right) {
        if (left + 1 === right) {
            return rotateArray[left];
        }
        midIndex = Math.floor((left+right)/2);
        if (rotateArray[midIndex] > rotateArray[right]) {
            left = midIndex + 1;
        } else if (rotateArray[midIndex] < rotateArray[left]) {
            right = midIndex - 1;
        } else if (rotateArray[midIndex] === rotateArray[left] && rotateArray[midIndex] === rotateArray[right]) {
            break;
        }
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = left; i < right; i++) {
        min = Math.min(rotateArray[i], min);
    }
    return min;
}

// test
let input = [3,4,5,1,2];
let result = minNumberInRotateArray(input);
console.log(result);

input = [1,1,1,0,1];
result = minNumberInRotateArray(input);
console.log(result);