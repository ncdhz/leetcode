/*
 * @lc app=leetcode.cn id=1662 lang=java
 *
 * [1662] 检查两个字符串数组是否相等
 */

// @lc code=start
class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        int i = 0;
        int j = 0;
        int m = 0;
        int n = 0;

        while (i < word1.length && m < word2.length) {
            if (j >= word1[i].length()) {
                j = 0;
                i++;
            }

            if (n >= word2[m].length()) {
                n = 0;
                m++;
                
            }

            if (m >= word2.length || i >= word1.length) {
                break;
            }

            if (word1[i].charAt(j) != word2[m].charAt(n)) {
                break;
            }
            j++;
            n++;
        }

        if (word1.length == i  && word2.length ==  m) {
            return true;
        }

        return false;
    }
}
// @lc code=end

