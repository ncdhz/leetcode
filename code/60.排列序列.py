#
# @lc app=leetcode.cn id=60 lang=python3
#
# [60] 排列序列
#

# @lc code=start
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        sum_ = 1
        for i in range(1, n):
            sum_ *= i
        i = 1
        s = ''
        x = [str(i) for i in range(1, n + 1)]
        while i < n:
            j = (k - 1) // sum_
            s += x[j]
            del x[j]
            k = k % sum_
            sum_ //= (n - i)
            i += 1
        return s + x[0]
# @lc code=end

