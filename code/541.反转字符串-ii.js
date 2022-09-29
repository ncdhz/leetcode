/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let rs = ""
    let i = 0
    while (i < s.length) {
        let r = ""
        for(let j = 0; j < k && j + i < s.length; j++) {
            r = s[i + j] + r
        }
        rs += r 
        rs += s.substring(i + k, i + 2 * k)
        i += 2 * k
    }
    return rs
};
// @lc code=end

