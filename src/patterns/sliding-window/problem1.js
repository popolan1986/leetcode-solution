const max_sub_array_of_k = (k, arr) => {
    let max = 0,
    windowSum = 0,
    windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= k-1) {
            max = Math.max(max, windowSum);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return max;
}