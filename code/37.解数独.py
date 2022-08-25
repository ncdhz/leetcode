#
# @lc app=leetcode.cn id=37 lang=python3
#
# [37] 解数独
#
# @lc code=start
class Solution:
    def sSudoku(self, board, i, j, x, y, z):
        if board[i][j] == '.':
            for k in range(1, 10):
                k = str(k)
                l = x.get(i, [])
                m = y.get(j, [])
                n = z.get(str(i // 3) + str(j // 3), [])
                if k not in l and k not in m and k not in n:
                    board[i][j] = k
                    l.append(k)
                    m.append(k)
                    n.append(k)
                    x[i] = l
                    y[j] = m
                    z[str(i // 3) + str(j // 3)] = n
                    if i == 8 and j == 8:
                        return board
                    elif j == 8:
                        s = self.sSudoku(board, i + 1, 0, x, y, z)              
                    else:
                        s = self.sSudoku(board, i, j + 1, x, y, z)
                    if s != None:
                        return s
                    l.pop()
                    m.pop()
                    n.pop()
                    x[i] = l
                    y[j] = m
                    z[str(i // 3) + str(j // 3)] = n
            board[i][j] = '.'
            return None
        else:        
            if i == 8 and j == 8:
                return board
            elif j == 8:
                return self.sSudoku(board, i + 1, 0, x, y, z)
            else:
                return self.sSudoku(board, i, j + 1, x, y, z)

    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        x = {}
        y = {}
        z = {}
        for i in range(9):
            for j in range(9):
                k = board[i][j]
                if k == '.':
                    continue

                l = x.get(i, [])
                l.append(k)
                x[i] = l

                l = y.get(j, [])
                l.append(k)
                y[j] = l

                s = str(i // 3) + str(j // 3)
                l = z.get(s, [])
                l.append(k)
                z[s] = l
        
        return self.sSudoku(board, 0, 0, x, y, z)
# @lc code=end
