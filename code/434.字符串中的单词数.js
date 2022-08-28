/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let sl = s.split(' ')
    let len = sl.length

    for (const ss of sl) {
        if (ss === '') {
            len -= 1
        }
    }
    return len
};
// @lc code=end

