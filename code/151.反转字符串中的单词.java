/*
 * @lc app=leetcode.cn id=151 lang=java
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
class Solution {
    public String reverseWords(String s) {
        String result = "";
        String rs =  "";
        for (char ss: s.toCharArray()) {
            if (ss != ' ') {
                rs += ss;
            } else if (!rs.equals("")) {
                result = rs + " " + result;
                rs = "";
            }
        }
        if (!rs.equals("")) {
            result = rs + " " + result;
        }
        return result.substring(0, result.length() - 1);
    }
}
// @lc code=end

