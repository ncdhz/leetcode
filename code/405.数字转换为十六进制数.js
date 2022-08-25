/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) {
        return "0"
    }
    const th = []
    for (let i = 7; i >= 0; i--) {
        var v = (num >> (4 * i)) & 0xf
        if (th.length > 0 || v > 0) {
            th.push(v < 10 ? String.fromCharCode('0'.charCodeAt() + v) : String.fromCharCode('a'.charCodeAt() + (v - 10)))
        }
    }
    return th.join('')
};
// @lc code=end

