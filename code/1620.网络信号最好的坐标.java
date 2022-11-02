/*
 * @lc app=leetcode.cn id=1620 lang=java
 *
 * [1620] 网络信号最好的坐标
 */

// @lc code=start
class Solution {
    public int[] bestCoordinate(int[][] towers, int radius) {

        int xMax = Integer.MIN_VALUE;
        int yMax = Integer.MIN_VALUE;

        for (int[] tower: towers) {
            xMax = xMax > tower[0] ? xMax : tower[0];
            yMax = yMax > tower[1] ? yMax : tower[1];
        }


        int sum = 0;
        int[] r = {0, 0};

        for (int x = 0; x < xMax + 1; x++) {
            for (int y = 0; y < yMax + 1; y++) {
                int s = 0;
                for (int j = 0; j < towers.length; j++) {
                    int xx = x - towers[j][0];
                    int yy = y - towers[j][1];
                    double z = Math.sqrt(xx * xx + yy * yy);
                    if (z <= radius) {
                        s += Math.floor(towers[j][2] / (1 + z));
                    }
                }
                if (s > sum) {
                    sum = s;
                    r[0] = x;
                    r[1] = y;
                } 
            }
        }
     
        return r;
    }
}
// @lc code=end

