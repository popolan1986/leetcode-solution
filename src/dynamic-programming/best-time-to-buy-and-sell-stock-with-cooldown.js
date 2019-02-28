// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown
/*
We can create a state machine for this question.
SO - is the state of doing nothing, maybe active or passive
S1 - is the state after buying
S2 - is the state after selling
s0[i] = max(s0[i-1, s2[i-1]])
s1[i] = max(s1[i-1], s0[i-1] - prices[i])
s2[i] = s1[i-1] + prices[i]
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const s0 = [];
    const s1 = [];
    const s2 = [];
    s0[0] = 0;
    s1[0] = -prices[0];
    s2[0] = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < prices.length; i++) {
        s0[i] = Math.max(s0[i-1], s2[i-1]);
        s1[i] = Math.max(s1[i-1], s0[i-1] - prices[i]);
        s2[i] = s1[i-1] + prices[i];
    }
    return Math.max(s0[prices.length-1], s2[prices.length-1]);
};
