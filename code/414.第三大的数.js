/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let third = null
    let two = null
    let one = null
    for (let n of nums) {
        if (one === null || n >= one) {
            if (n === one) {
                continue
            }
            third = two
            two = one
            one = n
        } else if (two === null || n >= two) {
            if (n === two) {
                continue
            }
            third = two
            two = n
        } else if (third === null || n >= third) {
            third = n
        }
    }
    return third === null ? one : third
};
// @lc code=end

