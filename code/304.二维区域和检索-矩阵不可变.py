#
# @lc app=leetcode.cn id=304 lang=python3
#
# [304] 二维区域和检索 - 矩阵不可变
#

# @lc code=start
class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        self.__data = []
        
        if len(matrix) > 0:
            self.__data.append([0] * (len(matrix[0]) + 1))

        for i in range(len(matrix)):
            d = [0]
            for j in range(len(matrix[0])):
                d.append(d[j] + self.__data[i][j + 1] - self.__data[i][j] + matrix[i][j])
            self.__data.append(d)

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return self.__data[row2 + 1][col2 + 1] - self.__data[row1][col2 + 1] - self.__data[row2 + 1][col1] + self.__data[row1][col1]
    
# @lc code=end

