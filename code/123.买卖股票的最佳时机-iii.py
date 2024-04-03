#
# @lc app=leetcode.cn id=123 lang=python3
#
# [123] 买卖股票的最佳时机 III
#

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy1 = -prices[0]
        buy2 = -prices[0] 
        sell1 = 0
        sell2 = 0
        
        for price in prices:
            buy1 = max([buy1, -price])
            sell1 = max([sell1, buy1 + price])
            buy2 = max([sell1 - price, buy2])
            sell2 = max([sell2, buy2 + price])
        
        return sell2
# @lc code=end

