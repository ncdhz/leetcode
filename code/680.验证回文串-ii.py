#
# @lc app=leetcode.cn id=680 lang=python3
#
# [680] 验证回文串 II
#

# @lc code=start
class Solution:
    
    def validPalindrome_(self, s, i):
        for j in range(len(s) // 2):
            if s[j] != s[len(s) - 1 - j]:
                if i == 0:
                    return self.validPalindrome_(s[j: len(s) - 1 - j], 1) | self.validPalindrome_(s[j + 1: len(s) - j], 1)
                else:
                    return False

        return True

    def validPalindrome(self, s: str) -> bool:
        return self.validPalindrome_(s, 0)
# @lc code=end

