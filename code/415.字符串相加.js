/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = 0
    let f = 0
    let n1_len = num1.length
    let n2_len = num2.length
    let rs = ''
    while (i < n1_len || i < n2_len) {
        let n1 = i < n1_len ? parseInt(num1[n1_len - 1 - i]): 0
        let n2 = i < n2_len ? parseInt(num2[n2_len - 1 - i]) : 0
        let p = n1 + n2  + f
        if (p >= 10) {
            f = 1
            p = p % 10
        } else {
            f = 0
        }
        rs = p + rs
        i ++
    }
    if (f === 1) {
        rs = f + rs
    }

    return rs
};
// @lc code=end

