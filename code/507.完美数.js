/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num == 1) return false
    let sum = 1
    let i = 2
    while(i <= num / i) {
        if (num % i === 0) {
            sum += i
            sum += num / i
        }
        if (sum > num) {
            return false
        }
        i++
    }
    if (sum === num) return true
    return false
    
};
// @lc code=end

