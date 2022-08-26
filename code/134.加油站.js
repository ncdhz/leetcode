/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let len = gas.length
    let i = 0 
    while(i < len) {
        if (gas[i] >= cost[i]) {
            let x = gas[i]
            let k = i
            for (let j = 0; j < len; j++) {
                let c = cost[(i + j) % len]
                if (x < c) {
                    i = i + j
                    break
                }  
                x = x + gas[(i + j + 1) % len] - c
            }

            if (i == k) {
                return i
            }
        }
        i += 1
    }
    return -1
};
// @lc code=end

