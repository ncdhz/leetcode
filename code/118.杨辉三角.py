#
# @lc app=leetcode.cn id=118 lang=python3
#
# [118] 杨辉三角
#

# @lc code=start
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []
        for i in range(numRows):
            rm = []
            for j in range(i + 1):
                if j == 0 or j == i:
                    rm.append(1)
                else:
                    rm.append(result[i - 1][j - 1] + result[i - 1][j])
            result.append(rm)
        return result
# @lc code=end

