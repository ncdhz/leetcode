#
# @lc app=leetcode.cn id=122 lang=python3
#
# [122] 买卖股票的最佳时机 II
#

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        sum_ = 0
        for i in range(len(prices) - 1, 0, -1):
            if prices[i] > prices[i - 1]:
                sum_ += prices[i] - prices[i - 1]
        return sum_
# @lc code=end

