/*
 * @lc app=leetcode.cn id=459 lang=java
 *
 * [459] 重复的子字符串
 */

// @lc code=start
class Solution {
    public boolean repeatedSubstringPattern(String s) {
        for (int i = 1; i <= s.length() / 2; i++) {
            if (s.length() % i != 0) {
                continue;
            }
            boolean is_ok = true;
            String sub = s.substring(0, i);
            for (int j = i; j < s.length(); j += i) {
                if (j + i > s.length() || !s.substring(j, j + i).equals(sub)) {
                    is_ok = false;
                    break;
                }
            }
            if (is_ok) {
                return true;
            }
        }
        return false;
    }
}
// @lc code=end

