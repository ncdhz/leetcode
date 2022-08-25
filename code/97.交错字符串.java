/*
 * @lc app=leetcode.cn id=97 lang=java
 *
 * [97] 交错字符串
 */

// @lc code=start
class Solution {

    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) {
            return false;
        }

        int a = s1.length();
        int b = s2.length();

        boolean[] m = new boolean[b + 1];
        m[0] = true;
        for (int i = 0; i <= a; i++) {
            for (int j = 0; j <= b; j++) {
                int p = i + j - 1;
                if (i > 0) {
                    m[j] = (m[j] && s1.charAt(i - 1) == s3.charAt(p));
                } 
                if (j > 0) {
                    m[j] |= (m[j - 1] && s2.charAt(j - 1) == s3.charAt(p));
                }
            }
        }
        return m[b];
    }
}
// @lc code=end

