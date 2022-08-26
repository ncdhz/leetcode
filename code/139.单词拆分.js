/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let cache = {}
var wB = function(s, wD) {
    if (s === '') {
        return true
    }
    for (let i = 0; i < s.length; i++) {
        if (wD[s.substring(0, i + 1)] !== undefined) {
            if (cache[s.length - i - 1] !== undefined) {
                continue
            }
            let rb = wB(s.substring(i + 1, s.length), wD)
            cache[s.length - i - 1] = rb
            if (rb) {
                return true
            }
        }
    }
    return false
}
var wordBreak = function(s, wordDict) {
    cache = {}
    let wD = {}
    for (let w of wordDict) {
        wD[w] = 0
    }
    return wB(s, wD)
};
// @lc code=end

