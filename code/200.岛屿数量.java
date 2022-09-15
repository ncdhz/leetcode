import java.util.HashSet;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=200 lang=java
 *
 * [200] 岛屿数量
 */

// @lc code=start
class Solution {
    Set<Integer> ss = new HashSet<>();

    public void ni(char[][] grid, int i, int j) {
        ss.add(getKey(i, j));
        if (i > 0 && grid[i - 1][j] == '1' && !ss.contains(getKey(i - 1, j))) {
            ni(grid, i - 1, j);
        }
        if (i < grid.length - 1 && grid[i + 1][j] == '1' && !ss.contains(getKey(i + 1, j))) {
            ni(grid, i + 1, j);
        }
        if (j > 0 && grid[i][j - 1] == '1' && !ss.contains(getKey(i, j - 1))) {
            ni(grid, i, j - 1);
        }
        if (j < grid[0].length - 1 && grid[i][j + 1] == '1' && !ss.contains(getKey(i, j + 1))) {
            ni(grid, i, j + 1);
        }
    }

    public int getKey(int i, int j) {
        return i * 1000 + j;
    }

    public int numIslands(char[][] grid) {
        ss.clear();
        int sum = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == '1' && !ss.contains(getKey(i, j))) {
                    ni(grid, i, j);
                    sum += 1;
                }
            }
        }
        return sum;
    }
}
// @lc code=end

