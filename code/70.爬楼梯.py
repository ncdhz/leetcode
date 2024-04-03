#
# @lc app=leetcode.cn id=70 lang=python3
#
# [70] 爬楼梯
#

# @lc code=start
class Solution:
    def climbStairs(self, n: int) -> int:
        if n < 3:
            return n
        a = 1
        b = 2
        for _ in range(n - 2):
            b, a = a + b, b
        return b
# @lc code=end

