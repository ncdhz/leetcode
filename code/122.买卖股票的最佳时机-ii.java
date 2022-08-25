/*
 * @lc app=leetcode.cn id=122 lang=java
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
        int sum = 0;
        int buy = -1;
        for (int i = 0; i < prices.length; i++) {
            if (i < prices.length - 1) {
                if (prices[i] <= prices[i + 1]) {
                    if (buy == -1) {
                        buy = i;
                    }
                } else {
                    if (buy != -1) {
                        sum += (prices[i] - prices[buy]);
                        buy = -1;
                    }
                }
            } else {
                if (buy != -1) {
                    sum += (prices[i] - prices[buy]);
                }
            }
        }
        return sum;
    }
}
// @lc code=end

