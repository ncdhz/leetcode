#
# @lc app=leetcode.cn id=51 lang=python3
#
# [51] N 皇后
#

# @lc code=start
class Solution:
    result = []
    def snq(self, n, x, k):
        if k == n:
            Solution.result.append(x.copy())
            return

        for i in range(n):
            is_ok = True
            for xx in x:
                if xx[i] == 'Q':
                    is_ok = False
                    break
            if not is_ok:
                continue
            
            for j in range(len(x)):
                if i - len(x) + j >= 0 and x[j][i - len(x) + j] == 'Q':
                    is_ok = False
                    break
                if i + len(x) - j < n and x[j][i + len(x) - j] == 'Q':
                    is_ok = False
                    break
            if not is_ok:
                continue
            y = ['.'] * n
            y[i] = 'Q'
            x.append(''.join(y))
            self.snq(n, x, k + 1)
            x.pop()
    def solveNQueens(self, n: int) -> List[List[str]]:
        Solution.result = []
        self.snq(n, [], 0)
        return Solution.result
# @lc code=end

