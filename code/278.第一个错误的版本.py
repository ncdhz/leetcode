#
# @lc app=leetcode.cn id=278 lang=python3
#
# [278] 第一个错误的版本
#

# @lc code=start
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        s = 0
        while s < n:
            m = (s + n) // 2
            b = isBadVersion(m)
            if b:
                n = m
            else:
                s = m + 1
        return n

# @lc code=end

