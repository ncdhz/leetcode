/*
 * @lc app=leetcode.cn id=463 lang=java
 *
 * [463] 岛屿的周长
 */

// @lc code=start
class Solution {
    public int islandPerimeter(int[][] grid) {
        int sum = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    if (i - 1 >= 0) {
                        if (grid[i - 1][j] == 0) sum++;
                    } else {
                        sum++;
                    }
                    if (i + 1 < grid.length) {
                        if (grid[i + 1][j] == 0) sum++;
                    } else {
                        sum++;
                    }
                    if (j - 1 >= 0) {
                        if (grid[i][j - 1] == 0) sum++;
                    } else {
                        sum++;
                    }
                    if (j + 1 < grid[i].length) {
                        if (grid[i][j + 1] == 0) sum ++;
                    } else {
                        sum++;
                    }
                }
            }
        }
        return sum;
    }
}
// @lc code=end

