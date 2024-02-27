#
# @lc app=leetcode.cn id=289 lang=python3
#
# [289] 生命游戏
#
# @lc code=start
class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        copy_data = [[0] * len(board[i]) for i in range(len(board))]
        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] == 1:
                    for m in [-1, 0, 1]:
                        if not (0 <= i + m < len(board)):
                            continue
                        for n in [-1, 0, 1]:
                            if m == 0 and n == 0:
                                continue
                            if 0 <= j + n < len(board[i]):
                                copy_data[i + m][j + n] += 1

        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] == 1:
                    if copy_data[i][j] < 2 or copy_data[i][j] > 3:
                        board[i][j] = 0
                    else:
                        board[i][j] = 1
                elif copy_data[i][j] == 3:
                    board[i][j] = 1

# @lc code=end

