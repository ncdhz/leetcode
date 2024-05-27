#
# @lc app=leetcode.cn id=746 lang=python3
#
# [746] 使用最小花费爬楼梯
#

# @lc code=start
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        m1 = cost[1]
        m2 = min([m1, cost[0]])
        for c in cost[2:]:
            m2, m1 = min([m2 + c, m1]), m2 + c
        return m2
# @lc code=end
