/*
 * @lc app=leetcode.cn id=915 lang=javascript
 *
 * [915] 分割数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    r = 0
    cur_max = nums[0]
    left_max = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        cur_max = Math.max(nums[i], cur_max)
        if (left_max > nums[i]) {
            r = i
            left_max = cur_max
        }
    }

    return r + 1 
};
// @lc code=end

