#
# @lc app=leetcode.cn id=79 lang=python3
#
# [79] 单词搜索
#

# @lc code=start
class Solution:

    def exist(self, board: List[List[str]], word: str) -> bool:
        
        exit_ = False
        def is_exit(i, j, ls):
            nonlocal exit_
            k = len(ls) - 1
            if exit_:
                return
            if board[i][j] == word[k]:
                if k == len(word) - 1:
                    exit_ = True
                    return
                for ii, jj in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]:
                    if ii >= 0 and ii < len(board) and jj >= 0 and jj < len(board[ii]) and (ii, jj) not in ls:
                        ls.append((ii, jj))
                        is_exit(ii, jj, ls)
                        ls.pop()

        for i in range(len(board)):
            for j in range(len(board[i])):
                is_exit(i, j, [(i, j)])

        return exit_
# @lc code=end

