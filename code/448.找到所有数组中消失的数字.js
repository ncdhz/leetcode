/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i = 0
    while (i < nums.length) {
        let n = nums[i]
        if (nums[i] !== i + 1) {            
            nums[i] = nums[n - 1]
            nums[n - 1] = n
        }
        if (nums[i] == n) {
            i++
        }
    }
    let rs = []
    for (let i = 0; i < nums.length; i++) {
        nums[i] -= (i + 1)
        if (nums[i] !== 0) {
            rs.push(i + 1)
        }
    }
    return rs
};
// @lc code=end

