/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sorted = []
    nums.map((item, index) => {
        sorted.push([item, index])
    })
    sorted.sort((a, b) => {return a[0] - b[0]})
    let i = 0
    let j = sorted.length - 1
    while(true) {
        if (sorted[i][0] + sorted[j][0] === target) {
            return [sorted[i][1], sorted[j][1]]
        } else if (sorted[i][0] + sorted[j][0] > target) {
            j--
        } else {
            i++
        }
    }
};
// @lc code=end

