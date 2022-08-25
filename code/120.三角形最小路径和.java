import java.util.Arrays;
import java.util.Collections;

/*
 * @lc app=leetcode.cn id=120 lang=java
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
class Solution {

    public int minimumTotal(List<List<Integer>> triangle) {
        int m = 0;
        for (int i = 1; i < triangle.size(); i++) {
            for (int j = 0; j < triangle.get(i).size(); j++) {
                int ss = triangle.get(i).get(j);
                if (j == 0) {
                    m = triangle.get(i - 1).get(j);
                } else if (j == i) {
                    m = triangle.get(i - 1).get(j - 1);
                } else {
                    m = Integer.min(triangle.get(i - 1).get(j), triangle.get(i - 1).get(j - 1));
                }
                triangle.get(i).set(j, ss + m);
            }
        }
        return Collections.min(triangle.get(triangle.size() - 1));
    }
}
// @lc code=end

