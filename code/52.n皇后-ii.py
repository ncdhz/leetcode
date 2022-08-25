#
# @lc app=leetcode.cn id=52 lang=python3
#
# [52] N皇后 II
#

# @lc code=start
class Solution:
    result = 0
    def tnq(self, n, x, k):
        if k == n:
            Solution.result += 1
            return

        for i in range(n):
            is_ok = True
            for xx in x:
                if i == xx:
                    is_ok = False
                    break
            if not is_ok:
                continue
            for j in range(len(x)):
                if i - len(x) + j == x[j] or i + len(x) - j == x[j]:
                    is_ok = False
                    break
            if not is_ok:
                continue
            x.append(i)
            self.tnq(n, x, k + 1)
            x.pop()

    def totalNQueens(self, n: int) -> int:
        Solution.result = 0
        self.tnq(n, [], 0)
        return Solution.result
# @lc code=end

