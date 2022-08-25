#
# @lc app=leetcode.cn id=374 lang=python3
#
# [374] 猜数字大小
#

# @lc code=start
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        i = 1
        while i <= n:
            m = (i + n) // 2
            r = guess(m)
            if r == 0:
                return m
            elif r == -1:
                n = m - 1
            else:
                i = m + 1
# @lc code=end

