/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let s = new Set(banned)
    let ps = paragraph.split(/!|\?|\'|,|;|\.| /)
    
    let r = null
    let rs = {}
    for (let p of ps) {
        p = p.toLowerCase()
        if (p === '' || s.has(p)) continue
        if (r === null) r = p
        if (rs[p] === undefined) {
            rs[p] = 1
        } else {
            rs[p] += 1
        }
        if (rs[p] > rs[r]) r = p
    }
    return r
};
// @lc code=end

