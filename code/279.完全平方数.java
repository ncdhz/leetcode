/*
 * @lc app=leetcode.cn id=279 lang=java
 *
 * [279] 完全平方数
 */

// @lc code=start
class Solution {
    public int numSquares(int n) {
        int[] t = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            int x = Integer.MAX_VALUE;
            for (int j = 1; j * j <= i; j++) {
                x = Integer.min(x, t[i - j * j]);
            }
            t[i] = x + 1;
        }
        return t[n];
    }
}
// @lc code=end

