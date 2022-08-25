#
# @lc app=leetcode.cn id=91 lang=python3
#
# [91] 解码方法
#

# @lc code=start
class Solution:
    def numDecodings(self, s: str) -> int:
        a = 0
        b = 1
        c = 0
        for i in range(1, len(s) + 1):
            c = 0
            if s[i - 1] != '0':
                c += b
            if i > 1 and s[i - 2] != '0' and int(s[i - 2: i]) <= 26:
                c += a
            a, b = b, c
        return c

# @lc code=end

