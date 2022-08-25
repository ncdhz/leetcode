#
# @lc app=leetcode.cn id=64 lang=python3
#
# [64] 最小路径和
#

# @lc code=start
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        x = {}
        def mps(i, j):
            g = grid[i][j]
            if i == 0 and j == 0:
                return g
            s1 = str(i * 200 + (j - 1))
            if s1 not in x and j > 0:
                x[s1] = mps(i, j - 1)
            if i == 0:
                return x[s1] + g
            
            s2 = str((i - 1) * 200 + j)
            if s2 not in x:
                x[s2] = mps(i - 1, j)
            if j == 0:
                return x[s2] + g

            return g + (x[s1] if x[s1] < x[s2] else x[s2])
        return mps(len(grid) - 1, len(grid[0]) - 1)
# @lc code=end

