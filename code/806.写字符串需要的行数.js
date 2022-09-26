/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let a = 0
    let b = 0    
    for (let i = 0; i < s.length; i++) {
        let j = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
        if (b + widths[j] < 100) {
            b += widths[j]
        } else if (b + widths[j] == 100) {
            b = 0
            a++
        } else {
            b = widths[j]
            a++
        }
    }
    if (b != 0) {
        a++
    } else {
        b = 100
    }
    return [a, b]
};
// @lc code=end

