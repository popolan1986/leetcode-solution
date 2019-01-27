/**
 * @param {number[]} nums
 * @return {number}
 */
// todo tlan: too slow
var deleteAndEarn = function(nums) {
    let sum = nums.reduce((acc,cur) => {
        acc += cur;
        return acc;
    }, 0);

    let max = 0;

    const deleteAndEarnCore = (nums, sum) => {
        if (nums.length === 0) {
            max = Math.max(sum, max);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            let copySum = sum;
            const clone = [];
            // if pick ith element
            const lessOne = nums[i]-1;
            const aboveOne = nums[i]+1;
            for (let j = 0; j < nums.length; j++) {
                if (j === i) {
                    continue;
                }
                if (nums[j] === lessOne || nums[j] === aboveOne) {
                    copySum -= nums[j];
                } else {
                    clone.push(nums[j]);
                }
            }

            deleteAndEarnCore(clone, copySum);
        }
    };
    deleteAndEarnCore(nums, sum);
    return max;
};

// solution 2: DP
var deleteAndEarn1 = function(nums) {
    const n = 10001;
    const values = new Array(n);
    values.fill(0);
    nums.forEach((num) => {
        values[num] += num;
    });

    let take = 0, skip = 0;
    for (let i = 0; i < n; i++) {
        const takei = skip + values[i];
        const skipi = Math.max(skip, take);
        take = takei;
        skip = skipi;
    }

    return Math.max(take, skip);
};
