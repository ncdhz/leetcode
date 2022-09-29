/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b != 0) {
        let c = (a & b) << 1
        a = a ^ b
        b = c
    }
    return a
};
// @lc code=end

