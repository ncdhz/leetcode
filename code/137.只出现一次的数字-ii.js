/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let r = 0
    for (let i = 0; i < 32; i++) { 
        let k = 0
        for (let j = 0; j < nums.length; j++) {
            k += (nums[j] >> i) & 1
        }
        r += (k % 3) << i
    }
    return r
};
// @lc code=end

