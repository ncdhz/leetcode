import java.util.Arrays;

/*
 * @lc app=leetcode.cn id=174 lang=java
 *
 * [174] 地下城游戏
 */

// @lc code=start
class Solution {

    public int calculateMinimumHP(int[][] dungeon) {
        int m = dungeon.length;
        int n = dungeon[0].length;
        int[][] ds = new int[m + 1][n  + 1];
        for (int i = 0; i <= m; i++) {
            Arrays.fill(ds[i], Integer.MAX_VALUE);
        }
        ds[m - 1][n] = 1;
        ds[m][n - 1] = 1;
        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                ds[i][j] =Math.max(Math.min(ds[i][j + 1], ds[i + 1][j]) - dungeon[i][j], 1);
            }
        }
        return ds[0][0];
    }
}
// @lc code=end

