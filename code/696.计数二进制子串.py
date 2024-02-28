#
# @lc app=leetcode.cn id=696 lang=python3
#
# [696] 计数二进制子串
#

# @lc code=start
class Solution:
    def countBinarySubstrings(self, s: str) -> int:
        sign = -1
        sum_ = 0
        for i in range(1, len(s)):
            if s[i] != s[i- 1]:
                sum_ += 1
                sign = i - 2
            elif sign > -1:
                if s[i] != s[sign]:
                    sum_ += 1
                    sign -= 1
                else:
                    sign = -1

        return sum_
# @lc code=end

