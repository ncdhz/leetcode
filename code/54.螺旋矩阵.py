#
# @lc app=leetcode.cn id=54 lang=python3
#
# [54] 螺旋矩阵
#
# @lc code=start
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        r = []
        i = 0
        while len(matrix) > 0 and len(matrix[0]) > 0:
            if i == 0:
                m = matrix[0]
                r.extend(m)
                del matrix[0]
            elif i == 1:
                for j in range(len(matrix)):
                    m = matrix[j][-1]
                    r.append(m)
                    del matrix[j][-1]
            elif i == 2:
                m = matrix[-1]
                
                del matrix[-1]
                for j in range(len(m) - 1, -1, -1):
                    r.append(m[j])
            elif i == 3:
                for j in range(len(matrix) - 1, -1, -1):
                    m = matrix[j][0]
                    r.append(m)
                    del matrix[j][0]
            i = (i + 1) % 4 
        return r
# @lc code=end

