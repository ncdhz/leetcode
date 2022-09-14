/*
 * @lc app=leetcode.cn id=495 lang=java
 *
 * [495] 提莫攻击
 */

// @lc code=start
class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        if (timeSeries.length == 0) {
            return duration;
        }
        int sum = 0;
        for (int i = 1; i < timeSeries.length; i++) {
            if (timeSeries[i] - timeSeries[i - 1] < duration) {
                sum += timeSeries[i] - timeSeries[i - 1];
            } else {
                sum += duration;
            }
        }
        sum += duration;
        return sum;
    }
}
// @lc code=end

