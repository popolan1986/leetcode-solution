// https://leetcode.com/problems/shopping-offers
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    return shopping(price, special, needs);
};

function shopping(price, special, needs) {
    let result = originalCostForNeeds(needs, price);
    let j;
    special.forEach((s) => {
        let clone = needs.slice();
        for (j = 0; j < needs.length; j++) {
            let diff = clone[j] - s[j];
            if (diff < 0) {
                break;
            }
            clone[j] = diff;
        }
        if (j === needs.length) {
            result = Math.min(result, s[j] + shopping(price, special, clone));
        }
    });
    return result;
}

function originalCostForNeeds(needs, price) {
    return needs.reduce((acc, cur, idx) => {
        acc += cur * price[idx];
        return acc;
    }, 0);
}

// solution #2 with memo !!! not faster than the original one
function shoppingWithMemo(price, special, needs, memo) {
    if (memo.has(needs)) {
        return memo.get(needs);
    }

    let result = originalCostForNeeds(needs, price);
    let j;
    special.forEach((s) => {
        let clone = needs.slice();
        for (j = 0; j < needs.length; j++) {
            let diff = clone[j] - s[j];
            if (diff < 0) {
                break;
            }
            clone[j] = diff;
        }
        if (j === needs.length) {
            result = Math.min(result, s[j] + shopping(price, special, clone));
        }
    });
    memo.set(needs, result);
    return result;
}