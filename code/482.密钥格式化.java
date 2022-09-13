/*
 * @lc app=leetcode.cn id=482 lang=java
 *
 * [482] 密钥格式化
 */

// @lc code=start
class Solution {
    public String licenseKeyFormatting(String s, int k) {
        StringBuffer sb = new StringBuffer();
        int j = 0;
        for (int i = s.length() - 1; i > -1; i--) {
            if (s.charAt(i) != '-') {
                if (j == k) {
                    j = 0;
                    sb.insert(0, '-');
                }
                j++;
                sb.insert(0, s.charAt(i));
            }
            
        }
        return sb.toString().toUpperCase();
    }
}
// @lc code=end

