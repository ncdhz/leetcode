#
# @lc app=leetcode.cn id=73 lang=python3
#
# [73] 矩阵置零
#
# @lc code=start
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        is_c = False
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    if j == 0:
                        is_c = True
                    else:
                        matrix[0][j] = 0
                    matrix[i][0] = 0


        for i in range(len(matrix) - 1, -1, -1):
            for j in range(len(matrix[0]) - 1, -1, -1):
                if j != 0:
                    if matrix[0][j] == 0 or matrix[i][0] == 0:
                        matrix[i][j] = 0
                elif is_c:
                    matrix[i][0] = 0
# @lc code=end

