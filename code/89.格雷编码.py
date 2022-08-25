#
# @lc app=leetcode.cn id=89 lang=python3
#
# [89] 格雷编码
#

# @lc code=start
class Solution:
    def grayCode(self, n: int) -> List[int]:
        result = [0, 1]
        for i in range(1, n):
            j = 1 << i
            for k in range(len(result) - 1, -1, -1):
                result.append(result[k] + j) 
        return result
# @lc code=end

