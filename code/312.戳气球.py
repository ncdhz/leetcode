#
# @lc app=leetcode.cn id=312 lang=python3
#
# [312] 戳气球
#

# @lc code=start
class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        nums = [1] + nums + [1]
        n = len(nums)
        dps = [[0] * n for _ in range(n)]

        for i in range(n - 3, -1, -1):
            for j in range(i + 2, n):
                for k in range(i + 1, j):
                    t = nums[i] * nums[k] * nums[j]
                    t += dps[i][k] + dps[k][j]
                    dps[i][j] = max([dps[i][j], t])
        return dps[0][n - 1]
# @lc code=end

