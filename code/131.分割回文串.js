/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start


var pn = function(result, r, ss, s, i) {
    if (i >= ss.length) {
        if (s === "") {
            result.push(Object.values(r))
        }
        return
    }

    s += ss[i]
    var is_h = true
    for(var j = 0; j < parseInt(s.length / 2); j++) {
        if (s[j] != s[s.length - 1 - j]) {
            is_h = false
            break
        }
    }

    if (is_h) {
        r.push(s)
        pn(result, r, ss, "", i + 1)
        r.pop()
    }
    pn(result, r, ss, s, i + 1)
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    result = []
    pn(result, [], s, "", 0)
    return result
};
// @lc code=end

