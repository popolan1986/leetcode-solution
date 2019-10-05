// https://leetcode.com/problems/daily-temperatures/submissions/
// firstly I have this brute force solution. It is accepted but runtime is slow
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const result = [];
    for (let i = 0; i < T.length; i++) {
        let res = 0;
        let found = false;
        for (let j = i + 1; j < T.length; j++) {
            if (T[j] <= T[i]) {
                res += 1;
            } else {
                found = true;
                break;
            }
        }
        result[i] = found ? (res + 1) : 0;
    }
    return result;
};

/**
  In this solution I use stack. 
 */
class Stack {
    constructor() {
        this._internal = [];
    }
    
    push(value) {
        this._internal.push(value);
    }
    
    pop() {
        return this._internal.pop();
    }
    
    top() {
        const length = this._internal.length;
        return this._internal[length - 1];
    }
    
    isEmpty() {
        return this._internal.length === 0;
    }
}


/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures1 = function(T) {
    const stack = new Stack();
    const result = new Array(T.length);
    result.fill(0);
    for (let i = 0; i < T.length; i++) {
        while (!stack.isEmpty() && T[i] > T[stack.top()]) {
            const index = stack.pop();
            result[index] = i - index;
        }
        stack.push(i);
    }
    return result;
};