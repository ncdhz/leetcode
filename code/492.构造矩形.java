/*
 * @lc app=leetcode.cn id=492 lang=java
 *
 * [492] 构造矩形
 */

// @lc code=start
class Solution {
    public int[] constructRectangle(int area) {
        int i = new Double(Math.sqrt(area)).intValue();
        int[] r = new int[2];
        for (int j = 0; j < i; j++) {
            if (area % (i - j) == 0) {
                r[0] = area / (i - j);
                r[1] = i - j;
                break;
            }
        }
        return r;
    }
}
// @lc code=end

