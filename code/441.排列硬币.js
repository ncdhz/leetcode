/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sum_ = 0
    for(let i = 1; i <= n; i ++) {
        if ((sum_ += i) >= n) {
            if (sum_ === n) {
                return i
            } 
            return i - 1
        }
    }
};
// @lc code=end

