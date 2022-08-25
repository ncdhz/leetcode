#
# @lc app=leetcode.cn id=121 lang=python3
#
# [121] 买卖股票的最佳时机
#

# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        price = 0
        s = prices[0]
        for p in prices:
            if p - s < 0:
                s = p
            elif p - s > price:
                price = p - s
        return price

# @lc code=end

