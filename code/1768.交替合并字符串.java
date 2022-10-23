/*
 * @lc app=leetcode.cn id=1768 lang=java
 *
 * [1768] 交替合并字符串
 */

// @lc code=start
class Solution {
    public String mergeAlternately(String word1, String word2) {
        int i = 0;
        int j = 0;
        int k = 0;
        char[] s = new char[word1.length() + word2.length()];
        while (i < word1.length() || j < word2.length()) {
            if (i < word1.length()) {
                s[k] = word1.charAt(i);
                i++;
                k++;
            }
            if (j < word2.length()) {
                s[k] = word2.charAt(j);
                j++;
                k++;
            }
        }
        return new String(s);
    }
}
// @lc code=end

