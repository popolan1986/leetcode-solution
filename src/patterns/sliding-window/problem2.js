const smallest_subarray_with_given_sum = function(s, arr) {
    let min = arr.length,
    sum = 0,
    start = 0;
    for (let end = 0; end < arr.length; end++) {
      sum += arr[end];
      while (sum >= s) {
        min = Math.min(min, end - start + 1);
        sum -= arr[start];
        start += 1;
      }
    }
    return min;
  };