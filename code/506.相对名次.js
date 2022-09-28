/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    for (let i = 0; i < score.length; i++) {
        score[i] = [score[i], i]
    }
    score = score.sort((a, b) => {return b[0] - a[0]})
    let r = new Array(score.length)
    for (let i = 0; i < score.length; i++) {
        let j = score[i][1]
        switch (i) {
            case 0:
                r[j] = "Gold Medal"
                break
            case 1:
                r[j] = "Silver Medal"
                break
            case 2:
                r[j] = "Bronze Medal"
                break
            default:
                r[j] = i + 1 + ""
        }
    }
    return r
};
// @lc code=end

