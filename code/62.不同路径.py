#
# @lc app=leetcode.cn id=62 lang=python3
#
# [62] 不同路径
#

# @lc code=start
class Solution:

    def uniquePaths(self, m: int, n: int) -> int:
        x = [1] * n
        for _ in range(1, m):
            for j in range(1, n):
                x[j] = x[j] + x[j - 1]
        return x[-1]
# @lc code=end

