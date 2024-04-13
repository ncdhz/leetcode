#
# @lc app=leetcode.cn id=188 lang=python3
#
# [188] 买卖股票的最佳时机 IV
#
from typing import List
# @lc code=start
class Solution:
    def maxProfit(self, k: int, prices: List[int]) -> int:
        bs = [0] * (2 * k)
        for i in range(k):
            bs[i * 2] = -prices[0]
        
        for price in prices[1:]:
            for i in range(k):
                bse = [bs[i * 2]]
                if i != 0:
                    bse.append(bs[i * 2 - 1] - price)
                else:
                    bse.append(-price)
                
                bs[i * 2] = max(bse)
                bs[i * 2 + 1] = max([bs[i * 2] + price, bs[i * 2 + 1]])
        return max(bs)
# @lc code=end

