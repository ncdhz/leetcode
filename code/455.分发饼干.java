import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=455 lang=java
 *
 * [455] 分发饼干
 */

// @lc code=start
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int sum = 0;
        int i = 0;
        for(int gg: g) {
            while (i < s.length && gg > s[i]) {
                i++;
            }
            if (i == s.length) {
                continue;
            } else {
                sum += 1;
                i++;
            }
        }
        return sum;
    }
}
// @lc code=end

