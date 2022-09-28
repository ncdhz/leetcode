/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let r = ""
    let sign = num > 0 ? "" : "-"
    num = Math.abs(num)
    while( num != 0 ) {
        r = num % 7 + r
        num = parseInt(num / 7)
    }
    if (r === "") {
        return "0"
    } 
    return sign + r
};
// @lc code=end

