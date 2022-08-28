/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let rs = {}
    for (const ss of s) {
        let i = rs[ss]
        if (i === undefined) {
            i = 1
        } else {
            i += 1
        }
        rs[ss] = i
    }
    let is_ = false
    let j = 0
    for (const r in rs) {
        if (rs[r] % 2 === 1) {
            is_ = true
        }
        j += parseInt(rs[r] / 2)
    }
    return is_ ? j * 2 + 1: j * 2
};
// @lc code=end

