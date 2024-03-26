#
# @lc app=leetcode.cn id=309 lang=python3
#
# [309] 买卖股票的最佳时机含冷冻期
#

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) == 1:
            return 0
        
        buy = -prices[0]
        stop = 0
        sell = 0

        for price in prices[1:]:
            buy, stop, sell = max([stop - price, buy]), max([stop, sell]), max([buy + price, sell]) 
        
        return max([stop, sell])
# @lc code=end
