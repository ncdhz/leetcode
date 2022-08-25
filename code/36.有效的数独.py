#
# @lc app=leetcode.cn id=36 lang=python3
#
# [36] 有效的数独
#
# @lc code=start
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        x = {}
        v = {}
        for i in range(9):
            h = []
            if i % 3 == 0:
                x = {}
            for j in range(9):
                if board[i][j] == '.':
                    continue
                if board[i][j] not in h :
                    h.append(board[i][j])
                else:
                    return False
                
                y = v.get(j, [])
                if board[i][j] not in y:
                    y.append(board[i][j])
                    v[j] = y
                else:
                    return False

                y = x.get(j // 3, [])
                if board[i][j] not in y:
                    y.append(board[i][j])
                    x[j // 3] = y
                else:
                    return False
        return True
# @lc code=end

