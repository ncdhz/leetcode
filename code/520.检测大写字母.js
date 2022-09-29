/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let isU = word[0] >= 'A' && word <= 'Z'
    for (let i = 1; i < word.length; i++) {
        if (!isU && word[i] >= 'A' && word[i] <= 'Z') {
            return false
        }
        if (isU && word[i] >= 'a' && word[i] <= 'z' && i > 1) {
            return false
        }
        if (word[i] >= 'a' && word[i] <= 'z') {
            isU = false
        }
    }
    return true
};
// @lc code=end

