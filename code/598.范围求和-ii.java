/*
 * @lc app=leetcode.cn id=598 lang=java
 *
 * [598] 范围求和 II
 */

// @lc code=start
class Solution {
    public int maxCount(int m, int n, int[][] ops) {
        if (ops.length == 0) {
            return m * n;
        }
        int minx = ops[0][0];
        int miny = ops[0][1];
        for (int i = 1; i < ops.length; i++) {
            if (ops[i][0] < minx) {
                minx = ops[i][0];
            }
            if (ops[i][1] < miny) {
                miny = ops[i][1];
            }
        }

        return minx * miny;
    }
}
// @lc code=end

