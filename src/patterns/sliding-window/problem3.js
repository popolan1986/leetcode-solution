const longest_substring_with_k_distinct = function(str, k) {
    // TODO: Write your code here
    let max = -1,
    start = 0;
    const charFreqMap = {};
    for (let end = 0; end < str.length; end++) {
      const currentChar = str[end];
      if (charFreqMap[currentChar] === undefined) {
        charFreqMap[currentChar] = 0;
      }
      charFreqMap[currentChar] += 1;
      // when the length of distinct characters is more than k
      // shrink the window
      while (Object.keys(charFreqMap).length > k) {
        const startChar = str[start];
        if (charFreqMap[startChar] > 0) {
          charFreqMap[startChar] -= 1;
        }
        if (charFreqMap[startChar] === 0) {
          delete charFreqMap[startChar];
        }
        start += 1;
      }
      max = Math.max(max, end - start + 1);
    }
    return max;
  };
  