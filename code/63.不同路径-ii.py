#
# @lc app=leetcode.cn id=63 lang=python3
#
# [63] 不同路径 II
#

# @lc code=start
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        x = [0] * len(obstacleGrid[0])
        if obstacleGrid[0][0] == 0:
            x[0] = 1
        else:
            return 0

        for i, o in enumerate(obstacleGrid):
            for j in range(len(o)):
                if obstacleGrid[i][j] == 0:
                    if j == 0:
                        continue
                    x[j] = x[j - 1] + x[j]
                else:
                    x[j] = 0
        return x[-1]

# @lc code=end

