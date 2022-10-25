/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let s = new Set()
    for (let i = 0; i < candyType.length; i++) {
        s.add(candyType[i])
    }
    let j = parseInt(candyType.length / 2)
    return s.size > j ? j : s.size
};
// @lc code=end

