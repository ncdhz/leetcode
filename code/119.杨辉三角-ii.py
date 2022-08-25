#
# @lc app=leetcode.cn id=119 lang=python3
#
# [119] 杨辉三角 II
#

# @lc code=start
class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        result = None
        for i in range(rowIndex + 1):
            rm = []
            for j in range(i + 1):
                if j == 0 or j == i:
                    rm.append(1)
                else:
                    rm.append(result[j - 1] + result[j])
            result = rm
        return result     
# @lc code=end

