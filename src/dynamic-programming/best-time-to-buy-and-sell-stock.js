// time complexity is O(n^2) and space complexity is O(1).
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentMax = 0;
    const length = prices.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (prices[j] > prices[i]) {
                currentMax = Math.max(currentMax, prices[j] - prices[i]);
            }
        }
    }

    return currentMax;
};

// time complexity is O(n) and space complexity is O(1).
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxprofit) {
            maxprofit = prices[i] - minPrice;
        }
    }
    return maxprofit;
};
